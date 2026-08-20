"use client";

import { motion } from "framer-motion";
import { SOCIALS } from "@/lib/content";
import {
  GitHubIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
  LeetCodeIcon,
  MailIcon,
} from "./icons";

const ITEMS = [
  { href: SOCIALS.github, label: "GitHub", Icon: GitHubIcon },
  { href: SOCIALS.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: SOCIALS.leetcode, label: "LeetCode", Icon: LeetCodeIcon },
  { href: SOCIALS.youtube, label: "YouTube", Icon: YouTubeIcon },
  { href: SOCIALS.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: `mailto:${SOCIALS.email}`, label: "Email", Icon: MailIcon },
];

export default function SocialDock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 print:hidden"
    >
      <div className="glass accent-glow flex items-center gap-1 rounded-2xl px-2 py-2">
        {ITEMS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative grid h-10 w-10 place-items-center rounded-xl text-muted transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-foreground"
          >
            <Icon className="h-5 w-5" />
            <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium text-black opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
