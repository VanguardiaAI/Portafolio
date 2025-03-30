"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter } from "lucide-react";
import { useTheme } from "../lib/ThemeContext";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";
import { useState } from "react";

export function Contact() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [formStatus, setFormStatus] = useState({ message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/VanguardiaAI",
      label: "GitHub",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      href: "https://x.com/VanguardiaAI",
      label: "X.com",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:contacto@vanguardiamx.tech",
      label: "Email",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Deshabilitar botón y mostrar estado "enviando"
    setIsSubmitting(true);
    setFormStatus({ message: '', isError: false });
    
    // Recopilar datos del formulario usando FormData
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    };
    
    try {
      // Enviar datos al servidor
      const response = await fetch('https://proleaker.pro/api/portfolio/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        // Mostrar mensaje de éxito
        setFormStatus({ 
          message: t.contact.successMessage, 
          isError: false 
        });
        
        // Limpiar formulario
        form.reset();
      } else {
        // Mostrar mensaje de error
        setFormStatus({ 
          message: data.message || t.contact.errorMessage, 
          isError: true 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus({ 
        message: t.contact.connectionError, 
        isError: true 
      });
    } finally {
      // Restaurar botón
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className={`relative py-20 px-4 md:px-6 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 to-black' 
          : 'bg-gradient-to-b from-gray-100 to-white'
      }`}
      id="contacto"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            {t.contact.title}
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto`}>
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl border ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
                : 'glass-card gradient-border soft-shadow'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.contact.socialTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 transition-colors p-4 rounded-xl ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white bg-gray-900/50 hover:bg-gray-900/80'
                      : 'text-gray-700 hover:text-gray-900 glass-effect hover:shadow-md'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl border ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-900 to-black border-gray-800'
                : 'glass-card gradient-border soft-shadow'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.contact.messageTitle}
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.formPlaceholders.name}
                  required
                  className={`w-full border rounded-xl p-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-800 text-white'
                      : 'bg-white/50 border-gray-200 text-gray-900 shadow-inner hover:border-gray-300 focus:shadow-md'
                  }`}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.formPlaceholders.email}
                  required
                  className={`w-full border rounded-xl p-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-800 text-white'
                      : 'bg-white/50 border-gray-200 text-gray-900 shadow-inner hover:border-gray-300 focus:shadow-md'
                  }`}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder={t.contact.formPlaceholders.message}
                  rows={4}
                  required
                  className={`w-full border rounded-xl p-4 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    theme === 'dark'
                      ? 'bg-gray-900/50 border-gray-800 text-white'
                      : 'bg-white/50 border-gray-200 text-gray-900 shadow-inner hover:border-gray-300 focus:shadow-md'
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-semibold py-4 px-8 rounded-xl hover:opacity-90 transition-all text-white !bg-purple-600 hover:!bg-purple-700 hover:translate-y-[-2px] hover:shadow-lg [background-image:none] important-purple disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#9333ea', backgroundImage: 'none' }}
              >
                {isSubmitting ? t.contact.sending : t.contact.sendButton}
              </button>
              {formStatus.message && (
                <div className={`mt-4 p-3 rounded-lg ${formStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 