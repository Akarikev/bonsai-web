"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { BonsaiLogo } from "@/components/bonsai-logo";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative">
      {/* 🌿 NavBar with Bonsai vibes */}
      <nav className="border-b bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <BonsaiLogo size="md" />
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              href="/#features"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
            >
              ✨ Features
            </Link>

            <Link
              href="https://github.com/Akarikev/bonsai#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold"
            >
              📚 Docs
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

      {/* 📖 Docs Header */}
      <div className="border-b bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4" />
              <span className="sr-only">Back to home</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              📘 Bonsai Documentation
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl">
            Wanna grow your state like a pro? 🌱 You&apos;ve come to the right
            forest.
          </p>
        </div>
      </div>

      {/* Content */}
      {/* 🌳 Bonsai Tabs & Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 🍃 Sidebar Tabs */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-24 bg-white/70 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-3">
              <h3 className="font-semibold mb-4 text-gray-900">
                🌿 Bonsai Guidebook
              </h3>
              <ul className="space-y-1">
                <li>
                  <Button
                    variant={activeTab === "overview" ? "secondary" : "ghost"}
                    className="w-full justify-start rounded-lg px-3 transition-all hover:translate-x-0.5"
                    onClick={() => setActiveTab("overview")}
                  >
                    📖 Overview
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeTab === "tree-state" ? "secondary" : "ghost"}
                    className="w-full justify-start rounded-lg px-3 transition-all hover:translate-x-0.5"
                    onClick={() => setActiveTab("tree-state")}
                  >
                    🌳 Tree State
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeTab === "flat-state" ? "secondary" : "ghost"}
                    className="w-full justify-start rounded-lg px-3 transition-all hover:translate-x-0.5"
                    onClick={() => setActiveTab("flat-state")}
                  >
                    🌱 Flat State
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeTab === "middleware" ? "secondary" : "ghost"}
                    className="w-full justify-start rounded-lg px-3 transition-all hover:translate-x-0.5"
                    onClick={() => setActiveTab("middleware")}
                  >
                    🛠️ Middleware
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeTab === "examples" ? "secondary" : "ghost"}
                    className="w-full justify-start rounded-lg px-3 transition-all hover:translate-x-0.5"
                    onClick={() => setActiveTab("examples")}
                  >
                    🧩 Examples
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsContent value="overview" className="mt-0">
                <div className="prose max-w-none space-y-8 bg-white/70 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-6">
                  <h2 className="text-gray-900 tracking-tight text-4xl mb-6">
                    Bonsai: Your State Tree Whisperer 🌳✨
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Welcome to <strong>Bonsai</strong> — the chill, lightweight
                    state manager that won&apos;t make your brain wilt. Whether
                    you&apos;re nurturing a small shrub of global state or a
                    whole enchanted forest of nested components, Bonsai&apos;s
                    got you.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      🌱 What is Bonsai?
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Think of it as your Zen garden for state. You get flat and
                      tree-based state tools that make your React life peaceful
                      and performant.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      🎯 Why Bonsai Rocks
                    </h3>
                    <ul className="text-gray-700 list-disc pl-5 space-y-3 text-lg">
                      <li>
                        <strong>Flat or Tree? Why not both?</strong> Choose your
                        shape — flat for simplicity, tree for structure.
                      </li>
                      <li>
                        <strong>Fast like a squirrel 🐿️</strong> — React&apos;s{" "}
                        <code>useSyncExternalStore</code> keeps re-renders
                        minimal.
                      </li>
                      <li>
                        <strong>Middleware magic 🧙</strong> — Log, validate, or
                        cancel updates with wizardry.
                      </li>
                      <li>
                        <strong>DevPanel 📊</strong> — Built-in real-time debug
                        panel with editable state fields.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-gray-900 tracking-tight text-2xl">
                      🚀 Next.js + Bonsai = ❤️
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Works perfectly in both client and server components.
                      Hydration? Handled. Transitions? Smooth like butter.
                    </p>
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                      <p className="font-medium">What’s new in v1.1.0</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <strong>createStore</strong>: one-call setup with
                          options <code>{`{ devtools, middleware }`}</code>
                        </li>
                        <li>
                          <strong>DevTools auto-mount</strong>: enable with{" "}
                          <code>devtools: true</code>; toggle with{" "}
                          <code>Ctrl+Shift+B</code>
                        </li>
                        <li>
                          <strong>Koa-style middleware adapter</strong>:{" "}
                          <code>
                            (next) =&gt; (path, value, prev) =&gt; next(path,
                            value)
                          </code>
                        </li>
                        <li>
                          Classic APIs remain supported (
                          <code>initTreeState</code>, <code>useTreeBonsai</code>
                          , <code>set</code>, <code>subscribe</code>)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-gray-900 tracking-tight text-2xl">
                      📦 Install It Like It&apos;s Hot
                    </h3>
                    <div className="bg-gray-950 rounded-xl p-4 space-y-2 ring-1 ring-gray-800 shadow-lg overflow-hidden">
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

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-gray-900 tracking-tight text-xl">
                        Client Components (createStore)
                      </h4>
                      <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto ring-1 ring-gray-800 shadow-lg">
                        <pre className="text-sm">
                          <code className="text-gray-300 font-mono">
                            {`"use client";

import { createStore } from "@bonsai-ts/state";

// Initialize once with options (auto-mount DevTools in dev when enabled)
export const appStore = createStore(
  {
    count: 0,
    user: { name: "elorm", isActive: true },
  },
  { devtools: true }
);

// Use in client components
function Counter() {
  const count = appStore.use<number>("count") || 0;
  return (
    <button onClick={() => appStore.set("count", count + 1)}>
      Increment ({count})
    </button>
  );
}`}
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-gray-900 tracking-tight text-xl">
                        Server Components
                      </h4>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        With <code>createStore</code>, the APIs are isomorphic.
                        Define your store in a module and use it from client
                        components. DevTools auto-mount only runs in the
                        browser.
                      </p>
                      <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto ring-1 ring-gray-800 shadow-lg">
                        <pre className="text-sm">
                          <code className="text-gray-300 font-mono">
                            {`// store.ts
import { createStore } from "@bonsai-ts/state";
export const appStore = createStore({ count: 0 }, { devtools: true });

// app/Counter.tsx (Client Component)
"use client";
import { appStore } from "./store";
export function Counter() {
  const count = appStore.use<number>("count") || 0;
  return <button onClick={() => appStore.set("count", count + 1)}>{count}</button>;
}

// app/page.tsx (Server Component)
import { Counter } from "./Counter";
export default function Page() {
  return <Counter />;
}`}
                          </code>
                        </pre>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-gray-900 tracking-tight text-xl">
                        Best Practices for Next.js 🎯
                      </h4>
                      <ul className="text-gray-700 space-y-3 text-lg">
                        <li>
                          <strong>Client Components</strong> — Use Bonsai hooks
                          in components marked with &quot;use client&quot;
                        </li>
                        <li>
                          <strong>Server Components</strong> — Initialize state
                          on the server and pass it to client components
                        </li>
                        <li>
                          <strong>Hydration</strong> — Bonsai handles hydration
                          automatically, ensuring smooth server-to-client
                          transitions
                        </li>
                        <li>
                          <strong>Performance</strong> — Use scoped state for
                          component-specific state to optimize re-renders
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tree-state" className="mt-0">
                <div className="prose max-w-none space-y-8 bg-white/70 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-6">
                  <h2 className="text-gray-900 tracking-tight text-4xl mb-6">
                    Tree State 🌳
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Tree state is useful for nested data structures and
                    path-based access. It allows you to manage deeply nested
                    state with intuitive path-based access patterns.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      Basic Usage
                    </h3>
                    <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto mb-6 ring-1 ring-gray-800 shadow-lg">
                      <pre className="text-sm">
                        <code className="text-gray-300 font-mono">
                          {`import { initTreeState, useTreeBonsai, set } from "@bonsai-ts/state";

// Initialize tree state
initTreeState({
  initialState: {
    count: 0,
    user: {
      name: "elorm",
      isActive: true,
    },
  },
});

// Use in components
function Counter() {
  const count = useTreeBonsai("count");
  const name = useTreeBonsai("user/name");

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => set("count", count + 1)}>Increment</button>
    </div>
  );
}`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      Path-Based Access
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Tree state uses forward slash notation to access nested
                      properties. For example,{" "}
                      <code>&quot;user/profile/name&quot;</code> accesses the{" "}
                      <code>name</code> property inside the <code>profile</code>{" "}
                      object inside the <code>user</code> object.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      API Reference
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>initTreeState(config)</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          Initializes the tree state with the given
                          configuration.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>set(path, value)</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          Sets a value at the specified path.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>get(path)</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          Gets the value at the specified path.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>useTreeBonsai(path)</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          React hook to access and subscribe to a value at the
                          specified path.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>subscribe(path, callback)</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          Subscribes to changes at the specified path.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="flat-state" className="mt-0">
                <div className="prose max-w-none space-y-8 bg-white/70 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-6">
                  <h2 className="text-gray-900 tracking-tight text-4xl mb-6">
                    Flat State 🌱
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Flat state provides a simple key-value store for
                    straightforward state management. It&apos;s ideal for
                    simpler applications or components that don&apos;t need
                    nested state.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      Basic Usage
                    </h3>
                    <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto mb-6 ring-1 ring-gray-800 shadow-lg">
                      <pre className="text-sm">
                        <code className="text-gray-300 font-mono">
                          {`import { useBonsai, setState } from "@bonsai-ts/state";

function UserProfile() {
  const name = useBonsai((state) => state.name || "");
  const isActive = useBonsai((state) => state.isActive || false);

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={() => setState({ isActive: !isActive })}>
        Toggle Status
      </button>
    </div>
  );
}`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      Selectors
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      Flat state uses selector functions to extract specific
                      parts of the state. This helps optimize re-renders by only
                      updating components when the selected state changes.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      API Reference
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>setState(newState)</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          Updates the state with the new values.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>useBonsai(selector)</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          React hook to access and subscribe to a part of the
                          state using a selector function.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>getState()</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          Gets the current state.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          <code>subscribe(listener)</code>
                        </h4>
                        <p className="text-gray-700 text-lg">
                          Subscribes to state changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="middleware" className="mt-0">
                <div className="prose max-w-none space-y-8 bg-white/70 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-6">
                  <h2 className="text-gray-900 tracking-tight text-4xl mb-6">
                    Middleware System 🛠️
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Bonsai&apos;s middleware system allows you to intercept,
                    modify, or block state changes. This is useful for
                    validation, logging, persistence, and more.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      Basic Middleware Usage
                    </h3>
                    <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto mb-6 ring-1 ring-gray-800 shadow-lg">
                      <pre className="text-sm">
                        <code className="text-gray-300 font-mono">
                          {`import { createStore } from "@bonsai-ts/state";

// Koa-style middleware adapter (v1.1.0)
const logger = (next) => (path, value, prev) => {
  console.log("State change:", { path, prev, value });
  return next(path, value);
};

export const store = createStore(
  { count: 0 },
  { middleware: [logger] }
);

// You can also add middleware later
// store.addMiddleware(logger);`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      Built-in Middleware
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          Validation Middleware
                        </h4>
                        <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto mb-4 ring-1 ring-gray-800 shadow-lg">
                          <pre className="text-sm">
                            <code className="text-gray-300 font-mono">
                              {`const ageValidator = createValidationMiddleware<number>((path, nextValue) => {
  if (nextValue < 0 || nextValue > 120) {
    return "Age must be between 0 and 120";
  }
  return true;
});`}
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-gray-900 tracking-tight text-xl mb-2">
                          Logging Middleware
                        </h4>
                        <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto ring-1 ring-gray-800 shadow-lg">
                          <pre className="text-sm">
                            <code className="text-gray-300 font-mono">
                              {`const logger = createLoggingMiddleware({
  logPath: true,
  logValue: true,
  logPrevValue: true,
});`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="examples" className="mt-0">
                <div className="prose max-w-none space-y-8 bg-white/70 backdrop-blur border border-emerald-100 rounded-2xl shadow-sm p-6">
                  <h2 className="text-gray-900 tracking-tight text-4xl mb-6">
                    Examples 🧩
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Here are some examples of how to use Bonsai in different
                    scenarios.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      Form Handling with Validation
                    </h3>
                    <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto mb-6 ring-1 ring-gray-800 shadow-lg">
                      <pre className="text-sm">
                        <code className="text-gray-300 font-mono">
                          {`initTreeState({
  initialState: {
    form: {
      username: "",
      password: "",
      email: "",
    },
  },
  middleware: [
    createDebounceMiddleware(300),
    createLoggingMiddleware({ logValue: false }), // Don't log sensitive data
    createPersistenceMiddleware("formState"),
  ],
});`}
                        </code>
                      </pre>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-gray-900 tracking-tight text-2xl mb-4">
                      DevTools Integration
                    </h3>
                    <div className="bg-gray-950 rounded-xl p-4 overflow-x-auto ring-1 ring-gray-800 shadow-lg">
                      <pre className="text-sm">
                        <code className="text-gray-300 font-mono">
                          {`// Option A: Auto-mount (recommended)
import { createStore } from "@bonsai-ts/state";
export const store = createStore({ count: 0 }, { devtools: true });
// Hotkey: Ctrl+Shift+B

// Option B: Manual render
import { DevPanel } from "@bonsai-ts/state/devtools";

function App() {
  return (
    <div>
      {/* Your app components */}
      <DevPanel />
    </div>
  );
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
