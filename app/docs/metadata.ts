import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation 🥬 - Bonsai State Management",
  description:
    "Learn how to use Bonsai, the flexible state management library for React. Comprehensive guides for tree state, flat state, middleware, and more.",
  keywords: [
    "bonsai documentation",
    "state management docs",
    "react state library",
    "tree state guide",
    "flat state tutorial",
    "middleware system",
    "react state management",
    "typescript state",
  ],
  openGraph: {
    title: "Documentation 🥬 - Bonsai State Management",
    description:
      "Learn how to use Bonsai, the flexible state management library for React. Comprehensive guides for tree state, flat state, middleware, and more.",
    type: "article",
    url: "https://bonsai-state.vercel.app/docs",
    siteName: "Bonsai State Management",
    images: [
      {
        url: "/docs-og-image.png",
        width: 1200,
        height: 630,
        alt: "Bonsai Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation 🥬 - Bonsai State Management",
    description:
      "Learn how to use Bonsai, the flexible state management library for React. Comprehensive guides for tree state, flat state, middleware, and more.",
    creator: "@akarikev",
    images: ["/docs-og-image.png"],
  },
  alternates: {
    canonical: "https://bonsai-state.vercel.app/docs",
  },
};
