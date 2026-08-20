"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Lang } from "./content";

const DICT = {
  ru: {
    "nav.about": "Обо мне",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",
    "hero.badge": "Доступен для проектов",
    "hero.role": "Backend-разработчик",
    "hero.tag": "Java · Spring Boot · Микросервисы · Kafka",
    "hero.desc":
      "Строю микросервисы на Spring Boot и Kafka: банковские API с OAuth2/JWT, асинхронный обмен сообщениями, rate limiting и оптимизацию SQL под финансовые транзакции.",
    "hero.cta.projects": "Смотреть проекты",
    "hero.cta.contact": "Связаться",
    "hero.loc": "Алматы, Казахстан",
    "stat.years": "года опыта",
    "stat.latency": "меньше латентность",
    "stat.users": "одновременных юзеров",
    "stat.apis": "публичных API",
    "about.title": "Обо мне и стек",
    "about.h": "Java Backend Engineer из финтеха и ретейла",
    "about.p":
      "2 года в FinTech и рознице. Проектирую надёжные бэкенды: банковские API с безопасностью банковского уровня, событийная архитектура на Kafka, ACID-транзакции без дедлоков и производительность под нагрузкой.",
    "about.edu": "Образование",
    "about.edu1": "Бакалавр, Информационные системы — IITU (2021–2025)",
    "about.edu2": "Магистр, Software Engineering — IETU (2025–2027)",
    "exp.title": "Опыт работы",
    "exp.now": "Сейчас",
    "projects.title": "Проекты",
    "projects.sub": "Отобранные бэкенд- и продуктовые работы",
    "projects.featured": "Флагман",
    "projects.live": "Открыть",
    "projects.private": "Приватный",
    "contact.title": "Давайте работать вместе",
    "contact.sub": "Открыт к сильным backend-задачам и продуктовым проектам.",
    "contact.email": "Написать на почту",
    "footer.rights": "Сделано на Next.js, Tailwind и Framer Motion.",
  },
  kk: {
    "nav.about": "Мен туралы",
    "nav.experience": "Тәжірибе",
    "nav.projects": "Жобалар",
    "nav.contact": "Байланыс",
    "hero.badge": "Жобаларға ашықпын",
    "hero.role": "Backend әзірлеуші",
    "hero.tag": "Java · Spring Boot · Микросервистер · Kafka",
    "hero.desc":
      "Spring Boot пен Kafka-да микросервистер құрамын: OAuth2/JWT банк API-лары, асинхронды хабар алмасу, rate limiting және қаржы транзакцияларына SQL оптимизациясы.",
    "hero.cta.projects": "Жобаларды көру",
    "hero.cta.contact": "Байланысу",
    "hero.loc": "Алматы, Қазақстан",
    "stat.years": "жыл тәжірибе",
    "stat.latency": "төмен латенттілік",
    "stat.users": "бір мезгілдегі қолданушы",
    "stat.apis": "публичный API",
    "about.title": "Мен туралы және стек",
    "about.h": "Финтех пен ретейлден келген Java Backend Engineer",
    "about.p":
      "FinTech пен бөлшек саудада 2 жыл. Сенімді бэкендтер жобалаймын: банк деңгейіндегі қауіпсіздік, Kafka-дағы оқиғалық архитектура, дедлоксыз ACID транзакциялар және жүктеме кезіндегі өнімділік.",
    "about.edu": "Білім",
    "about.edu1": "Бакалавр, Ақпараттық жүйелер — IITU (2021–2025)",
    "about.edu2": "Магистр, Software Engineering — IETU (2025–2027)",
    "exp.title": "Жұмыс тәжірибесі",
    "exp.now": "Қазір",
    "projects.title": "Жобалар",
    "projects.sub": "Таңдаулы бэкенд және өнім жұмыстары",
    "projects.featured": "Флагман",
    "projects.live": "Ашу",
    "projects.private": "Жабық",
    "contact.title": "Бірге жұмыс істейік",
    "contact.sub": "Күшті backend және өнім жобаларына ашықпын.",
    "contact.email": "Поштаға жазу",
    "footer.rights": "Next.js, Tailwind және Framer Motion-да жасалған.",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Available for projects",
    "hero.role": "Backend Developer",
    "hero.tag": "Java · Spring Boot · Microservices · Kafka",
    "hero.desc":
      "I build microservices with Spring Boot and Kafka: banking APIs with OAuth2/JWT, async messaging, rate limiting and SQL optimization for financial transactions.",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Get in touch",
    "hero.loc": "Almaty, Kazakhstan",
    "stat.years": "years experience",
    "stat.latency": "lower latency",
    "stat.users": "concurrent users",
    "stat.apis": "public APIs",
    "about.title": "About & Stack",
    "about.h": "Java Backend Engineer from fintech & retail",
    "about.p":
      "2 years in FinTech and retail. I design reliable backends: banking-grade security, event-driven Kafka architecture, ACID transactions without deadlocks, and performance under load.",
    "about.edu": "Education",
    "about.edu1": "B.Sc. Information Systems — IITU (2021–2025)",
    "about.edu2": "M.Sc. Software Engineering — IETU (2025–2027)",
    "exp.title": "Experience",
    "exp.now": "Now",
    "projects.title": "Projects",
    "projects.sub": "Selected backend & product work",
    "projects.featured": "Flagship",
    "projects.live": "Open",
    "projects.private": "Private",
    "contact.title": "Let's build something",
    "contact.sub": "Open to strong backend challenges and product work.",
    "contact.email": "Send an email",
    "footer.rights": "Built with Next.js, Tailwind & Framer Motion.",
  },
} as const;

type Key = keyof (typeof DICT)["ru"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      (localStorage.getItem("lang") as Lang | null)) || null;
    if (saved && ["ru", "kk", "en"].includes(saved)) setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    } catch {}
  };

  const t = (k: Key) => DICT[lang][k] ?? DICT.ru[k] ?? k;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
