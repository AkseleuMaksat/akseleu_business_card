# Akseleu Maksat — Portfolio

Премиальная one-page визитка backend-разработчика. Тёмная тема, bento-сетка, glassmorphism, микро-анимации.

**Live:** https://akseleu-dev.vercel.app

## Стек

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4**
- **Framer Motion** — анимации и переходы
- **i18n** — 3 языка (RU по умолчанию, KZ, EN), переключатель в навбаре, выбор сохраняется в `localStorage`

## Структура

```
src/
├─ app/
│  ├─ layout.tsx        # шрифты (Space Grotesk / JetBrains Mono), SEO/OG, I18nProvider
│  ├─ page.tsx          # сборка секций
│  └─ globals.css       # тема, сетка-фон, glass, marquee, aurora
├─ components/
│  ├─ Nav.tsx           # sticky-навбар + якорные ссылки + переключатель языка
│  ├─ Hero.tsx          # заголовок, статы (2+ / 35% / 100+ / 5+)
│  ├─ About.tsx         # «Обо мне» + bento-стек + бегущая строка
│  ├─ Experience.tsx    # таймлайн: Halyk Bank, Bank CenterCredit, Umag, Sirius LTW
│  ├─ Projects.tsx      # сетка проектов со spotlight-эффектом
│  ├─ Contact.tsx       # CTA + футер
│  ├─ SocialDock.tsx    # плавающий sticky-док соцсетей
│  └─ icons.tsx         # SVG-иконки соцсетей и UI
└─ lib/
   ├─ content.ts        # контент: опыт, проекты, стек, соцсети
   └─ i18n.tsx          # словарь RU/KZ/EN + контекст языка
```

## Локальный запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # прод-сборка
```

## Деплой на Vercel (домен akseleu-dev.vercel.app)

1. Запушить репозиторий на GitHub:
   ```bash
   git remote add origin https://github.com/AkseleuMaksat/<repo>.git
   git push -u origin main
   ```
2. На [vercel.com/new](https://vercel.com/new) импортировать репозиторий. Framework определится как **Next.js** автоматически (см. `vercel.json`).
3. В **Settings → Domains** назначить `akseleu-dev.vercel.app`.
4. CI/CD: пуш в `main` = прод-деплой, любая ветка/PR = preview-деплой.

Env-переменные не требуются — сайт полностью статический.

## Правки контента

Весь текст и данные — в `src/lib/content.ts` и `src/lib/i18n.tsx`. Компоненты трогать не нужно.
