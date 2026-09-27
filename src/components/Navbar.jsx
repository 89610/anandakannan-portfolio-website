import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com/in/anandakannans', icon: FiLinkedin, label: 'LinkedIn', target: '_blank' },
  { href: 'https://github.com/89610', icon: FiGithub, label: 'GitHub', target: '_blank' },
  { href: 'mailto:anandakannan50@gmail.com', icon: FiMail, label: 'Email', target: '_self' },
];

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setMobileLinksOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setMobileLinksOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted) {
    return (
      <>
        <header className="navbar" role="banner">
          <div className="navbar__container container">
            <a href="#" className="navbar__logo" aria-label="Go to homepage">
              <span className="navbar__logo-text">Anandakannan S.</span>
            </a>
          </div>
        </header>
        <MobileDrawer isOpen={false} onClose={() => {}} theme={theme} toggleTheme={toggleTheme} />
      </>
    );
  }

  return (
    <>
      <header
        className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
        role="banner"
        style={{ height: 'var(--header-height)' }}
      >
        <div className="navbar__container container">
          <a
            href="#"
            className="navbar__logo"
            aria-label="Go to homepage"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="navbar__logo-text">Anandakannan S.</span>
          </a>

          <nav className="navbar__nav" role="navigation" aria-label="Main navigation">
            <ul className="navbar__list">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href} className="navbar__item">
                  <motion.a
                    href={link.href}
                    className="navbar__link"
                    onClick={handleLinkClick}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar__actions">
            <AnimatePresence mode="wait">
              {mounted && (
                <motion.button
                  key={theme}
                  className="navbar__theme-toggle"
                  onClick={toggleTheme}
                  aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                >
                  {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                </motion.button>
              )}
            </AnimatePresence>

            <button
              className="navbar__mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-hidden="false"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <FiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <FiMenu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isOpen}
        onClose={() => { setIsOpen(false); setMobileLinksOpen(false); }}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

function MobileDrawer({ isOpen, onClose, theme, toggleTheme }) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          id="mobile-menu"
          className="navbar__mobile-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <motion.nav
            className="navbar__mobile-panel"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="navbar__mobile-panel-content">
              <div className="navbar__mobile-header">
                <h2 className="navbar__mobile-title">Navigation</h2>
                <button
                  className="navbar__mobile-close"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              <ul className="navbar__mobile-list">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      className="navbar__mobile-link"
                      onClick={onClose}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, type: 'spring', stiffness: 300, damping: 30 }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>

              <div className="navbar__mobile-divider" />

              <div className="navbar__mobile-theme">
                <span className="navbar__mobile-theme-label">
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </span>
                <button
                  className="navbar__mobile-theme-toggle"
                  onClick={toggleTheme}
                  aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                >
                  {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                </button>
              </div>

              <div className="navbar__mobile-social">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.target}
                    rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="navbar__mobile-social-link"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05, type: 'spring', stiffness: 300, damping: 30 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} aria-hidden="true" />
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Navbar;