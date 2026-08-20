"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";
type Ctx = { theme: Theme; toggle: () => void };
const ThemeContext = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("theme") as Theme | null)) || null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
    }
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
        document.documentElement.dataset.theme = next;
      } catch {}
      return next;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
