import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun, Menu, X, Rocket } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Tracks', to: 'tracks' },
    { name: 'Timeline', to: 'timeline' },
    { name: 'FAQ', to: 'faq' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-transparent py-5 dark:bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer z-50"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-neon-purple flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <Rocket size={24} />
            </div>
            <span className="text-xl font-bold dark:text-white text-slate-800 tracking-tight">
              Hack<span className="neon-text">Orbit</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    activeClass="text-primary dark:text-neon"
                    className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-neon font-medium cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link
                to="register"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-primary cursor-pointer !py-2 !px-5 text-sm"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 dark:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-slate-900 z-30 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <ul className="flex flex-col space-y-8 text-center text-2xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-800 dark:text-white hover:text-primary dark:hover:text-neon font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="register"
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 inline-block btn-primary"
            >
              Register Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
