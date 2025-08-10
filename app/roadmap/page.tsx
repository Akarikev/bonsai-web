import Link from "next/link";
import fs from "node:fs/promises";
import path from "node:path";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  GitBranch,
  MessageSquarePlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

async function getLatestFromChangelog(): Promise<{
  version: string;
  date: string;
} | null> {
  try {
    const changelogPath = path.join(process.cwd(), "CHANGELOG.md");
    const content = await fs.readFile(changelogPath, "utf-8");
    const lines = content.split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^## \[(.*?)\] - (\d{4}-\d{2}-\d{2})/);
      if (match) {
        return { version: match[1], date: match[2] };
      }
    }
    return null;
  } catch {
    return null;
  }
}

export default async function RoadmapPage() {
  const latest = await getLatestFromChangelog();
  const quarters = [
    {
      title: "Q3 2025",
      items: [
        {
          label:
            "createStore launch, DevTools auto-mount, Koa-style middleware",
          done: true,
        },
        { label: "Docs refresh, homepage banner, site UI revamp", done: true },
        {
          label: "Examples: createStore-first, middleware patterns",
          done: true,
        },
      ],
    },
    {
      title: "Q4 2025",
      items: [
        {
          label: "DevTools: state diff inspector, time travel bookmarks",
          done: false,
        },
        {
          label: "Persistence adapters: IndexedDB, LocalStorage, AsyncStorage",
          done: false,
        },
        {
          label: "Selectors: memoized derivations for flat + tree",
          done: false,
        },
      ],
    },
    {
      title: "2026+",
      items: [
        {
          label: "Plugin ecosystem + CLI (schema generation, migrations)",
          done: false,
        },
        { label: "React Native DevTools bridge", done: false },
        { label: "Multi-store orchestration helpers", done: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Header */}
      <nav className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-gray-600 hover:text-emerald-600 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/Akarikev/bonsai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <GitBranch className="w-4 h-4 mr-2" /> GitHub
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200 px-3 py-1 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5" /> Product Roadmap
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
              Where Bonsai is growing 🌳
            </h1>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Here’s what we’ve shipped and what we’re planning. We keep this
              page updated—feedback welcome!
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Last updated: {latest?.date ?? "—"} • v{latest?.version ?? "—"}
            </p>
          </div>

          <div className="space-y-6">
            {quarters.map((q) => (
              <div
                key={q.title}
                className="bg-white/70 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {q.title}
                </h2>
                <ul className="space-y-3">
                  {q.items.map((it) => (
                    <li
                      key={it.label}
                      className="flex items-start gap-3 text-gray-800"
                    >
                      {it.done ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                      ) : (
                        <Clock className="w-5 h-5 text-amber-500 mt-0.5" />
                      )}
                      <span
                        className={
                          it.done ? "line-through decoration-emerald-300" : ""
                        }
                      >
                        {it.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-gray-600 mb-3">
              Have ideas? Suggest an item or start a discussion on GitHub. We
              love feedback and PRs 🌿
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`https://github.com/Akarikev/bonsai/issues/new?title=${encodeURIComponent(
                  "Roadmap suggestion: "
                )}&labels=${encodeURIComponent(
                  "enhancement,roadmap"
                )}&body=${encodeURIComponent(
                  "### Summary\n\nDescribe your suggestion here.\n\n### Why\n\nWhy does this matter? What problem does it solve?\n\n### Scope\n- [ ] Proposed scope item 1\n- [ ] Proposed scope item 2\n\nThanks for helping Bonsai grow! 🌳"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <MessageSquarePlus className="w-4 h-4 mr-2" /> Suggest an item
                </Button>
              </Link>
              <Link
                href="https://github.com/Akarikev/bonsai/discussions/new?category=general"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">Start a discussion</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
