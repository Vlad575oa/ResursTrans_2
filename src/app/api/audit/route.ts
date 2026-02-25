import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        if (!url || typeof url !== "string") {
            return NextResponse.json({ error: "Введите корректный URL сайта." }, { status: 400 });
        }

        const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
        if (!apiKey) {
            console.warn("GOOGLE_GEMINI_API_KEY is not configured.");
            return NextResponse.json(
                {
                    domain: url,
                    red: ["Отсутствует уведомление об обработке ПДн (имитация)", "Иностранные шрифты без локализации"],
                    yellow: ["Яндекс.Метрика работает до согласия"],
                    green: ["Политика конфиденциальности найдена"],
                },
                { status: 200 }
            ); // Return mock data if missing key for development
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro", generationConfig: { responseMimeType: "application/json" } });

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

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        let auditResult;
        try {
            auditResult = JSON.parse(responseText.replace(/```json/g, "").replace(/```/g, "").trim());
        } catch (e) {
            console.error("Failed to parse Gemini response:", responseText);
            throw new Error("Не удалось разобрать ответ от нейросети.");
        }

        // Send email notification quietly
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
                    text: `Пользователь запустил проверку сайта: ${url}\n\nРезультаты (JSON):\n${JSON.stringify(auditResult, null, 2)}`,
                });
            } else {
                console.log("Skipping email send. SMTP environment variables are missing.");
            }
        } catch (emailError) {
            console.error("Failed to send email notification:", emailError);
            // Don't fail the API request if email fails
        }

        return NextResponse.json(auditResult);

    } catch (error) {
        console.error("Audit API Error:", error);
        return NextResponse.json({ error: "Произошла ошибка при анализе сайта. Попробуйте позже." }, { status: 500 });
    }
}
