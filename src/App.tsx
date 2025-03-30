import { ThemeToggle } from "./components/ui/theme-toggle";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider, useTheme } from "./lib/ThemeContext";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";

// Componente interno que usa el hook useTheme
function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen w-full overflow-x-hidden ${theme === 'dark' ? 'bg-black' : 'gradient-background-light'}`}>
      <ThemeToggle />
      <ScrollToTopButton />
      
      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
