"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { EXPERIENCE } from "@/lib/content";

export default function Experience() {
  const { t, lang } = useI18n();

  return (
    <section id="experience" className="relative mx-auto max-w-4xl px-6 py-24">
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {t("exp.title")}
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          {t("exp.title")}
        </h2>
      </div>

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-[var(--border)] to-transparent md:left-[11px]" />

        <div className="space-y-6">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative pl-10 md:pl-14"
            >
              {/* dot */}
              <span
                className={`absolute left-0 top-2 grid h-4 w-4 place-items-center rounded-full md:h-6 md:w-6 ${
                  e.current ? "bg-accent" : "bg-white/10 border border-[var(--border)]"
                }`}
              >
                {e.current && (
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white md:h-2 md:w-2" />
                )}
              </span>

              <div className="glass rounded-2xl p-6 transition-colors hover:border-accent/40">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold">{e.company}</h3>
                  <span className="font-mono text-xs text-muted">{e.period[lang]}</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-accent">
                  {e.role[lang]}
                  {e.current && (
                    <span className="rounded-full bg-[var(--accent-2)]/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--accent-2)]">
                      {t("exp.now")}
                    </span>
                  )}
                </div>
                <ul className="mt-4 space-y-2">
                  {e.points[lang].map((p, pi) => (
                    <li key={pi} className="flex gap-2.5 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
