"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ArrowIcon, PinIcon } from "./icons";

const STATS = [
  { value: "2+", key: "stat.years" as const },
  { value: "35%", key: "stat.latency" as const },
  { value: "100+", key: "stat.users" as const },
  { value: "5+", key: "stat.apis" as const },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-16">
      {/* backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="aurora pointer-events-none absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-accent/30" />
      <div className="aurora pointer-events-none absolute top-40 right-1/4 h-72 w-72 rounded-full bg-[var(--accent-2)]/20" style={{ animationDelay: "-6s" }} />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <motion.div custom={0} variants={fade} initial="hidden" animate="show" className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-1.5 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-2)] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-2)]" />
          </span>
          {t("hero.badge")}
        </motion.div>

        <motion.h1 custom={1} variants={fade} initial="hidden" animate="show" className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          Akseleu <span className="text-gradient">Maksat</span>
        </motion.h1>

        <motion.p custom={2} variants={fade} initial="hidden" animate="show" className="mt-4 text-xl font-semibold sm:text-2xl">
          {t("hero.role")}
        </motion.p>

        <motion.p custom={3} variants={fade} initial="hidden" animate="show" className="mt-2 font-mono text-sm text-accent sm:text-base">
          {t("hero.tag")}
        </motion.p>

        <motion.p custom={4} variants={fade} initial="hidden" animate="show" className="mx-auto mt-6 max-w-2xl text-balance text-muted sm:text-lg">
          {t("hero.desc")}
        </motion.p>

        <motion.div custom={5} variants={fade} initial="hidden" animate="show" className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
          <PinIcon className="h-4 w-4 text-accent" />
          {t("hero.loc")}
        </motion.div>

        <motion.div custom={6} variants={fade} initial="hidden" animate="show" className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] accent-glow"
          >
            {t("hero.cta.projects")}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            {t("hero.cta.contact")}
          </a>
        </motion.div>

        <motion.div custom={7} variants={fade} initial="hidden" animate="show" className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.key} className="glass rounded-2xl px-4 py-5">
              <div className="text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-muted">{t(s.key)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
