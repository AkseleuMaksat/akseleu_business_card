"use client";

import { motion } from "framer-motion";
import { useRef, MouseEvent, ElementType } from "react";
import { useI18n } from "@/lib/i18n";
import { PROJECTS } from "@/lib/content";
import { ArrowIcon } from "./icons";

function ProjectCard({
  p,
  i,
}: {
  p: (typeof PROJECTS)[number];
  i: number;
}) {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const Wrapper: ElementType = p.link ? "a" : "div";
  const linkProps = p.link
    ? { href: p.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
      className={p.featured ? "md:col-span-2" : ""}
    >
      <Wrapper
        {...linkProps}
        ref={ref as never}
        onMouseMove={onMove}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-foreground/[0.02] p-7 transition-colors hover:border-accent/40"
      >
        {/* spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(340px circle at var(--mx) var(--my), rgba(109,94,252,0.15), transparent 70%)",
          }}
        />

        <div className="relative flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold">{p.name}</h3>
            {p.featured && (
              <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                {t("projects.featured")}
              </span>
            )}
          </div>
          {p.link ? (
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border)] bg-foreground/5 text-muted transition-all group-hover:border-accent group-hover:text-accent">
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] uppercase tracking-wide text-muted">
              {t("projects.private")}
            </span>
          )}
        </div>

        <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
          {p.desc[lang]}
        </p>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-foreground/5 px-2.5 py-1 font-mono text-xs text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </Wrapper>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          {t("projects.title")}
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          {t("projects.title")}
        </h2>
        <p className="mt-3 text-muted">{t("projects.sub")}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
