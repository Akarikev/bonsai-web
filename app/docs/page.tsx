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
    <div className="min-h-screen bg-white">
      {/* 🌿 NavBar with Bonsai vibes */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
      <div className="border-b bg-gray-50">
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
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-semibold mb-4 text-gray-900">
                🌿 Bonsai Guidebook
              </h3>
              <ul className="space-y-1">
                <li>
                  <Button
                    variant={activeTab === "overview" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("overview")}
                  >
                    📖 Overview
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeTab === "tree-state" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("tree-state")}
                  >
                    🌳 Tree State
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeTab === "flat-state" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("flat-state")}
                  >
                    🌱 Flat State
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeTab === "middleware" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("middleware")}
                  >
                    🛠️ Middleware
                  </Button>
                </li>
                <li>
                  <Button
                    variant={activeTab === "examples" ? "secondary" : "ghost"}
                    className="w-full justify-start"
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
                <div className="prose max-w-none space-y-8 p-4">
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
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-gray-900 tracking-tight text-2xl">
                      📦 Install It Like It&apos;s Hot
                    </h3>
                    <div className="bg-gray-900 rounded-lg p-4 space-y-2">
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
                        Client Components
                      </h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm">
                          <code className="text-gray-300 font-mono">
                            {`"use client";

import { initTreeState, useTreeBonsai, set } from "@bonsai-ts/state";

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

// Use in client components
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

                    <div className="space-y-4">
                      <h4 className="text-gray-900 tracking-tight text-xl">
                        Server Components
                      </h4>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        For server components, use Bonsai&apos;s server-side
                        utilities to initialize state and pass it to client
                        components:
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm">
                          <code className="text-gray-300 font-mono">
                            {`// app/page.tsx (Server Component)
import { initTreeState } from "@bonsai-ts/state";
import { Counter } from "./Counter";

// Initialize state on the server
initTreeState({
  initialState: {
    count: 0,
    user: {
      name: "elorm",
      isActive: true,
    },
  },
});

export default function Page() {
  return (
    <div>
      <h1>My App</h1>
      <Counter />
    </div>
  );
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
                <div className="prose max-w-none space-y-8 p-4">
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
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
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
                <div className="prose max-w-none space-y-8 p-4">
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
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
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
                <div className="prose max-w-none space-y-8 p-4">
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
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                      <pre className="text-sm">
                        <code className="text-gray-300 font-mono">
                          {`import { useTreeMiddleware } from "@bonsai-ts/state";

// Register middleware
useTreeMiddleware((path, nextVal, oldVal) => {
  console.log(\`\${path} changed from\`, oldVal, "to", nextVal);
  return nextVal;
});`}
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
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
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
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
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
                <div className="prose max-w-none space-y-8 p-4">
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
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
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
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code className="text-gray-300 font-mono">
                          {`import { DevPanel } from "@bonsai-ts/state";

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
