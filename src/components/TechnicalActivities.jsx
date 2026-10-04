import { motion } from 'framer-motion';
import { FiTerminal, FiBookOpen, FiCheckCircle, FiTarget } from 'react-icons/fi';
import { StaggerContainer } from './ScrollReveal';
import './TechnicalActivities.css';

const activities = [
  {
    id: 1,
    title: 'Competitive Programming Practice',
    description: 'Regularly solving coding problems on LeetCode and CodeChef to strengthen problem-solving skills and algorithmic thinking.',
    icon: FiTerminal,
    color: 'var(--color-primary)',
    bgColor: 'var(--color-primary-light)',
    borderColor: 'var(--color-primary)',
    highlights: [
      'Data Structures & Algorithms',
      'Problem-Solving Practice',
    ],
  },
  {
    id: 2,
    title: 'Responsive Web Design Certification',
    description: 'Completing Responsive Web Design course through FreeCodeCamp\'s hands-on learning program.',
    icon: FiBookOpen,
    color: 'var(--color-secondary)',
    bgColor: 'rgba(244, 63, 94, 0.1)',
    borderColor: 'var(--color-secondary)',
    highlights: [
      'HTML5 & CSS3',
      'Flexbox & CSS Grid',
      'Responsive Design',
    ],
  },
];

export function TechnicalActivities() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const viewportConfig = { once: false, margin: '0px' };

  return (
    <section id="technical-activities" className="section technical-activities" aria-labelledby="technical-activities-title">
      <div className="container">
        <motion.div
          className="technical-activities__header"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="technical-activities__badge">Technical Activities</span>
          <h2 id="technical-activities-title" className="technical-activities__title">Ongoing Learning</h2>
          <p className="technical-activities__subtitle">
            Continuous skill development through structured practice and guided coursework.
          </p>
        </motion.div>

        <motion.div
          className="technical-activities__grid"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={prefersReducedMotion ? {} : { opacity: 1 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={viewportConfig}
          transition={{ delay: 0.1 }}
        >
          {activities.map((activity, index) => (
            <motion.article
              key={activity.id}
              className="technical-activities__card"
              style={{
                '--activity-color': activity.color,
                '--activity-bg': activity.bgColor,
                '--activity-border': activity.borderColor,
              }}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.15 + index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="technical-activities__card-header">
                <div className="technical-activities__icon-wrapper">
                  <activity.icon size={26} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="technical-activities__activity-title">{activity.title}</h3>
                </div>
              </div>

              <p className="technical-activities__description">{activity.description}</p>

              <div className="technical-activities__highlights">
                <h4 className="technical-activities__highlights-title">Focus Areas</h4>
                <StaggerContainer
                  as="ul"
                  className="technical-activities__highlights-list"
                  role="list"
                  delay={0.25}
                  stagger={40}
                  viewport={undefined}
                >
                  {activity.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={highlight}
                      className="technical-activities__highlight-item"
                      initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <FiCheckCircle size={14} className="technical-activities__check" aria-hidden="true" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </StaggerContainer>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}