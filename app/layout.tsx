import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "./metadata";
import { viewport } from "./viewport";
import { Analytics } from "@vercel/analytics/next"

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
          {/* Subtle animated background elements */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-emerald-100/30 dark:bg-emerald-900/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
