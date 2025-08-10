import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "./metadata";
import { viewport } from "./viewport";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export { viewport };

export const metadata: Metadata = {
  ...defaultMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 selection:bg-emerald-200 dark:selection:bg-emerald-900 selection:text-emerald-900 dark:selection:text-emerald-100`}
      >
        <div className="relative">
          {/* Enhanced animated background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/3 -left-1/3 w-[80vw] h-[80vw] bg-emerald-200/30 dark:bg-emerald-900/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/2 -right-1/3 w-[70vw] h-[70vw] bg-teal-200/30 dark:bg-teal-900/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] bg-lime-200/30 dark:bg-emerald-950/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(132,204,22,0.05),transparent_40%)]" />
          </div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
