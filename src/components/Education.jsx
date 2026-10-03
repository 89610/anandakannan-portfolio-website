import { motion } from 'framer-motion';
import { FiAward, FiBook, FiCalendar } from 'react-icons/fi';
import './Education.css';

const educationData = {
  degree: 'B.Sc. Computer Science',
  period: '2023 – 2026',
  institution: 'Government Arts and Science College – Avinashi',
  location: 'Coimbatore, Tamil Nadu',
  cgpa: '8.0 / 10.0',
  coursework: [
    'Web Technologies',
    'Data Structures & Algorithms',
    'DBMS',
    'Operating Systems',
    'Object-Oriented Programming Concepts',
  ],
};

export function Education() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const viewportConfig = { once: true, margin: '0px' };

  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <motion.div
          className="education__header"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="education__badge">Education</span>
          <h2 id="education-title" className="education__title">Academic Background</h2>
          <p className="education__subtitle">
            Formal education providing a strong foundation in computer science principles and modern web development.
          </p>
        </motion.div>

        <motion.div
          className="education__timeline"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.1 }}
        >
          <div className="education__timeline-line" aria-hidden="true" />

          <motion.article
            className="education__entry"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.15, type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="education__marker">
              <div className="education__marker-dot" aria-hidden="true" />
              <div className="education__marker-ring" aria-hidden="true" />
            </div>

            <div className="education__card">
              <div className="education__card-header">
                <div className="education__icon-wrapper">
                  <FiAward size={24} aria-hidden="true" />
                </div>
                <div className="education__card-meta">
                  <h3 className="education__degree">{educationData.degree}</h3>
                  <div className="education__period">
                    <FiCalendar size={14} aria-hidden="true" />
                    <span>{educationData.period}</span>
                  </div>
                </div>
              </div>

              <div className="education__card-body">
                <div className="education__institution-group">
                  <p className="education__institution">{educationData.institution}</p>
                  <p className="education__location">
                    <span className="education__location-icon" aria-hidden="true">📍</span>
                    {educationData.location}
                  </p>
                </div>

                <div className="education__cgpa">
                  <span className="education__cgpa-label">CGPA</span>
                  <span className="education__cgpa-value">{educationData.cgpa}</span>
                </div>

                <div className="education__coursework">
                  <h4 className="education__coursework-title">Relevant Coursework</h4>
                  <ul className="education__coursework-list" role="list">
                    {educationData.coursework.map((course, index) => (
                      <motion.li
                        key={course}
                        className="education__coursework-item"
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                        animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                        whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={viewportConfig}
                        transition={{ delay: 0.25 + index * 0.05, type: 'spring', stiffness: 300, damping: 25 }}
                      >
                        <span className="education__coursework-bullet" aria-hidden="true" />
                        <span>{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}