"use client";
import { useLanguage } from "../../lib/LanguageContext";
import { motion } from "framer-motion";
import { useTheme } from "../../lib/ThemeContext";
import { Toggle } from "./toggle";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      className="fixed top-4 right-20 z-50"
    >
      <Toggle
        variant="outline"
        className={`group size-10 rounded-full data-[state=on]:bg-transparent data-[state=on]:hover:bg-muted ${
          theme === 'dark'
            ? 'bg-white/10 hover:bg-white/20 text-white border-gray-700'
            : 'bg-black/5 hover:bg-black/10 text-gray-800 border-gray-200 shadow-sm'
        }`}
        pressed={language === "es"}
        onPressedChange={toggleLanguage}
        aria-label={`Cambiar a ${language === "es" ? "inglés" : "español"}`}
      >
        <span className="text-sm font-medium">
          {language === 'es' ? 'EN' : 'ES'}
        </span>
      </Toggle>
    </motion.div>
  );
}; 