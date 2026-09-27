import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiBarChart2, FiCalendar } from 'react-icons/fi';
import './TechnicalEvents.css';

const events = [
  {
    id: 1,
    category: 'Hackathon',
    title: 'Project Based Learning',
    organization: 'ICT Academy',
    icon: FiCode,
    color: 'var(--color-primary)',
    bgColor: 'var(--color-primary-light)',
    borderColor: 'var(--color-primary)',
  },
  {
    id: 2,
    category: 'IoT Workshop',
    title: 'Participant & Certificate Awardee',
    organization: 'Government Arts and Science College, Avinashi',
    icon: FiCpu,
    color: 'var(--color-secondary)',
    bgColor: 'rgba(244, 63, 94, 0.1)',
    borderColor: 'var(--color-secondary)',
  },
  {
    id: 3,
    category: 'Data Science and AI Workshop',
    title: 'Participant',
    organization: 'Dhaaps',
    icon: FiBarChart2,
    color: 'var(--color-accent)',
    bgColor: 'rgba(6, 182, 212, 0.1)',
    borderColor: 'var(--color-accent)',
  },
];

export function TechnicalEvents() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section id="technical-events" className="section technical-events" aria-labelledby="technical-events-title">
      <div className="container">
        <motion.div
          className="technical-events__header"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="technical-events__badge">Technical Events</span>
          <h2 id="technical-events-title" className="technical-events__title">Technical Events</h2>
          <p className="technical-events__subtitle">
            Participation in hackathons, workshops, and technical programs to expand practical skills and industry exposure.
          </p>
        </motion.div>

        <motion.div
          className="technical-events__timeline"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
        >
          <div className="technical-events__timeline-line" aria-hidden="true" />

          {events.map((event, index) => (
            <motion.article
              key={event.id}
              className="technical-events__entry"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="technical-events__marker">
                <div className="technical-events__marker-dot" aria-hidden="true" />
                <div className="technical-events__marker-ring" aria-hidden="true" />
              </div>

              <div
                className="technical-events__card"
                style={{
                  '--event-color': event.color,
                  '--event-bg': event.bgColor,
                  '--event-border': event.borderColor,
                }}
              >
                <div className="technical-events__card-header">
                  <div className="technical-events__icon-wrapper">
                    <event.icon size={22} aria-hidden="true" />
                  </div>
                  <div className="technical-events__card-meta">
                    <span className="technical-events__category">{event.category}</span>
                    <h3 className="technical-events__event-title">{event.title}</h3>
                  </div>
                </div>

                <div className="technical-events__card-body">
                  <p className="technical-events__organization">{event.organization}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}