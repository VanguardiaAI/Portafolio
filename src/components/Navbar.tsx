import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <span className="gradient-text">Vanguard</span>
            <span className="accent-gradient-text">IA</span>
          </span>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <NavLink href="#inicio">Inicio</NavLink>
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </div>

        <button className="rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 md:hidden">
          Menú
        </button>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
  >
    {children}
  </a>
);

export default Navbar; 