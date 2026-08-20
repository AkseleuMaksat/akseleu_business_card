import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const url = "https://akseleu-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Akseleu Maksat — Backend Developer | Java, Spring Boot, Kafka",
  description:
    "Java Backend Engineer из Алматы. Микросервисы на Spring Boot и Kafka, банковские API с OAuth2/JWT, оптимизация под финансовые транзакции.",
  keywords: [
    "Akseleu Maksat", "Backend Developer", "Java", "Spring Boot", "Kafka",
    "Microservices", "Almaty", "Kazakhstan", "Fintech",
  ],
  authors: [{ name: "Akseleu Maksat" }],
  openGraph: {
    title: "Akseleu Maksat — Backend Developer",
    description: "Java · Spring Boot · Microservices · Kafka. Almaty, Kazakhstan.",
    url,
    siteName: "Akseleu Maksat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akseleu Maksat — Backend Developer",
    description: "Java · Spring Boot · Microservices · Kafka.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}var l=localStorage.getItem('lang');if(l){document.documentElement.lang=l;}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
