"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { LANGS } from "@/lib/content";

const LINKS = [
  { href: "#about", key: "nav.about" as const },
  { href: "#experience", key: "nav.experience" as const },
  { href: "#projects", key: "nav.projects" as const },
  { href: "#contact", key: "nav.contact" as const },
];

export default function Nav() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "glass accent-glow" : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white transition-transform group-hover:scale-110">
            A
          </span>
          <span className="hidden sm:inline">akseleu<span className="text-accent">.dev</span></span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {t(l.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 rounded-xl border border-[var(--border)] bg-white/5 p-0.5">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              aria-label={l.label}
              className={`relative rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                lang === l.code ? "text-white" : "text-muted hover:text-foreground"
              }`}
            >
              {lang === l.code && (
                <motion.span
                  layoutId="lang-pill"
                  className="absolute inset-0 rounded-lg bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
