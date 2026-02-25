import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        if (!url || typeof url !== "string") {
            return NextResponse.json({ error: "Введите корректный URL сайта." }, { status: 400 });
        }

        const apiKey = process.env.GOOGLE_GEMINI_API_KEY?.trim();

        // Final fallback if key is missing
        if (!apiKey) {
            return NextResponse.json({
                domain: url,
                red: ["API ключ не настроен (GOOGLE_GEMINI_API_KEY)"],
                yellow: ["Режим симуляции включен"],
                green: ["Система готова к работе"],
            });
        }

        const prompt = `Ты старший IT-юрист РФ. Твоя задача провести аудит сайта: ${url}. 
        Проверь его на соответствие:
        1. 152-ФЗ и 242-ФЗ (Персональные данные, локализация).
        2. 168-ФЗ (Закон о языке, запрет иностранных слов на кнопках).
        3. 38-ФЗ (Реклама - спам, согласия).
        4. 149-ФЗ (ИИ, передача данных в мессенджеры).
        
        Выдай результат СТРОГО в JSON-формате по следующей структуре:
        {
          "domain": "доменное имя сайта",
          "red": ["массив строк критических нарушений"],
          "yellow": ["массив строк рисков и предупреждений"],
          "green": ["массив строк соответствия норме"]
        }
        Ответ должен быть только JSON, без форматирования и Markdown.`;

        // Direct Fetch with v1 endpoint (v1beta often fails in restricted regions)
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { temperature: 0.2 },
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            if (data.error?.message?.includes("User location is not supported")) {
                throw new Error("API Gemini недоступно в вашем регионе без VPN/Proxy. Пожалуйста, запустите прокси или используйте OpenAI.");
            }
            throw new Error(`Google API Error: ${data.error?.message || "Неизвестная ошибка"}`);
        }

        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

        // Clean up JSON response from markdown wrappers if any
        const cleanedJson = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
        let auditResult;

        try {
            auditResult = JSON.parse(cleanedJson);
        } catch (e) {
            // Fallback for non-json response
            auditResult = {
                domain: url,
                red: ["Нарушение 152-ФЗ (не удалось разобрать ответ ИИ)"],
                yellow: ["Рекомендуется ручная проверка"],
                green: ["Сайт доступен"],
            };
        }

        // Send email notification to vlad575@mail.ru
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST || "smtp.mail.ru",
                port: Number(process.env.SMTP_PORT) || 465,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });

            if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
                await transporter.sendMail({
                    from: `"Resurs Audit Bot" <${process.env.SMTP_USER}>`,
                    to: "vlad575@mail.ru",
                    subject: `Новая проверка сайта: ${url}`,
                    text: `Пользователь запустил проверку сайта: ${url}\n\nРезультаты:\n${JSON.stringify(auditResult, null, 2)}`,
                });
            }
        } catch (emailError) {
            console.error("Email notify failed:", emailError);
        }

        return NextResponse.json(auditResult);

    } catch (error: any) {
        console.error("Audit API Error:", error);
        return NextResponse.json({ error: error.message || "Ошибка при анализе сайта." }, { status: 500 });
    }
}
