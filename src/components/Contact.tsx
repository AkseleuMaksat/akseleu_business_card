"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SOCIALS } from "@/lib/content";
import { MailIcon, ArrowIcon } from "./icons";

export default function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="relative mx-auto max-w-4xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glass accent-glow relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-16"
      >
        <div className="aurora pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/25" />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">{t("contact.sub")}</p>

          <a
            href={`mailto:${SOCIALS.email}`}
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-accent px-7 py-4 text-base font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <MailIcon className="h-5 w-5" />
            {t("contact.email")}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
            <a href={`mailto:${SOCIALS.email}`} className="hover:text-foreground">
              {SOCIALS.email}
            </a>
            <a href={`tel:${SOCIALS.phone}`} className="hover:text-foreground">
              {SOCIALS.phone}
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col items-center gap-2 text-center text-xs text-muted">
        <div>© {new Date().getFullYear()} Akseleu Maksat</div>
      </footer>
    </section>
  );
}
