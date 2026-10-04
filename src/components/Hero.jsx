import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiDatabase, FiLayout, FiArrowRight, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/profile.png';
import './Hero.css';

const heroContent = {
  greeting: "Hi, I'm",
  name: "Anandakannan S.",
  title: "Web Developer",
  description: "Aspiring Frontend Developer with a strong foundation in Computer Science and a passion for building responsive, accessible, and user-centric web applications. Proficient in HTML5, CSS3, JavaScript (ES6+), React.js, and modern styling techniques including Flexbox, CSS Grid, and Bootstrap 5.",
  ctaPrimary: { label: "View My Work", href: "#projects" },
  ctaSecondary: { label: "Get In Touch", href: "#contact" },
  coreTechnologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Bootstrap 5',
    'Python',
  ],
  socialLinks: [
    { href: "https://github.com/89610", icon: FiGithub, label: "GitHub" },
    { href: "https://linkedin.com/in/anandakannans", icon: FiLinkedin, label: "LinkedIn" },
    { href: "mailto:anandakannan50@gmail.com", icon: FiMail, label: "Email" },
  ],
};

const floatingElements = [
  { icon: FiCode, delay: 0, top: "10%", left: "5%" },
  { icon: FiDatabase, delay: 0.5, top: "20%", right: "8%" },
  { icon: FiLayout, delay: 1, bottom: "30%", left: "3%" },
  { icon: FiCode, delay: 1.5, bottom: "15%", right: "5%" },
];

export function Hero() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [displayTitle, setDisplayTitle] = useState('');

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayTitle(heroContent.title);
      return;
    }
    const title = heroContent.title;
    let index = 0;
    const timer = setInterval(() => {
      setDisplayTitle(title.slice(0, index + 1));
      index++;
      if (index >= title.length) {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden="true">
        <div className="hero__gradient hero__gradient--1" />
        <div className="hero__gradient hero__gradient--2" />
        <div className="hero__gradient hero__gradient--3" />
        {floatingElements.map((el, index) => (
          <motion.div
            key={index}
            className="hero__floating-element"
            style={{ top: el.top, left: el.left, right: el.right, bottom: el.bottom }}
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.5 }}
            animate={prefersReducedMotion ? {} : { opacity: 0.6, scale: 1 }}
            transition={prefersReducedMotion ? {} : { delay: el.delay, duration: 1, type: 'spring', stiffness: 100, damping: 15 }}
          >
            <el.icon size={32} style={{ color: 'var(--color-primary)' }} />
          </motion.div>
        ))}
      </div>

      <div className="hero__container container">
        <motion.div
          className="hero__content"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? {} : { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="hero__badge"
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={prefersReducedMotion ? {} : { delay: 0.2, duration: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
          >
            <span className="hero__badge-dot" aria-hidden="true" />
            <span>{heroContent.greeting} {heroContent.name}</span>
          </motion.div>

          <motion.h1
            id="hero-title"
            className="hero__title"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {displayTitle || (prefersReducedMotion ? heroContent.title : '')}
            {!prefersReducedMotion && displayTitle.length < heroContent.title.length && <span className="hero__cursor" aria-hidden="true" />}
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="hero__cta-group"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              onClick={scrollToProjects}
              className="btn btn-primary btn-lg hero__cta-primary"
            >
              {heroContent.ctaPrimary.label}
              <FiArrowRight size={18} aria-hidden="true" />
            </button>
            <motion.button
              onClick={scrollToContact}
              className="btn btn-outline btn-lg hero__cta-secondary"
              whileHover={prefersReducedMotion ? {} : { y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              {heroContent.ctaSecondary.label}
            </motion.button>
            <motion.a
              href="/Anandakannan_Frontend_Developer_CV.pdf"
              download="Anandakannan_Frontend_Developer_CV.pdf"
              className="btn btn-secondary btn-lg hero__cta-download"
              whileHover={prefersReducedMotion ? {} : { y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <FiDownload size={18} aria-hidden="true" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="hero__technologies"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="hero__tech-label">Core Technologies</span>
            <div className="hero__tech-list" role="list">
              {heroContent.coreTechnologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="hero__tech-item"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                  transition={prefersReducedMotion ? {} : { delay: 0.7 + index * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero__social"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? {} : { delay: 0.8, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {heroContent.socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__social-link"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10, scale: 0.8 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                transition={prefersReducedMotion ? {} : { delay: 0.9 + index * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.15, y: -3 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 50, scale: 0.9 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, x: 0, scale: 1 }}
          transition={prefersReducedMotion ? {} : { delay: 0.4, duration: 1, type: 'spring', stiffness: 100, damping: 15 }}
          aria-hidden="true"
        >
          <div className="hero__profile-card">
            <img
              src={profileImg}
              alt="Anandakannan S. - Web Developer"
              className="hero__profile-image"
            />
          </div>
          <motion.div
            className="hero__visual-glow"
            animate={prefersReducedMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={prefersReducedMotion ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={prefersReducedMotion ? {} : { delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="hero__scroll-mouse"
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={prefersReducedMotion ? {} : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="hero__scroll-wheel" />
        </motion.div>
        <span className="hero__scroll-text">Scroll to explore</span>
      </motion.div>
    </section>
  );
}