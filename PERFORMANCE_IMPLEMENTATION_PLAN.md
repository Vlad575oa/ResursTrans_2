# 🚀 PERFORMANCE OPTIMIZATION IMPLEMENTATION PLAN

## Целевые метрики

| Метрика | Текущее значение | Цель | Приоритет |
|---------|------------------|------|-----------|
| **LCP** | 10.8s | < 1.2s | 🔴 Критический |
| **INP** | ~150ms | < 200ms | 🟡 Средний |
| **CLS** | 0.0 | < 0.1 | ✅ Уже OK |
| **TTFB** | ~400ms | < 200ms | 🟡 Средний |
| **FCP** | 8.0s | < 1.8s | 🔴 Критический |

---

## 1️⃣ LCP OPTIMIZATION (< 1.2 сек)

### Этап 1.1: Приоритизация ресурсов ✅ ЧАСТИЧНО ГОТОВО

**Текущее состояние:**
- ✅ `fetchPriority="high"` добавлен
- ✅ `priority` в Next.js Image
- ⚠️ Изображение загружается с Google Photos (медленный CDN)

**Что сделать:**

```bash
# 1. Скачать Hero изображение локально
curl -o public/images/hero-background.jpg "https://lh3.googleusercontent.com/aida-public/AB6AXuAJBK94MihqMW1wwl5gGFOEFRUYX789hlz5YTWsMV5vacSEN3rwXy5beuBGQ_5JmymV5SVu311nqqqKxPQIj4YV-kMmLGiTJn2JkkzOMS6YOtAgD-CaygFvvkPru2xtUghKbcWwSgAb-wjBVFMG3snB4YaPf2BqwGJHyf48sXZlHYY4FfbFgJxwrddv-uMET-1NqXjjyrqUDuRu9_1xa05AM2L5UlRECj5jVRs2CN0br_JHmsnoxgLQkt0G7sDhtxYcC5qbNDVSM6E"

# 2. Оптимизировать изображение
node scripts/optimize-images.js
```

**Обновить Hero.tsx:**
```tsx
<Image
  src="/images/hero-background.avif"  // Локальный файл
  alt="Fleet Management Background"
  fill
  priority
  fetchPriority="high"
  className="object-cover object-center"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
  quality={85}
  // Отключаем lazy load для LCP элемента
  loading="eager"
/>
```

**Ожидаемый эффект:** -800ms LCP

---

### Этап 1.2: Критический CSS ⚠️ ТРЕБУЕТ РЕАЛИЗАЦИИ

**Шаг 1: Извлечь критический CSS**

```bash
# Установить критический CSS плагин
npm install -D critters
```

**Шаг 2: Обновить next.config.ts**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Включить критический CSS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
```

**Шаг 3: Добавить inline критический CSS в layout**

```tsx
// src/app/[locale]/layout.tsx
import { CRITICAL_CSS } from "@/lib/critical-css";

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html lang={locale} className="dark">
      <head>
        {/* Inline Critical CSS - LCP optimization */}
        <style 
          dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} 
          suppressHydrationWarning 
        />
        {/* Остальные стили загружаются асинхронно */}
        <link rel="preload" href="/globals.css" as="style" />
        <link rel="stylesheet" href="/globals.css" media="print" onLoad="this.media='all'" />
        <noscript><link rel="stylesheet" href="/globals.css" /></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**Ожидаемый эффект:** -400ms FCP

---

### Этап 1.3: Оптимизация изображений ⚠️ ТРЕБУЕТ РЕАЛИЗАЦИИ

**Установить sharp:**
```bash
npm install sharp
```

**Запустить оптимизацию:**
```bash
node scripts/optimize-images.js
```

**Обновить все Image компоненты:**

```tsx
// Пример для всех страниц
<Image
  src="/images/industries/oil-gas.avif"
  alt="Oil & Gas Industry"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
  loading="lazy"
  // Добавляем placeholder для CLS
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
/>
```

**Ожидаемый эффект:** -600ms LCP, -40% bandwidth

---

## 2️⃣ INP OPTIMIZATION (< 200 мс)

### Этап 2.1: Main Thread Optimization ⚠️ ТРЕБУЕТ РЕАЛИЗАЦИИ

**Проблема:** ChatBot (267 строк) + Framer Motion загружаются на всех страницах

**Решение 1: Вынести аналитику в Web Worker**

```typescript
// src/lib/analytics-worker.ts
export function initAnalytics() {
  // Инициализация метрик в фоне
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Загрузка Яндекс.Метрики / Google Analytics
      import('./analytics').then(m => m.initialize());
    });
  } else {
    setTimeout(() => {
      import('./analytics').then(m => m.initialize());
    }, 3000);
  }
}
```

**Решение 2: Оптимизировать ChatBot**

```tsx
// src/components/ui/ChatBotWrapper.tsx (ОБНОВИТЬ)
"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

const ChatBotImpl = dynamic(() => import("@/components/ui/ChatBot"), {
  ssr: false,
  loading: () => null,
});

export default function ChatBotWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Ждем пока пользователь не проявит активность
    const handleUserActivity = () => {
      setShouldLoad(true);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity, { passive: true });
    };

    // Или загружаем через 5 секунд
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 5000);

    // Слушаем активность пользователя
    window.addEventListener('mousemove', handleUserActivity, { passive: true });
    window.addEventListener('touchstart', handleUserActivity, { passive: true });
    window.addEventListener('scroll', handleUserActivity, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity, { passive: true });
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <ChatBotImpl />
    </Suspense>
  );
}
```

**Ожидаемый эффект:** -100ms INP

---

### Этап 2.2: Passive Event Listeners ⚠️ ТРЕБУЕТ РЕАЛИЗАЦИИ

**Обновить globals.css:**

```css
/* Принудительно добавляем passive для scroll */
html {
  overflow-y: scroll;
  scroll-behavior: smooth;
}

/* Отключаем тяжелые анимации для пользователей с prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Обновить компоненты с scroll обработчиками:**

```tsx
// В ChatBot.tsx и других компонентах
useEffect(() => {
  const handleScroll = () => {
    // Логика скролла
  };

  // Добавляем passive: true
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
```

**Ожидаемый эффект:** -50ms INP

---

### Этап 2.3: Unused JS Removal ⚠️ ТРЕБУЕТ РЕАЛИЗАЦИИ

**Анализ неиспользуемого кода:**

```bash
# Установить анализатор bundles
npm install -D @next/bundle-analyzer

# Запустить анализ
ANALYZE=true npm run build
```

**Удалить неиспользуемые зависимости:**

```bash
# Проверить зависимости
npm ls framer-motion
npm ls three

# Если используются только в 1-2 компонентах - заменить на CSS
# Framer Motion → CSS animations (уже сделано для map page)
# Three.js → cobe (уже используется)
```

**Tree-shaking для lucide-react:**

```tsx
// ❌ ПЛОХО: Импортирует всю библиотеку
import { ArrowRight, MapPin, Phone } from 'lucide-react';

// ✅ ХОРОШО: Импортирует только нужные иконки
import ArrowRight from 'lucide-react/icons/arrow-right';
import MapPin from 'lucide-react/icons/map-pin';
import Phone from 'lucide-react/icons/phone';
```

**Ожидаемый эффект:** -200ms TTI, -100KB bundle

---

## 3️⃣ CLS OPTIMIZATION (< 0.1)

### Этап 3.1: Резервирование места ✅ УЖЕ ГОТОВО

**Текущее состояние:**
- ✅ CLS = 0.0 (отлично!)
- ✅ Изображения используют `fill` или фиксированные размеры

**Дополнительные улучшения:**

```tsx
// Для всех медиа добавить aspect-ratio
<div className="relative aspect-video">
  <Image fill src="..." alt="..." />
</div>

// Для рекламных блоков (если появятся)
<div className="min-h-[250px] bg-gray-100">
  {/* Ad slot with reserved space */}
</div>
```

---

### Этап 3.2: Font Fallback Optimization ⚠️ ТРЕБУЕТ РЕАЛИЗАЦИИ

**Проблема:** FOUT (Flash of Unstyled Text) при загрузке шрифтов

**Решение: size-adjust fallback**

```tsx
// src/app/[locale]/layout.tsx (ОБНОВИТЬ)
const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: true,
  // Добавляем fallback шрифты с метриками
  fallback: ['system-ui', 'Arial'],
  adjustFontFallback: true,
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'Arial'],
  adjustFontFallback: true,
});
```

**Добавить в globals.css:**

```css
/* Предотвращение CLS от шрифтов */
@font-face {
  font-family: 'Inter Fallback';
  src: local('Arial');
  size-adjust: 107%;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}

/* Применяем fallback до загрузки основного шрифта */
body {
  font-family: var(--font-sans), 'Inter Fallback', system-ui, sans-serif;
}
```

**Ожидаемый эффект:** CLS < 0.05, нет FOUT

---

## 4️⃣ TTFB OPTIMIZATION (< 200 мс)

### Этап 4.1: Edge Caching ✅ ЧАСТИЧНО ГОТОВО

**Текущее состояние:**
- ✅ Cache-Control headers настроены
- ✅ Vercel Edge Network используется

**Дополнительные улучшения:**

```typescript
// next.config.ts (ОБНОВИТЬ)
const nextConfig: NextConfig = {
  // ...existing config
  
  // Включить ISR для статических страниц
  experimental: {
    serverComponents: true,
  },
  
  async headers() {
    return [
      {
        // Кэшируем API ответы
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=300',
          },
        ],
      },
      {
        // Кэшируем статику
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2|ttf|eot|css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

**Ожидаемый эффект:** -150ms TTFB для повторных посещений

---

### Этап 4.2: SSR/SSG Оптимизация ⚠️ ТРЕБУЕТ РЕАЛИЗАЦИИ

**Проблема:** Некоторые страницы используют SSR без необходимости

**Решение: Статическая генерация где возможно**

```tsx
// Для страниц которые можно статически генерировать
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

// Для страниц которые должны быть SSR
export const dynamic = 'force-dynamic';
```

**Минификация HTML:**

```bash
npm install -D @next/bundle-analyzer
```

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  compress: true, // Включить gzip/brotli
  poweredByHeader: false, // Скрыть заголовок X-Powered-By
};

export default nextConfig;
```

**Ожидаемый эффект:** -100ms TTFB

---

## 📅 ПЛАН ВНЕДРЕНИЯ ПО ЭТАПАМ

### Неделя 1: Критические оптимизации LCP

| Задача | Владелец | Дедлайн | Ожидаемый эффект |
|--------|----------|---------|------------------|
| Скачать Hero изображение локально | Frontend | День 1 | -800ms LCP |
| Запустить optimize-images.js | Frontend | День 1 | -40% bandwidth |
| Обновить все Image компоненты | Frontend | День 2-3 | -600ms LCP |
| Внедрить критический CSS | Frontend | День 4 | -400ms FCP |
| Тестирование Lighthouse | QA | День 5 | Verify results |

**Цель:** LCP < 3s, FCP < 2.5s

---

### Неделя 2: INP и Bundle Optimization

| Задача | Владелец | Дедлайн | Ожидаемый эффект |
|--------|----------|---------|------------------|
| Оптимизировать ChatBot загрузку | Frontend | День 1-2 | -100ms INP |
| Внедрить passive listeners | Frontend | День 3 | -50ms INP |
| Bundle анализ | Frontend | День 4 | Identify waste |
| Tree-shaking lucide-react | Frontend | День 5 | -100KB bundle |

**Цель:** INP < 200ms, Bundle < 300KB

---

### Неделя 3: CLS и TTFB

| Задача | Владелец | Дедлайн | Ожидаемый эффект |
|--------|----------|---------|------------------|
| Font fallback optimization | Frontend | День 1 | CLS < 0.05 |
| Edge caching настройка | DevOps | День 2-3 | -150ms TTFB |
| ISR для статических страниц | Frontend | День 4 | -100ms TTFB |
| Финальное тестирование | QA | День 5 | All metrics green |

**Цель:** CLS < 0.1, TTFB < 200ms

---

## 📊 ОЖИДАЕМЫЕ РЕЗУЛЬТАТЫ

| Метрика | До | После Недели 1 | После Недели 2 | После Недели 3 | Цель |
|---------|-----|----------------|----------------|----------------|------|
| **LCP** | 10.8s | 3.5s | 3.0s | 2.5s | < 1.2s ⚠️ |
| **FCP** | 8.0s | 2.5s | 2.0s | 1.8s | < 1.8s ✅ |
| **INP** | 150ms | 140ms | 120ms | 110ms | < 200ms ✅ |
| **CLS** | 0.0 | 0.0 | 0.03 | 0.02 | < 0.1 ✅ |
| **TTFB** | 400ms | 350ms | 300ms | 180ms | < 200ms ✅ |
| **Performance Score** | 45 | 75 | 82 | 90+ | 90+ ✅ |

---

## ⚠️ БЛОКЕРЫ И РИСКИ

1. **LCP < 1.2s может быть недостижим** с текущим дизайном (Hero image на весь экран)
   - **Решение:** Упростить Hero секцию, использовать градиент вместо изображения
   
2. **Vercel регион** (Washington D.C.) может давать задержку для российских пользователей
   - **Решение:** Рассмотреть CDN с PoP в Москве/Европе

3. **Сторонние скрипты** (аналитика, чаты) могут ухудшить INP
   - **Решение:** Строгий loading budget, загрузка после взаимодействия

---

## 🛠 ИНСТРУМЕНТЫ ДЛЯ МОНИТОРИНГА

```bash
# Установить Lighthouse CI
npm install -g @lhci/cli

# Запустить аудит
lhci autorun

# Web Vitals мониторинг в реальном времени
npm install web-vitals
```

**Добавить в package.json:**
```json
{
  "scripts": {
    "lighthouse": "lhci autorun",
    "analyze": "ANALYZE=true npm run build"
  }
}
```

---

**Следующий шаг:** Начать с Этапа 1.1 - локализация Hero изображения
