import { motion } from 'framer-motion';
import { FiBook, FiTarget, FiCode } from 'react-icons/fi';
import { getRevealProps, getStaggerProps } from './ScrollReveal';
import './About.css';

const aboutData = {
  summary: "Aspiring Frontend Developer with a strong foundation in Computer Science and a passion for building responsive, accessible, and user-centric web applications. Proficient in HTML5, CSS3, JavaScript (ES6+), React.js, and modern styling techniques including Flexbox, CSS Grid, and Bootstrap 5. Experienced with Git/GitHub version control, VS Code, and Figma for UI design. Committed to writing clean, maintainable code and continuously learning emerging web technologies.",
  education: {
    degree: "B.Sc. Computer Science",
    period: "2023–2026",
    institution: "Government Arts and Science College – Avinashi",
    location: "Coimbatore, Tamil Nadu",
    cgpa: "8.0 / 10.0",
  },
  coursework: [
    "Web Technologies",
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
    "Object-Oriented Programming Concepts",
  ],
  highlights: [
    { icon: FiCode, title: "Frontend Focus", desc: "Building responsive, accessible web interfaces with React.js and modern CSS" },
    { icon: FiBook, title: "CS Foundation", desc: "Strong grasp of DSA, DBMS, OS, and OOP concepts from B.Sc. Computer Science" },
    { icon: FiTarget, title: "Continuous Learning", desc: "Actively exploring emerging web technologies and best practices" },
  ],
};

export function About() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const viewportConfig = { once: false, amount: 0.1 };

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <motion.div
          className="about__header"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <span className="about__badge">About Me</span>
          <h2 id="about-title" className="about__title">Get to Know Me</h2>
        </motion.div>

        <div className="about__grid">
          <motion.article
            className="about__content"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
          >
            <motion.p
              className="about__text-block"
              {...getRevealProps({ delay: 0.2, prefersReducedMotion })}
            >
              {aboutData.summary}
            </motion.p>

            <div className="about__highlights">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  className="about__highlight-card"
                  {...getStaggerProps({
                    delay: 0.3,
                    stagger: 100,
                    index,
                    prefersReducedMotion,
                  })}
                >
                  <div className="about__highlight-icon">
                    <highlight.icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="about__highlight-title">{highlight.title}</h3>
                  <p className="about__highlight-desc">{highlight.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.article>

          <motion.aside
            className="about__sidebar"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.35, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.div
              className="about__card about__card--education"
              {...getRevealProps({ delay: 0.1, prefersReducedMotion })}
            >
              <div className="about__card-header">
                <div className="about__card-icon">
                  <FiBook size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="about__card-title">Education</h3>
                  <p className="about__card-subtitle">{aboutData.education.period}</p>
                </div>
              </div>
              <div className="about__card-body">
                <h4 className="about__degree">{aboutData.education.degree}</h4>
                <p className="about__institution">{aboutData.education.institution}</p>
                <p className="about__location">{aboutData.education.location}</p>
                <div className="about__cgpa">
                  <span className="about__cgpa-label">CGPA:</span>
                  <span className="about__cgpa-value">{aboutData.education.cgpa}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="about__card about__card--coursework"
              {...getRevealProps({ delay: 0.2, prefersReducedMotion })}
            >
              <div className="about__card-header">
                <div className="about__card-icon">
                  <FiBook size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="about__card-title">Relevant Coursework</h3>
                  <p className="about__card-subtitle">Core CS Subjects</p>
                </div>
              </div>
              <div className="about__card-body">
                <ul className="about__coursework-list">
                  {aboutData.coursework.map((course, index) => (
                    <motion.li
                      key={course}
                      className="about__coursework-item"
                      {...getStaggerProps({
                        delay: 0.1,
                        stagger: 50,
                        index,
                        prefersReducedMotion,
                      })}
                    >
                      <span className="about__coursework-bullet" aria-hidden="true" />
                      <span>{course}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}