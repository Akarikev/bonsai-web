import { Metadata } from "next";

export const siteConfig = {
  name: "Bonsai 🌿",
  description:
    "A lightweight, flexible state management library for React applications",
  url: "https://bonsai-ts.com",
  ogImage: "https://bonsai-ts.com/og.jpg",
  links: {
    github: "https://github.com/Akarikev/bonsai",
    twitter: "https://x.com/elorm_elom",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "React",
    "State Management",
    "TypeScript",
    "JavaScript",
    "Frontend",
    "Web Development",
    "Bonsai",
    "Tree State",
    "Flat State",
  ],
  authors: [
    {
      name: "Prince Elorm",
      url: "https://github.com/Akarikev",
    },
  ],
  creator: "Prince Elorm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@yourusername",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
