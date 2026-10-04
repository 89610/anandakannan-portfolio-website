import { motion } from 'framer-motion';
import { FiAward, FiBook, FiCalendar } from 'react-icons/fi';
import { getRevealProps, getStaggerProps } from './ScrollReveal';
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

  const viewportConfig = { once: false, amount: 0.1 };

  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <motion.div
          className="education__header"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.35, ease: 'easeOut' }}
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
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="education__timeline-line" aria-hidden="true" />

          <motion.article
            className="education__entry"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ delay: 0.15, duration: 0.35, ease: 'easeOut' }}
          >
            <div className="education__marker">
              <div className="education__marker-dot" aria-hidden="true" />
              <div className="education__marker-ring" aria-hidden="true" />
            </div>

            <motion.div
              className="education__card"
              {...getRevealProps({ delay: 0.1, prefersReducedMotion })}
            >
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
                        {...getStaggerProps({
                          delay: 0.2,
                          stagger: 50,
                          index,
                          prefersReducedMotion,
                        })}
                      >
                        <span className="education__coursework-bullet" aria-hidden="true" />
                        <span>{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}