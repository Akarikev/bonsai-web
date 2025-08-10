"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Code,
  GitBranch,
  Layers,
  Settings,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodePlayground } from "@/components/code-playground";
import { BonsaiLogo } from "@/components/bonsai-logo";
import ComparisonTable from "@/components/comparison-table";
import { AnimatedBonsai } from "@/components/animated-bonsai";

export default function HomePage() {
  const [showPlayground, setShowPlayground] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const ANNOUNCEMENT_KEY = "bonsai_announce_v1.1.0_dismissed";

  useEffect(() => {
    try {
      const dismissed =
        typeof window !== "undefined" &&
        localStorage.getItem(ANNOUNCEMENT_KEY) === "1";
      if (dismissed) setShowAnnouncement(false);
    } catch {}
  }, []);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
    try {
      localStorage.setItem(ANNOUNCEMENT_KEY, "1");
    } catch {}
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <BonsaiLogo size="md" />
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="#features"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Features
            </Link>

            <Link
              href="/docs"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/Akarikev/bonsai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <GitBranch className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Announcement Banner */}
      {showAnnouncement && (
        <div className="px-4 pt-4">
          <div className="container mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-200">
                        New
                      </span>
                      <p className="text-sm md:text-base text-emerald-900 font-semibold">
                        Bonsai v1.1.0 is here
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-emerald-800">
                      createStore API, DevTools auto-mount (
                      <span className="font-medium">Ctrl+Shift+B</span>), and
                      Koa-style middleware adapter. Classic APIs still
                      supported.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href="/docs">
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Read Docs
                      </Button>
                    </Link>
                    <Link
                      href="https://github.com/Akarikev/bonsai/blob/main/CHANGELOG.md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        Release Notes
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-emerald-800"
                      onClick={dismissAnnouncement}
                      aria-label="Dismiss announcement"
                    >
                      ×
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-6 bg-emerald-100 text-emerald-700 border-emerald-200"
          >
            🌱 Flexible AF (Astonishingly Functional) State Management
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            State Management
            <br />
            <span className="text-emerald-600">That Grows With You 🌳</span>
          </h1>
          <div className="mb-8 max-w-2xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Meet <strong>Bonsai</strong> — the state library that doesn&apos;t
              just *manage* your state, it hugs it, waters it, and sings to it
              🌿🎶. Whether you want flat state, nested trees, or scoped vibes —
              we&apos;ve got branches for all.
            </p>
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-emerald-800 text-sm font-medium mb-1">
                Did you know?
              </p>
              <p className="text-emerald-700 text-sm">
                <span className="font-semibold">Bonsai (&quot;盆栽&quot;)</span>{" "}
                is Japanese for &quot;planted in a container&quot; — where{" "}
                <span className="font-medium">盆 (bon)</span> means
                &quot;tray&quot; and{" "}
                <span className="font-medium">栽 (sai)</span> means
                &quot;planting.&quot; state in the perfect environment. 🪴
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/docs">
              <Button variant="outline" size="lg">
                📚 Show Me the Docs
              </Button>
            </Link>
          </div>

          {/* Installation */}
          <div className="bg-gray-900 rounded-lg p-6 text-left max-w-md mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm">🔧 Installation</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white h-6 px-2"
              >
                📋 Copy
              </Button>
            </div>
            <div className="space-y-2">
              <code className="text-emerald-400 font-mono block">
                npm install @bonsai-ts/state
              </code>
              <code className="text-emerald-400 font-mono block">
                yarn add @bonsai-ts/state
              </code>
              <code className="text-emerald-400 font-mono block">
                pnpm add @bonsai-ts/state
              </code>
              <code className="text-emerald-400 font-mono block">
                bun add @bonsai-ts/state
              </code>
            </div>
          </div>
        </div>
      </section>

      <AnimatedBonsai />

      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Developers Are Falling for Bonsai 😍
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re building a to-do app or the next space station
              dashboard 🛰️, Bonsai adapts and grows with you — minus the drama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>🌲 Tree State</CardTitle>
                <CardDescription>
                  Nest it, path it, love it. Access your state like a file
                  system — &quot;user/profile/name&quot; style.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>📦 Flat State</CardTitle>
                <CardDescription>
                  Just the facts. Simple key-value access that&apos;s as chill
                  as it gets.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>🛠️ Middleware System</CardTitle>
                <CardDescription>
                  Validate, mutate, or full-on block changes like a boss. No
                  shady state updates here!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>🧪 DevTools Built-in</CardTitle>
                <CardDescription>
                  Inspect state like a detective 🕵️ with live updates and time
                  travel magic.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>🪶 Zero Dependencies</CardTitle>
                <CardDescription>
                  Feather-light (~7KB gzipped). No baggage. Just vibes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle>💙 TypeScript First</CardTitle>
                <CardDescription>
                  Intellisense so good, you&apos;ll think it&apos;s reading your
                  mind 🧠
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          🌱 Why We Planted Bonsai (And Water It Daily)
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">🌳</span>
              The State Management Jungle
            </h3>
            <p className="text-gray-600">
              Ever felt like managing state was like hacking through a
              rainforest with a toothbrush? 🪥🌴 So did we. Bonsai brings order
              to the chaos — a clean, calm canopy of predictable state with no
              wild reducers lurking in the bushes.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">💡</span>
              Devs Deserve Delight
            </h3>
            <p className="text-gray-600">
              Life&apos;s too short to squint at weird hook errors 😵‍💫. Bonsai is
              designed with developer happiness in mind — clean APIs, helpful
              logs, and no weird rituals. State management should feel like a
              stroll, not a stress test 🧘.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">⚡</span>
              Fast. Tiny. Ferociously Chill.
            </h3>
            <p className="text-gray-600">
              Like a perfectly pruned bonsai tree (or a squirrel on a Red Bull),
              Bonsai is tiny and optimized to the roots. It keeps your UI
              reactive without breaking a sweat 🥵➡️😌. Say goodbye to
              unnecessary renders.
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">🤝</span>
              Built With the Bonsai Fam
            </h3>
            <p className="text-gray-600">
              Bonsai isn&apos;t just a library, it&apos;s a growing garden 🌺.
              We love feedback, memes, and PRs (Pull Requests *and* Plant
              Recommendations 🌿). Help us shape the tree — one branch at a time
              💚.
            </p>
          </div>
        </div>
      </div>
      {/* Open Source Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-emerald-100">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
              🌳 Open Source, Open Hearts
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Bonsai is proudly open source! Join our growing community of
              developers who are passionate about making state management a joy,
              not a chore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-emerald-600 font-bold">
                    🌱
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600 font-bold">
                    🌿
                  </div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-teal-600 font-bold">
                    🌳
                  </div>
                </div>
                <span className="text-sm">Join 🌿🍃 contributors</span>
              </div>
              <div className="h-px sm:h-6 w-full sm:w-px bg-gray-200"></div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span className="text-sm">Star us on GitHub</span>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="https://github.com/Akarikev/bonsai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700"
                >
                  <GitBranch className="w-4 h-4 mr-2" />
                  Contribute to Bonsai
                </Button>
              </Link>
              <Link
                href="https://github.com/Akarikev/bonsai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Playground Section */}
      <section id="playground" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Play in the <span className="text-emerald-600">Bonsai Box</span>{" "}
            🎮🌱
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Before you let us manage your entire app&apos;s vibe, test us out!
            The playground is where ideas grow, bugs hide (temporarily), and you
            fall in love 💚.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => setShowPlayground(true)}
            >
              Launch Playground 🚀
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Why settle for spaghetti? 🍝
            <br />
            Bonsai keeps it fresh 🌿
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s be honest. Some state management tools feel like
            assembling IKEA furniture without instructions. Bonsai? It&apos;s
            more like building a Lego set—with instructions, colors, and joy 🎨.
          </p>

          {/* Imagine this as a comparison grid or table */}
          {/* <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">Bonsai 🌳</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Flat + Path-based state</li>
                <li>✅ Middleware that slaps</li>
                <li>✅ DevTools that actually *help*</li>
                <li>✅ Tree-shakeable. Your bundle will thank you</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">Other libs 😬</h3>
              <ul className="space-y-2 text-gray-700">
                <li>⚠️ Boilerplate galore</li>
                <li>⚠️ Global everything. Even regret.</li>
                <li>⚠️ DevTools are... somewhere?</li>
                <li>⚠️ Feels like Redux 2015</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
              <h3 className="text-2xl font-semibold mb-2">Your App 😎</h3>
              <ul className="space-y-2 text-gray-700">
                <li>🚀 Smooth performance</li>
                <li>🎯 Less boilerplate, more joy</li>
                <li>🛠️ Debug with confidence</li>
                <li>💅 Cleaner, leaner, meaner</li>
              </ul>
            </div>
          </div> */}
          <ComparisonTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to <span className="text-emerald-600">zen your state?</span>{" "}
            🧘‍♂️🌿
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop wrestling with state like it&apos;s your ex 💔. Start building
            with Bonsai — the state manager that&apos;s chill, powerful, and
            *actually fun* to use. Your components will thank you. Probably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Grow Your App 🌳
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#playground">
              <Button variant="outline" size="lg">
                🌈 See the Playground
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <BonsaiLogo size="md" variant="white" className="mb-4" />
              <p className="text-sm">
                Flexible state management that grows with your React
                applications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Documentation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Quick Start
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Migration Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Issues
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Discussions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Contributing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roadmap"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; 2024 Bonsai State Management. MIT License. Built with ❤️ by
              Prince Elorm (Akarikev)
            </p>
          </div>
        </div>
      </footer>

      {/* CodePlayground Modal */}
      {showPlayground && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-semibold">Bonsai Playground</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPlayground(false)}
              >
                Close
              </Button>
            </div>
            <div className="p-4 overflow-auto max-h-[calc(90vh-4rem)]">
              <CodePlayground />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
