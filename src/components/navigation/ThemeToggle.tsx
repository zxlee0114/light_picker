"use client";

import { useEffect, useState } from "react";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 避免 SSR hydration mismatch
  useEffect(() => {
    // defer setting mounted to next tick to avoid synchronous setState in effect
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Toggle
      pressed={isDark}
      onPressedChange={pressed => setTheme(pressed ? "dark" : "light")}
      aria-label="切換主題"
      className="rounded-full p-2 transition-colors duration-300"
    >
      {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Toggle>
  );
}
