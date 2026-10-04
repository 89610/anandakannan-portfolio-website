import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiLayout, FiTool, FiDatabase, FiGlobe } from 'react-icons/fi';
import { StaggerContainer } from './ScrollReveal';
import './Skills.css';

const skillsData = {
  categories: [
    {
      id: 'frontend',
      label: 'Frontend',
      icon: FiCode,
      color: 'var(--color-primary)',
      bgColor: 'var(--color-primary-light)',
      borderColor: 'var(--color-primary)',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React.js',
        'Bootstrap 5',
      ],
    },
    {
      id: 'programming',
      label: 'Programming',
      icon: FiTerminal,
      color: 'var(--color-secondary)',
      bgColor: 'rgba(244, 63, 94, 0.1)',
      borderColor: 'var(--color-secondary)',
      skills: [
        'Python',
        'C++',
        'Java',
      ],
    },
    {
      id: 'styling',
      label: 'Styling & Layout',
      icon: FiLayout,
      color: 'var(--color-accent)',
      bgColor: 'rgba(6, 182, 212, 0.1)',
      borderColor: 'var(--color-accent)',
      skills: [
        'Flexbox',
        'CSS Grid',
        'Responsive Design',
        'Media Queries',
      ],
    },
    {
      id: 'tools',
      label: 'Tools & Platforms',
      icon: FiTool,
      color: 'var(--color-success)',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      borderColor: 'var(--color-success)',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Figma (Basic)',
      ],
    },
    {
      id: 'other',
      label: 'Other',
      icon: FiDatabase,
      color: 'var(--color-warning)',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      borderColor: 'var(--color-warning)',
      skills: [
        'SQL (Basic)',
        'REST APIs',
        'DOM Manipulation',
        'Web Speech API',
      ],
    },
  ],
};

export function Skills() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const viewportConfig = { once: false, margin: '0px' };

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="skills__badge">Technical Skills</span>
          <h2 id="skills-title" className="skills__title">Technologies & Tools</h2>
          <p className="skills__subtitle">
            Proficient in modern frontend development with a strong Computer Science foundation.
            Always expanding my toolkit to build better web experiences.
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.1 }}
        >
          {skillsData.categories.map((category, catIndex) => (
            <motion.article
              key={category.id}
              className="skills__category"
              style={{
                '--category-color': category.color,
                '--category-bg': category.bgColor,
                '--category-border': category.borderColor,
              }}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.15 + catIndex * 0.08, type: 'spring', stiffness: 300, damping: 25 }}
            >
              <header className="skills__category-header">
                <div className="skills__category-icon">
                  <category.icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="skills__category-title">{category.label}</h3>
                  <span className="skills__category-count">{category.skills.length} skills</span>
                </div>
              </header>

              <StaggerContainer
                as="ul"
                className="skills__list"
                role="list"
                delay={0.1}
                stagger={30}
                viewport={undefined}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    className="skills__item"
                    initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    whileHover={{ x: 8 }}
                  >
                    <span className="skills__item-name">{skill}</span>
                    <span className="skills__item-bar">
                      <span className="skills__item-progress" />
                    </span>
                  </motion.li>
                ))}
              </StaggerContainer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}