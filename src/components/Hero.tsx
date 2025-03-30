"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useTheme } from "../lib/ThemeContext";
import { useLanguage } from "../lib/LanguageContext";
import { translations } from "../lib/translations";

// URL de la imagen de perfil - reemplaza con tu URL real
const profileImageUrl = "https://i.imgur.com/qyiJGW2.jpeg";

const Hero = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  
  // Productos con títulos traducibles
  const products = [
    {
      originalTitle: "Interfaces de usuario avanzadas",
      link: "https://github.com/tuuser/telegram-bot",
      thumbnail: "https://i.imgur.com/FebaaCv.png",
    },
    {
      originalTitle: "CRM para Clínicas Estéticas con IA",
      link: "https://clinicas.tech",
      thumbnail: "https://i.imgur.com/QKIRkG7.png",
    },
    {
      originalTitle: "Marketplace de productos",
      link: "https://github.com/tuuser/trading-bot",
      thumbnail: "https://i.imgur.com/gafjnOV.png",
    },
    {
      originalTitle: "CRM para Clínicas Estéticas",
      link: "https://github.com/tuuser/estetica-crm",
      thumbnail: "https://i.imgur.com/fef8nd5.png",
    },
    {
      originalTitle: "Sistemas avanzados de gestión de citas y clientes",
      link: "https://github.com/tuuser/discord-membership",
      thumbnail: "https://i.imgur.com/A2Y29JP.png",
    },
    {
      originalTitle: "Landing pages que convierten",
      link: "https://proleaker.pro",
      thumbnail: "https://i.imgur.com/HubxCdK.png",
    },
    {
      originalTitle: "La Guía Digital Automotriz",
      link: "https://www.laguiadigital.mx",
      thumbnail: "https://i.imgur.com/G8PQ4ud.png",
    },
    {
      originalTitle: "Sistema de gestión de citas con IA",
      link: "https://github.com/tuuser/discord-bot",
      thumbnail: "https://i.imgur.com/S7RQ0zE.png",
    }
  ];
  
  // Transformar los productos con títulos traducidos
  const translatedProducts = products.map(product => ({
    title: translations[language].projects[product.originalTitle]?.title || product.originalTitle,
    link: product.link,
    thumbnail: product.thumbnail,
    originalTitle: product.originalTitle
  }));
  
  return (
    <div className="min-h-screen w-full" id="hero">
      <HeroParallaxWithProfile products={translatedProducts} profileImage={profileImageUrl} theme={theme} language={language} />
    </div>
  );
};

// Componente extendido de HeroParallax con imagen de perfil
const HeroParallaxWithProfile = ({
  products,
  profileImage,
  theme,
  language,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    originalTitle: string;
  }[];
  profileImage: string;
  theme: 'dark' | 'light';
  language: 'es' | 'en';
}) => {
  // División para escritorio - 2 filas de 4
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  
  // División para móvil - 4 filas de 2
  const firstRowMobile = products.slice(0, 2);
  const secondRowMobile = products.slice(2, 4);
  const thirdRowMobile = products.slice(4, 6);
  const fourthRowMobile = products.slice(6, 8);
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const translateXMobile = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverseMobile = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-300, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[230vh] md:h-[230vh] h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <HeaderWithProfile profileImage={profileImage} theme={theme} language={language} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mt-[180px]"
      >
        {/* Vista para desktop (pantallas medianas y grandes) */}
        <div className="hidden md:block">
          <motion.div className="flex flex-row-reverse justify-start space-x-reverse space-x-20 mb-32 overflow-visible">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.originalTitle}
                theme={theme}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row justify-start space-x-20 mb-20 overflow-visible">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.originalTitle}
                theme={theme}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Vista para móvil (pantallas pequeñas) */}
        <div className="md:hidden space-y-20">
          <motion.div className="flex flex-row-reverse justify-start space-x-reverse space-x-10 overflow-visible">
            {firstRowMobile.map((product) => (
              <ProductCard
                product={product}
                translate={translateXMobile}
                key={product.originalTitle}
                isMobile={true}
                theme={theme}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row justify-start space-x-10 overflow-visible">
            {secondRowMobile.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverseMobile}
                key={product.originalTitle}
                isMobile={true}
                theme={theme}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse justify-start space-x-reverse space-x-10 overflow-visible">
            {thirdRowMobile.map((product) => (
              <ProductCard
                product={product}
                translate={translateXMobile}
                key={product.originalTitle}
                isMobile={true}
                theme={theme}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row justify-start space-x-10 overflow-visible">
            {fourthRowMobile.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverseMobile}
                key={product.originalTitle}
                isMobile={true}
                theme={theme}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// Header modificado con imagen de perfil
const HeaderWithProfile = ({ 
  profileImage, 
  theme, 
  language 
}: { 
  profileImage: string, 
  theme: 'dark' | 'light',
  language: 'es' | 'en'
}) => {
  const t = translations[language];
  
  return (
    <div className="max-w-7xl mx-auto px-4 w-full absolute top-20 left-0 right-0 z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-20">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className={`text-4xl md:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {t.hero.title}
          </h1>
          <p className={`max-w-2xl mx-auto md:mx-0 text-lg md:text-xl mt-8 ${
            theme === 'dark' 
              ? 'text-neutral-200' 
              : 'text-gray-800 font-medium'
          }`}>
            {t.hero.subtitle}
          </p>
        </div>

        <div className="w-full md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0">
          <motion.div 
            className={`w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full ${
              theme === 'dark' 
                ? 'border-4 border-white/20 bg-black' 
                : 'gradient-border soft-shadow'
            } relative z-10`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: theme === 'dark' 
                ? "0 0 30px rgba(255,255,255,0.3)" 
                : "0 20px 40px rgba(140, 170, 255, 0.3)" 
            }}
          >
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-black/80 to-black/40' : 'bg-gradient-to-b from-white/80 to-white/40'} z-0 rounded-full`}></div>
            <img 
              src={profileImage} 
              alt={t.hero.profileAlt} 
              className="w-full h-full object-cover relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// ProductCard component
const ProductCard = ({
  product,
  translate,
  isMobile = false,
  theme,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    originalTitle: string;
  };
  translate: MotionValue<number>;
  isMobile?: boolean;
  theme: 'dark' | 'light';
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.originalTitle}
      className={`group/product relative flex-shrink-0 ${
        isMobile ? "h-[250px] w-[20rem]" : "h-[450px] w-[35rem]"
      }`}
    >
      <div
        className={`block group-hover/product:shadow-2xl w-full h-full rounded-xl overflow-hidden relative ${
          theme === 'light' ? 'hover-card' : ''
        }`}
      >
        {/* Marco con difuminado de colores */}
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-fuchsia-600/90 via-cyan-500/80 to-lime-500/90 rounded-xl p-3 shadow-[0_0_25px_rgba(255,0,255,0.7)] animate-pulse'
            : 'bg-gradient-to-br from-fuchsia-500/70 via-cyan-400/60 to-lime-400/70 rounded-xl p-3 shadow-[0_0_20px_rgba(100,170,255,0.5)]'
        }`}>
          {/* Fondo para la imagen */}
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-black/50' 
              : 'bg-white/90 backdrop-blur-sm'
          } rounded-lg`}></div>
        </div>
        
        {/* Imagen dentro del marco */}
        <div className="absolute inset-3 rounded-lg overflow-hidden">
          <img
            src={product.thumbnail}
            className="object-cover object-left-top h-full w-full rounded-lg transition-transform duration-500 group-hover/product:scale-110"
            alt={product.title}
          />
        </div>
        
        {/* Overlay al hacer hover */}
        <div className={`absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] opacity-0 group-hover/product:opacity-90 ${
          theme === 'dark' 
            ? 'bg-black' 
            : 'bg-white/95 backdrop-blur-md'
        } pointer-events-none rounded-lg transition-opacity duration-300`}></div>
      </div>
      <h2 className={`absolute bottom-8 left-8 opacity-0 group-hover/product:opacity-100 ${
        theme === 'dark' 
          ? 'text-white font-bold' 
          : 'text-gray-900 font-bold'
        } transition-all duration-300 z-10 translate-y-4 group-hover/product:translate-y-0 ${
        isMobile ? "text-lg" : "text-2xl"
      }`}>
        {product.title}
      </h2>
    </motion.div>
  );
};

export default Hero; 