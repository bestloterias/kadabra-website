import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Loterias Municipais', href: '/loterias-municipais' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white group">
          <img src="/images/logokadabra.png" alt="Kadabra Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href) ? "text-primary" : "text-slate-300"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark"
          >
            Entre em Contato
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-background-dark"
          >
            <div className="space-y-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-white/5",
                    isActive(link.href) ? "text-primary bg-white/5" : "text-slate-300"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                className="mt-4 block w-full rounded-lg bg-primary px-4 py-3 text-center text-base font-bold text-white hover:bg-primary-dark"
                onClick={() => setIsOpen(false)}
              >
                Entre em Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
