import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiShield, FiCode, FiDatabase, FiBook } from 'react-icons/fi';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Fundamentals of Web Development',
    issuer: 'Edunet Foundation',
    icon: FiCode,
    color: 'var(--color-primary)',
    bgColor: 'var(--color-primary-light)',
    borderColor: 'var(--color-primary)',
    credentialUrl: null,
  },
  {
    id: 2,
    title: 'JavaScript Algorithms & Data Structures (Basics)',
    issuer: 'freeCodeCamp',
    icon: FiShield,
    color: 'var(--color-secondary)',
    bgColor: 'rgba(244, 63, 94, 0.1)',
    borderColor: 'var(--color-secondary)',
    credentialUrl: null,
  },
  {
    id: 3,
    title: 'SQL Basics Certification',
    issuer: 'Simplilearn',
    icon: FiDatabase,
    color: 'var(--color-accent)',
    bgColor: 'rgba(6, 182, 212, 0.1)',
    borderColor: 'var(--color-accent)',
    credentialUrl: null,
  },
  {
    id: 4,
    title: 'Basics of Python',
    issuer: 'Infosys',
    icon: FiBook,
    color: 'var(--color-success)',
    bgColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'var(--color-success)',
    credentialUrl: null,
  },
];

export function Certifications() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const viewportConfig = { once: false, amount: 0.1 };

  return (
    <section id="certifications" className="section certifications" aria-labelledby="certifications-title">
      <div className="container">
        <motion.div
          className="certifications__header"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="certifications__badge">Certifications</span>
          <h2 id="certifications-title" className="certifications__title">Professional Certifications</h2>
          <p className="certifications__subtitle">
            Verified credentials demonstrating proficiency in core web development technologies and programming fundamentals.
          </p>
        </motion.div>

        <motion.div
          className="certifications__grid"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.1 }}
        >
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="certifications__card"
              style={{
                '--cert-color': cert.color,
                '--cert-bg': cert.bgColor,
                '--cert-border': cert.borderColor,
              }}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.15 + index * 0.08, type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="certifications__card-inner">
                <div className="certifications__icon">
                  <cert.icon size={28} aria-hidden="true" />
                </div>

                <div className="certifications__content">
                  <h3 className="certifications__title">{cert.title}</h3>
                  <p className="certifications__issuer">{cert.issuer}</p>
                </div>

                <div className="certifications__accent-bar" aria-hidden="true" />
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certifications__credential-link"
                  aria-label={`View credential for ${cert.title}`}
                >
                  <FiExternalLink size={16} aria-hidden="true" />
                  <span>View Credential</span>
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}