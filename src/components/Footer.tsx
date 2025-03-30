"use client";

import { motion } from "framer-motion";
import { Github, Mail, Twitter } from "lucide-react";
import { useTheme } from "../lib/ThemeContext";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

export function Footer() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/VanguardiaAI",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://x.com/VanguardiaAI",
      label: "X.com",
    },
    {
      icon: Mail,
      href: "mailto:contacto@vanguardiamx.tech",
      label: "Email",
    },
  ];

  return (
    <footer 
      className={`py-12 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-gray-100 to-white relative'
      }`}
    >
      {theme === 'light' && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-100/30 blur-3xl opacity-30"></div>
          <div className="absolute -top-10 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-100/20 blur-3xl opacity-20"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}
                whileHover={{ 
                  scale: 1.1,
                  ...(theme === 'light' && {
                    textShadow: "0 0 8px rgba(59, 130, 246, 0.3)"
                  })
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-center ${theme === 'light' ? 'gradient-border rounded-xl p-4 inline-block' : ''}`}
          >
            <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.footer.specialistText}
            </p>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`}>
              {t.footer.rightsText.replace('{year}', currentYear.toString())}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
} 