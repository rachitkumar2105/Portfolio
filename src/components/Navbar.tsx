import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-card border-b border-border/50 py-2' : 'py-4'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-bold font-display text-gradient relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              RKS
            </motion.span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-glow-secondary"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-card border-t border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${activeSection === item.href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
