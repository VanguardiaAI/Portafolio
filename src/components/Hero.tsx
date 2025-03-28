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

const products = [
  {
    title: "La Guía Digital Automotriz",
    link: "https://www.laguiadigital.mx",
    thumbnail:
      "https://i.imgur.com/G8PQ4ud.png",
  },
  {
    title: "CRM para Clínicas Estéticas con IA",
    link: "https://clinicas.tech",
    thumbnail:
    "https://i.imgur.com/QKIRkG7.png",
  },
  {
    title: "Marketplace de productos",
    link: "https://github.com/tuuser/trading-bot",
    thumbnail:
    "https://i.imgur.com/gafjnOV.png",
  },
  {
    title: "CRM para Clínicas Estéticas",
    link: "https://github.com/tuuser/estetica-crm",
    thumbnail:
    "https://i.imgur.com/fef8nd5.png",
  },
  {
    title: "Sistemas avanzados de gestión de citas y clientes",
    link: "https://github.com/tuuser/discord-membership",
    thumbnail:
    "https://i.imgur.com/A2Y29JP.png",
  },
  {
    title: "Landing pages que convierten",
    link: "https://proleaker.pro",
    thumbnail:
      "https://i.imgur.com/HubxCdK.png",
  },
  {
    title: "Interfaces de usuario avanzadas",
    link: "https://github.com/tuuser/telegram-bot",
    thumbnail:
      "https://i.imgur.com/FebaaCv.png",
  },
  {
    title: "Sistema de gestión de citas con IA",
    link: "https://github.com/tuuser/discord-bot",
    thumbnail:
      "https://i.imgur.com/S7RQ0zE.png",
  }
];

// URL de la imagen de perfil - reemplaza con tu URL real
const profileImageUrl = "https://i.imgur.com/qyiJGW2.jpeg";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen w-full" id="hero">
      <div className="absolute top-0 left-0 w-full">
        <HeroParallaxWithProfile products={products} profileImage={profileImageUrl} theme={theme} />
      </div>
    </div>
  );
};

// Componente extendido de HeroParallax con imagen de perfil
const HeroParallaxWithProfile = ({
  products,
  profileImage,
  theme,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  profileImage: string;
  theme: 'dark' | 'light';
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
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );
  const translateXMobile = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig
  );
  const translateXReverseMobile = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -300]),
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
    useTransform(scrollYProgress, [0, 0.2], [-700, 300]),
    springConfig
  );

  return (
    <div className="relative">
      <HeaderWithProfile profileImage={profileImage} theme={theme} />
      <div
        ref={ref}
        className="h-[300vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="mt-[-100px]"
        >
          {/* Vista para desktop (pantallas medianas y grandes) */}
          <div className="hidden md:block">
            <motion.div className="flex flex-row-reverse justify-start pl-20 space-x-reverse space-x-12 mb-32 overflow-visible">
              {firstRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                  theme={theme}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row justify-start space-x-12 mb-20 overflow-visible -mr-96">
              {secondRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                  theme={theme}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Vista para móvil (pantallas pequeñas) */}
          <div className="md:hidden mt-[-80px]">
            <motion.div className="flex flex-row-reverse justify-start pl-8 space-x-reverse space-x-6 mb-16 overflow-visible">
              {firstRowMobile.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXMobile}
                  key={product.title}
                  isMobile={true}
                  theme={theme}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row justify-start space-x-6 mb-20 overflow-visible -mr-32">
              {secondRowMobile.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverseMobile}
                  key={product.title}
                  isMobile={true}
                  theme={theme}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row-reverse justify-start pl-8 space-x-reverse space-x-6 mb-20 overflow-visible">
              {thirdRowMobile.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXMobile}
                  key={product.title}
                  isMobile={true}
                  theme={theme}
                />
              ))}
            </motion.div>
            <motion.div className="flex flex-row justify-start space-x-6 mb-20 overflow-visible -mr-32">
              {fourthRowMobile.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverseMobile}
                  key={product.title}
                  isMobile={true}
                  theme={theme}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Header modificado con imagen de perfil
const HeaderWithProfile = ({ profileImage, theme }: { profileImage: string, theme: 'dark' | 'light' }) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className={`text-4xl md:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Desarrollador Full Stack <br /> & Especialista en IA
          </h1>
          <p className={`max-w-2xl mx-auto md:mx-0 text-lg md:text-xl mt-8 ${
            theme === 'dark' 
              ? 'text-neutral-200' 
              : 'text-gray-800 font-medium'
          }`}>
            6 años de experiencia creando soluciones digitales innovadoras. Especializado en Python, React y desarrollo de aplicaciones potenciadas con IA para crear productos de impacto real.
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
              alt="Foto de perfil" 
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
      key={product.title}
      className={`group/product relative flex-shrink-0 ${
        isMobile ? "h-[250px] w-[20rem]" : "h-[450px] w-[35rem]"
      }`}
    >
      <a
        href={product.link}
        className={`block group-hover/product:shadow-2xl w-full h-full rounded-xl overflow-hidden relative ${
          theme === 'light' ? 'hover-card' : ''
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Marco con difuminado de colores */}
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-fuchsia-600/90 via-cyan-500/80 to-lime-500/90 rounded-xl p-1 shadow-[0_0_25px_rgba(255,0,255,0.7)] animate-pulse'
            : 'bg-gradient-to-br from-fuchsia-500/70 via-cyan-400/60 to-lime-400/70 rounded-xl p-1 shadow-[0_0_20px_rgba(100,170,255,0.5)]'
        }`}>
          {/* Fondo para la imagen */}
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-black/50' 
              : 'bg-white/90 backdrop-blur-sm'
          } rounded-lg`}></div>
        </div>
        
        {/* Imagen dentro del marco */}
        <div className="absolute inset-1 rounded-lg overflow-hidden">
          <img
            src={product.thumbnail}
            className="object-cover object-left-top h-full w-full rounded-lg transition-transform duration-500 group-hover/product:scale-110"
            alt={product.title}
          />
        </div>
        
        {/* Overlay al hacer hover */}
        <div className={`absolute inset-1 h-[calc(100%-0.5rem)] w-[calc(100%-0.5rem)] opacity-0 group-hover/product:opacity-90 ${
          theme === 'dark' 
            ? 'bg-black' 
            : 'bg-white/95 backdrop-blur-md'
        } pointer-events-none rounded-lg transition-opacity duration-300`}></div>
      </a>
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