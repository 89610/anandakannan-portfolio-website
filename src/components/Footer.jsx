import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCode } from 'react-icons/fi';
import './Footer.css';

const footerNav = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/89610', icon: FiGithub, label: 'GitHub Profile' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/anandakannans', icon: FiLinkedin, label: 'LinkedIn Profile' },
  { name: 'Email', href: 'mailto:anandakannan50@gmail.com', icon: FiMail, label: 'Send Email' },
];

export function Footer() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const viewportConfig = { once: false, amount: 0.1 };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 300);
      setScrolled(scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={`footer ${scrolled ? 'footer--scrolled' : ''}`} role="contentinfo">
      <div className="footer__background" aria-hidden="true">
        <div className="footer__gradient" />
      </div>

      <div className="container">
        <motion.div
          className="footer__main"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="footer__brand">
            <div className="footer__logo">
              <FiCode size={28} aria-hidden="true" />
              <span className="footer__name">ANANDAKKANNAN S.</span>
            </div>
            <p className="footer__tagline">Web Developer</p>
            <p className="footer__description">
              Building accessible, performant, and user-centric web experiences.
              Passionate about clean code and thoughtful design.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__nav-list" role="list">
              {footerNav.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.2 + index * 0.03, type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <a
                    href={item.href}
                    className="footer__nav-link"
                    onClick={(e) => {
                      if (item.href === '#') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="footer__social" aria-label="Social links">
            <h4 className="footer__nav-title">Connect</h4>
            <div className="footer__social-list" role="list">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.label}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 10, scale: 0.9 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.3 + index * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} aria-hidden="true" />
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer__bottom"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ delay: 0.5 }}
        >
          <div className="footer__divider" aria-hidden="true" />
          <div className="footer__copyright">
            <p>&copy; {currentYear} Anandakannan S. All rights reserved.</p>
            <p className="footer__built-with">
              Built with React, Vite, Framer Motion & care
            </p>
          </div>
        </motion.div>
      </div>

      <motion.button
        className={`footer__back-to-top ${showBackToTop ? 'footer__back-to-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, y: 20 }}
        animate={showBackToTop ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
        exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiArrowUp size={22} aria-hidden="true" />
        <span className="footer__back-to-top-label">Top</span>
      </motion.button>
    </footer>
  );
}