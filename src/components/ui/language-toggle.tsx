"use client";
import { useLanguage } from "../../lib/LanguageContext";
import { motion } from "framer-motion";
import { useTheme } from "../../lib/ThemeContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
  
  const isDark = theme === 'dark';
  
  return (
    <div className="fixed top-5 right-20 z-50">
      <motion.button
        onClick={toggleLanguage}
        className={`
          rounded-full p-2 text-sm focus:outline-none 
          ${isDark 
            ? 'bg-gray-800 hover:bg-gray-700 text-white' 
            : 'bg-white hover:bg-gray-100 text-gray-800 shadow-md'}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {language === 'es' ? 'EN' : 'ES'}
      </motion.button>
    </div>
  );
}; 