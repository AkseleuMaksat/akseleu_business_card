export type Lang = "ru" | "kk" | "en";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "kk", label: "KZ", flag: "🇰🇿" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export const SOCIALS = {
  github: "https://github.com/AkseleuMaksat",
  linkedin: "https://www.linkedin.com/in/akseleu-maksat/",
  instagram: "https://www.instagram.com/maksatakseleu/",
  leetcode: "https://leetcode.com/u/AkseleuMaksat/",
  email: "maksatakseleu@gmail.com",
  phone: "+77475903766",
};

/** Grouped tech stack — shared across all languages (proper nouns). */
export const STACK: { group: string; groupRu: string; groupKk: string; items: string[] }[] = [
  {
    group: "Backend & Languages",
    groupRu: "Бэкенд и языки",
    groupKk: "Бэкенд және тілдер",
    items: ["Java", "Kotlin", "Go", "Python"],
  },
  {
    group: "Frameworks",
    groupRu: "Фреймворки",
    groupKk: "Фреймворктер",
    items: ["Spring Boot", "Spring WebClient", "Hibernate", "JPA", "Maven", "Gradle"],
  },
  {
    group: "Messaging & Data",
    groupRu: "Очереди и данные",
    groupKk: "Кезектер және деректер",
    items: ["Apache Kafka", "RabbitMQ", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle"],
  },
  {
    group: "Security & API",
    groupRu: "Безопасность и API",
    groupKk: "Қауіпсіздік және API",
    items: ["OAuth2", "JWT", "TLS 1.3", "Keycloak", "OpenAPI / Swagger", "REST"],
  },
  {
    group: "Testing",
    groupRu: "Тестирование",
    groupKk: "Тестілеу",
    items: ["JUnit 5", "Mockito", "Selenium"],
  },
  {
    group: "DevOps & Cloud",
    groupRu: "DevOps и облако",
    groupKk: "DevOps және бұлт",
    items: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure", "Prometheus", "Grafana"],
  },
];

type ExpItem = {
  company: string;
  period: { ru: string; kk: string; en: string };
  role: { ru: string; kk: string; en: string };
  points: { ru: string[]; kk: string[]; en: string[] };
  current?: boolean;
};

export const EXPERIENCE: ExpItem[] = [
  {
    company: "Halyk Bank",
    current: true,
    period: {
      ru: "Апрель 2026 — н.в.",
      kk: "Сәуір 2026 — қазір",
      en: "Apr 2026 — Present",
    },
    role: {
      ru: "Software Developer",
      kk: "Software Developer",
      en: "Software Developer",
    },
    points: {
      ru: [
        "Проектирование и реализация REST API для межсервисного взаимодействия",
        "Асинхронная обработка сообщений через Apache Kafka",
        "Формирование отчётов на JasperReports",
        "Unit- и интеграционные тесты (JUnit, Mockito) для надёжности кода",
        "Работа в команде в высоконагруженной банковской прод-среде",
      ],
      kk: [
        "Сервисаралық байланыс үшін REST API жобалау және іске асыру",
        "Apache Kafka арқылы асинхронды хабарламаларды өңдеу",
        "JasperReports негізінде есептер қалыптастыру",
        "Кодтың сенімділігі үшін unit және интеграциялық тесттер (JUnit, Mockito)",
        "Жоғары жүктемелі банк өнім ортасында командада жұмыс",
      ],
      en: [
        "Designed and implemented REST APIs for inter-service communication",
        "Asynchronous message processing with Apache Kafka",
        "Generated reports using JasperReports",
        "Unit & integration tests (JUnit, Mockito) improving reliability",
        "Collaborated on a team in a high-load banking production environment",
      ],
    },
  },
  {
    company: "Bank CenterCredit",
    period: {
      ru: "Июнь 2025 — Апрель 2026",
      kk: "Маусым 2025 — Сәуір 2026",
      en: "Jun 2025 — Apr 2026",
    },
    role: {
      ru: "Software Engineer",
      kk: "Software Engineer",
      en: "Software Engineer",
    },
    points: {
      ru: [
        "5+ публичных REST API (OpenAPI/Swagger) для fintech и B2B-интеграций с банковской безопасностью (OAuth2, JWT, TLS 1.3)",
        "Rate limiting и throttling в API Gateway для 100+ одновременных пользователей",
        "Асинхронное взаимодействие микросервисов на Spring WebClient — латентность −35%",
        "Оптимизация SQL и изоляции транзакций: ACID без дедлоков",
      ],
      kk: [
        "Fintech және B2B интеграциялар үшін банктік қауіпсіздікпен 5+ публичный REST API (OAuth2, JWT, TLS 1.3)",
        "API Gateway-де 100+ бір мезгілдегі қолданушыға rate limiting және throttling",
        "Spring WebClient-те микросервистердің асинхронды байланысы — латенттілік −35%",
        "SQL мен транзакция изоляциясын оптимизациялау: дедлоксыз ACID",
      ],
      en: [
        "5+ public REST APIs (OpenAPI/Swagger) for fintech & B2B integrations with banking-grade security (OAuth2, JWT, TLS 1.3)",
        "API Gateway rate limiting & throttling for 100+ concurrent users",
        "Async microservice communication with Spring WebClient — 35% lower latency",
        "Optimized SQL & transaction isolation: ACID compliance without deadlocks",
      ],
    },
  },
  {
    company: "Umag",
    period: {
      ru: "Ноябрь 2024 — Май 2025",
      kk: "Қараша 2024 — Мамыр 2025",
      en: "Nov 2024 — May 2025",
    },
    role: {
      ru: "Software Engineer",
      kk: "Software Engineer",
      en: "Software Engineer",
    },
    points: {
      ru: [
        "Offline-first POS-приложение (JavaFX) для слабой связи",
        "Локальное хранение (SQLite/H2) с синхронизацией при реконнекте",
        "Разделение I/O и UI-потока через многопоточность",
      ],
      kk: [
        "Нашар байланысқа арналған offline-first POS қосымшасы (JavaFX)",
        "Реконнектте синхрондалатын жергілікті сақтау (SQLite/H2)",
        "Көппоточтылық арқылы I/O мен UI ағынын бөлу",
      ],
      en: [
        "Offline-first POS terminal app (JavaFX) for low-connectivity",
        "Local persistence (SQLite/H2) with sync-on-reconnect",
        "Separated I/O from the UI thread via multithreading",
      ],
    },
  },
  {
    company: "Sirius LTW",
    period: {
      ru: "Июнь 2024 — Август 2024",
      kk: "Маусым 2024 — Тамыз 2024",
      en: "Jun 2024 — Aug 2024",
    },
    role: {
      ru: "Software Developer",
      kk: "Software Developer",
      en: "Software Developer",
    },
    points: {
      ru: [
        "Бэкенд-сервисы на Java 17 с API-валидацией данных",
        "REST API с валидацией запросов и маппингом ответов",
      ],
      kk: [
        "API-валидациямен Java 17-де бэкенд сервистер",
        "Сұраныстарды валидациялайтын және жауаптарды маппингтейтін REST API",
      ],
      en: [
        "Backend services on Java 17 with API-driven data validation",
        "REST APIs with request validation and response mapping",
      ],
    },
  },
];

type Project = {
  name: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  desc: { ru: string; kk: string; en: string };
};

export const PROJECTS: Project[] = [
  {
    name: "NUX CRM",
    featured: true,
    tags: ["Java", "Spring", "Keycloak", "PostgreSQL", "Nuxt 4"],
    desc: {
      ru: "Full-stack CRM для распила панелей — самый серьёзный проект: доменная логика, авторизация через Keycloak, PostgreSQL, фронт на Nuxt 4.",
      kk: "Панельдерді кесуге арналған full-stack CRM — ең күрделі жоба: домендік логика, Keycloak авторизация, PostgreSQL, Nuxt 4 фронт.",
      en: "Full-stack panel-cutting CRM — my most serious project: domain logic, Keycloak auth, PostgreSQL, Nuxt 4 front-end.",
    },
  },
  {
    name: "Polaroid Studio",
    link: "https://polaroid-studio-kappa.vercel.app",
    tags: ["Next.js 16", "Canvas", "jsPDF", "Clerk"],
    desc: {
      ru: "Фото → полароид: рамки, декор, ИИ-подписи (Gemini), промокоды, печатный PDF с линиями отреза. В проде.",
      kk: "Фото → полароид: жақтаулар, декор, ЖИ-жазбалар (Gemini), промокодтар, кесу сызықтары бар PDF. Продда.",
      en: "Photo → polaroid: frames, decor, AI captions (Gemini), promo codes, print-ready PDF with cut lines. In production.",
    },
  },
  {
    name: "JARYQ Travel",
    link: "https://jaryq-travels.vercel.app",
    tags: ["Next.js", "Framer Motion", "WhatsApp"],
    desc: {
      ru: "Лендинг туров в Турцию: видео-хиро, 3D-полёт, бронирование прямо в WhatsApp. В проде.",
      kk: "Түркияға турлар лендингі: видео-хиро, 3D-ұшу, WhatsApp арқылы брондау. Продда.",
      en: "Turkey tours landing: video hero, 3D flight, booking straight to WhatsApp. In production.",
    },
  },
  {
    name: "Ainura",
    link: "https://aksproject.vercel.app",
    tags: ["Next.js", "Supabase", "WhatsApp"],
    desc: {
      ru: "Лендинг салона красоты RU/KZ: онлайн-запись → Supabase + уведомления в WhatsApp. В проде.",
      kk: "RU/KZ сұлулық салоны лендингі: онлайн жазылу → Supabase + WhatsApp хабарлама. Продда.",
      en: "Beauty-salon landing RU/KZ: online booking → Supabase + WhatsApp notifications. In production.",
    },
  },
  {
    name: "Old Spice Store",
    link: "https://old-spice-one.vercel.app",
    tags: ["Next.js", "Framer Motion", "E-commerce"],
    desc: {
      ru: "Анимированный e-commerce с курсором-прожектором и кинематографичными переходами. В проде.",
      kk: "Прожектор-курсоры мен кинематографиялық ауысулары бар анимациялы e-commerce. Продда.",
      en: "Animated e-commerce with a spotlight cursor and cinematic transitions. In production.",
    },
  },
  {
    name: "ItalyBot",
    tags: ["Python", "aiogram", "FAQ Bot"],
    desc: {
      ru: "Telegram-бот-консультант по поступлению в Италию: локальный fuzzy-поиск без ИИ, RU/EN, админка. @ItalyAdmissionBot",
      kk: "Италияға түсу бойынша Telegram бот-кеңесші: ЖИ-сіз жергілікті fuzzy-іздеу, RU/EN, админка. @ItalyAdmissionBot",
      en: "Telegram advisor bot for studying in Italy: local fuzzy search (no AI), RU/EN, admin panel. @ItalyAdmissionBot",
    },
  },
  {
    name: "Cyclop",
    tags: ["Swift", "SwiftUI", "AppKit", "WhisperKit"],
    desc: {
      ru: "Notch-панель для macOS: расширение нотча MacBook, speech-to-text (локальный Whisper), задачи, буфер, музыка, батарея.",
      kk: "macOS-қа арналған notch-панель: MacBook нотчын кеңейту, speech-to-text (жергілікті Whisper), тапсырмалар, буфер, музыка, батарея.",
      en: "Notch panel for macOS: extends the MacBook notch — local speech-to-text (Whisper), tasks, clipboard, music, battery.",
    },
  },
];
