"use client";

import type React from "react";

import { useState, useEffect, useRef, useMemo } from "react";
import { Play, RotateCcw, Copy } from "lucide-react";
import { SyntaxHighlighter } from "@/components/syntax-highlighter";
import { Button } from "@/components/ui/button";

interface Example {
  title: string;
  description: string;
  code: string;
}

export function CodePlayground() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const examples = useMemo<Example[]>(
    () => [
      {
        title: "Tree State Counter (createStore)",
        description: "Counter using createStore with DevTools enabled",
        code: `import { createStore } from "@bonsai-ts/state";

export const store = createStore(
  {
    counter: 0,
    user: { name: "John" },
  },
  { devtools: true }
);

function Counter() {
  const count = store.use<number>("counter") || 0;
  const name = store.use<string>("user/name") || "";

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Tree State Example</h2>
      <div>
        <p>Count: {count}</p>
        <button
          onClick={() => store.set("counter", count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Increment
        </button>
        <button
          onClick={() => store.set("counter", 0)}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
      <div>
        <p>User: {name}</p>
        <input
          value={name}
          onChange={(e) => store.set("user/name", e.target.value)}
          className="border px-3 py-2 rounded"
          placeholder="Enter name"
        />
      </div>
    </div>
  );
}

export default Counter;`,
      },
      {
        title: "Flat State Todo",
        description: "Simple todo list using flat state management",
        code: `import { useBonsai, setState } from "@bonsai-ts/state";

function TodoApp() {
  const todos = useBonsai((state) => state.todos || []);
  const newTodo = useBonsai((state) => state.newTodo || "");

  const addTodo = () => {
    if (newTodo.trim()) {
      setState({
        todos: [...todos, { id: Date.now(), text: newTodo, done: false }],
        newTodo: ""
      });
    }
  };

  const toggleTodo = (id) => {
    setState({
      todos: todos.map(todo => 
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    });
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Flat State Todo</h2>
      <div className="flex gap-2">
        <input
          value={newTodo}
          onChange={(e) => setState({ newTodo: e.target.value })}
          placeholder="Add a todo..."
          className="border px-3 py-2 rounded flex-1"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button 
          onClick={addTodo}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.done ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;`,
      },
      {
        title: "Middleware Example (createStore)",
        description: "Validation + logging via createStore middleware",
        code: `import { createStore, createValidationMiddleware } from "@bonsai-ts/state";

// Koa-style logging middleware
const logger = (next) => (path, value, prev) => {
  console.log("[Log]", { path, prev, value });
  return next(path, value);
};

// Validation middleware
const nameValidator = createValidationMiddleware((path, value) => {
  if (path === "user/name" && typeof value === "string" && value.length < 2) {
    return "Name must be at least 2 characters";
  }
  if (path === "user/age" && (value < 0 || value > 120)) {
    return "Age must be between 0 and 120";
  }
  return true;
});

export const store = createStore(
  { user: { age: 18, name: "" } },
  { middleware: [logger, nameValidator] }
);

function UserForm() {
  const age = store.use<number>("user/age") ?? 0;
  const name = store.use<string>("user/name") ?? "";

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Middleware Validation</h2>
      <div>
        <label className="block mb-2">Name (min 2 chars):</label>
        <input
          value={name}
          onChange={(e) => store.set("user/name", e.target.value)}
          className="border px-3 py-2 rounded w-full"
          placeholder="Enter name"
        />
      </div>
      <div>
        <label className="block mb-2">Age (0-120):</label>
        <input
          type="number"
          value={age}
          onChange={(e) => store.set("user/age", parseInt(e.target.value) || 0)}
          className="border px-3 py-2 rounded w-full"
          min="0"
          max="120"
        />
      </div>
      <div className="text-sm text-gray-600">Check the console for validation messages!</div>
    </div>
  );
}

export default UserForm;`,
      },
      {
        title: "Scoped State",
        description: "Component-specific state with scoped stores",
        code: `import { createBonsaiStore } from "@bonsai-ts/state";

// Create scoped stores
const counterStore = createBonsaiStore({ count: 0 });
const settingsStore = createBonsaiStore({ theme: "light", notifications: true });

function ScopedExample() {
  const count = counterStore.use((state) => state.count);
  const theme = settingsStore.use((state) => state.theme);
  const notifications = settingsStore.use((state) => state.notifications);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Scoped State Stores</h2>
      
      <div className="border p-4 rounded">
        <h3 className="font-semibold mb-2">Counter Store</h3>
        <p>Count: {count}</p>
        <div className="space-x-2 mt-2">
          <button 
            onClick={() => counterStore.set({ count: count + 1 })}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            +
          </button>
          <button 
            onClick={() => counterStore.set({ count: count - 1 })}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            -
          </button>
        </div>
      </div>

      <div className="border p-4 rounded">
        <h3 className="font-semibold mb-2">Settings Store</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => settingsStore.set({ 
                theme: e.target.checked ? "dark" : "light" 
              })}
            />
            Dark Theme
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => settingsStore.set({ 
                notifications: e.target.checked 
              })}
            />
            Notifications
          </label>
        </div>
        <p className="text-sm mt-2 text-gray-600">
          Theme: {theme}, Notifications: {notifications ? "On" : "Off"}
        </p>
      </div>
    </div>
  );
}

export default ScopedExample;`,
      },
    ],
    []
  );

  useEffect(() => {
    setCode(examples[selectedExample].code);
  }, [selectedExample, examples]);

  const runCode = () => {
    setIsRunning(true);
    setOutput("Running code...");

    // Simulate code execution
    setTimeout(() => {
      setOutput(
        `✅ Code executed successfully!\n\nExample: ${examples[selectedExample].title}\n\nThis would render the React component with Bonsai state management.\n\nIn a real implementation, this would:\n- Initialize the state store\n- Render the component\n- Handle state updates\n- Show live results`
      );
      setIsRunning(false);
    }, 1000);
  };

  const resetCode = () => {
    setCode(examples[selectedExample].code);
    setOutput("");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  // Handle tab key in textarea
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;

      // Insert 2 spaces for tab
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);

      // Move cursor position after the inserted tab
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.selectionStart = editorRef.current.selectionEnd =
            start + 2;
        }
      }, 0);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Example Selector */}
      <div className="border-b bg-gray-50 p-4">
        <div className="flex flex-wrap gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => setSelectedExample(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedExample === index
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {examples[selectedExample].description}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-0">
        {/* Code Editor */}
        <div className="border-r">
          <div className="flex items-center justify-between p-4 border-b bg-gray-900">
            <span className="text-white font-medium">Code Editor</span>
            <div className="flex gap-2">
              <Button
                onClick={copyCode}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white transition-colors"
                title="Copy code"
              >
                <Copy className="w-4 h-4" />
              </Button>
              <Button
                onClick={resetCode}
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white transition-colors"
                title="Reset code"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                onClick={runCode}
                disabled={isRunning}
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                {isRunning ? "Running..." : "Run"}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden">
              <SyntaxHighlighter
                code={code}
                language="tsx"
                className="h-full"
              />
            </div>
            <textarea
              ref={editorRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-96 p-4 font-mono text-sm bg-transparent resize-none focus:outline-none caret-white text-transparent"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Output Panel */}
        <div>
          <div className="p-4 border-b bg-gray-50">
            <span className="font-medium text-gray-900">Output</span>
          </div>
          <div className="h-96 p-4 bg-gray-50 overflow-auto">
            {output ? (
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                {output}
              </pre>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="text-center">
                  <Play className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>Click &quot;Run&quot; to execute the code</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info Panel */}
      <div className="border-t bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-blue-600 text-sm">💡</span>
          </div>
          <div className="text-sm">
            <p className="text-blue-800 font-medium mb-1">Try it yourself!</p>
            <p className="text-blue-700">
              In a real application, these examples would render interactive
              React components with full state management capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
