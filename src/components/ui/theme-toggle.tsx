"use client";

import { Toggle } from "./toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../lib/ThemeContext";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed top-4 right-4 z-50"
    >
      <Toggle
        variant="outline"
        className={`group size-10 rounded-full data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted ${
          theme === 'dark'
            ? 'bg-white/10 hover:bg-white/20 text-white border-gray-700'
            : 'bg-black/5 hover:bg-black/10 text-gray-800 border-gray-200 shadow-sm'
        }`}
        pressed={theme === "dark"}
        onPressedChange={toggleTheme}
        aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
      >
        <Moon
          size={18}
          strokeWidth={2}
          className="shrink-0 scale-0 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          aria-hidden="true"
        />
        <Sun
          size={18}
          strokeWidth={2}
          className="absolute shrink-0 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </motion.div>
  );
} 