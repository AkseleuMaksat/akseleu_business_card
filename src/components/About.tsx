"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { STACK } from "@/lib/content";

const TICKER = [
  "Java", "Spring Boot", "Kafka", "Microservices", "PostgreSQL", "Redis",
  "Docker", "Kubernetes", "OAuth2", "JWT", "Kotlin", "Hibernate", "REST",
];

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{label}</span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
    </div>
  );
}

export default function About() {
  const { t, lang } = useI18n();
  const groupLabel = (g: (typeof STACK)[number]) =>
    lang === "ru" ? g.groupRu : lang === "kk" ? g.groupKk : g.group;

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHead label={t("about.title")} title={t("about.h")} />

      <div className="grid gap-4 md:grid-cols-3">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass flex flex-col justify-between rounded-3xl p-7 md:col-span-2"
        >
          <p className="text-lg leading-relaxed text-foreground/90">{t("about.p")}</p>
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <div className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">
              {t("about.edu")}
            </div>
            <ul className="space-y-1 text-sm text-muted">
              <li>{t("about.edu1")}</li>
              <li>{t("about.edu2")}</li>
            </ul>
          </div>
        </motion.div>

        {/* Now @ Halyk */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass relative overflow-hidden rounded-3xl p-7"
        >
          <div className="aurora absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/30" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--accent-2)]">
              {t("exp.now")}
            </div>
            <div className="mt-3 text-2xl font-bold">Halyk Bank</div>
            <p className="mt-2 text-sm text-muted">
              Spring Boot · Apache Kafka · JasperReports · JUnit
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Fintech", "High-load", "Microservices"].map((x) => (
                <span key={x} className="rounded-full border border-[var(--border)] bg-white/5 px-3 py-1 text-xs">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stack ticker */}
      <div className="marquee-mask relative mt-4 overflow-hidden rounded-3xl border border-[var(--border)] bg-white/[0.02] py-5">
        <div className="flex w-max animate-marquee gap-3">
          {[...TICKER, ...TICKER].map((x, i) => (
            <span key={i} className="whitespace-nowrap rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 font-mono text-sm text-foreground/80">
              {x}
            </span>
          ))}
        </div>
      </div>

      {/* Stack groups */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STACK.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass group rounded-2xl p-5 transition-colors hover:border-accent/40"
          >
            <div className="mb-3 text-sm font-semibold text-accent">{groupLabel(g)}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-lg bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/80">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
