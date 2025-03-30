"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Detectar el idioma del navegador
    const detectBrowserLanguage = (): Language => {
      const browserLang = navigator.language || (navigator as any).userLanguage;
      
      // Si el idioma comienza con 'es', usar español
      if (browserLang && browserLang.startsWith('es')) {
        return 'es';
      }
      
      // Para cualquier otro idioma, usar inglés por defecto
      return 'en';
    };

    setLanguage(detectBrowserLanguage());
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 