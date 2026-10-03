import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiMic, FiLayout, FiSmartphone, FiGlobe } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Speech-Enabled Smart Recipe Recommendation System',
    year: '2026',
    description: 'Built a voice-activated recipe app using the Web Speech API. Users can speak ingredients and receive instant recommendations. Recipe results are rendered dynamically with JavaScript. Designed a fully responsive UI using CSS Flexbox. Implemented relevance-based filtering logic to rank recipes by matched ingredients. The filtering simulates a lightweight recommendation engine.',
    technologies: [
      { name: 'HTML5', icon: FiCode },
      { name: 'CSS3', icon: FiLayout },
      { name: 'JavaScript', icon: FiCode },
      { name: 'Python (Flask)', icon: FiDatabase },
      { name: 'SQLite', icon: FiDatabase },
      { name: 'Web Speech API', icon: FiMic },
    ],
    features: [
      'Voice-activated ingredient input via Web Speech API',
      'Real-time recipe recommendations with dynamic rendering',
      'Relevance-based filtering ranking recipes by matched ingredients',
      'Fully responsive design using CSS Flexbox',
      'Lightweight recommendation engine simulation',
      'Clean, accessible UI with semantic HTML',
    ],
    links: {
      github: null,
      live: 'https://smart-recipe-system.onrender.com',
    },
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'Personal Portfolio Website',
    year: '2025',
    description: 'Designed and deployed a responsive portfolio on GitHub Pages. Features smooth navigation, animated sections, and an interactive contact form. Built with Bootstrap 5 grid system and custom CSS for responsive layouts. Optimized assets for performance. Content structured around skills, projects, and certifications with recruiter-focused presentation and ATS-conscious content structure.',
    technologies: [
      { name: 'HTML5', icon: FiCode },
      { name: 'CSS3', icon: FiLayout },
      { name: 'Bootstrap 5', icon: FiLayout },
      { name: 'JavaScript', icon: FiCode },
    ],
    features: [
      'Responsive design with Bootstrap 5 grid system',
      'Smooth navigation and animated section transitions',
      'Interactive contact form with validation',
      'Custom CSS for unique visual identity',
      'Optimized assets for fast loading',
      'Recruiter-focused content structure',
      'ATS-conscious information architecture',
      'Deployed on GitHub Pages',
    ],
    links: {
      github: null,
      live: 'https://anand-portfolio-website-fawn.vercel.app',
    },
    featured: false,
  },
];

export function Projects() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const viewportConfig = { once: true, margin: '0px' };

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="projects__badge">Selected Work</span>
          <h2 id="projects-title" className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            A curated selection of projects demonstrating frontend development, API integration, and user-centric design.
            Each project reflects a focus on accessibility, performance, and clean code architecture.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {project.featured ? (
                <ProjectFeatured project={project} prefersReducedMotion={prefersReducedMotion} />
              ) : (
                <ProjectCompact project={project} prefersReducedMotion={prefersReducedMotion} />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectFeatured({ project, prefersReducedMotion }) {
  const viewportConfig = { once: true, margin: '0px' };
  return (
    <div className="projects__featured">
      <div className="projects__visual">
        <div className="projects__browser-frame">
          <div className="projects__browser-chrome">
            <div className="projects__browser-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="projects__preview projects__preview--recipe">
            <div className="projects__preview-header">
              <div className="projects__preview-avatar">
                <FiMic size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className="projects__preview-title">Voice Recipe Finder</h4>
                <p className="projects__preview-subtitle">Speak ingredients, get recipes instantly</p>
              </div>
            </div>
            <div className="projects__preview-content">
              <div className="projects__preview-input">
                <FiMic className="projects__preview-mic" size={18} aria-hidden="true" />
                <span className="projects__preview-text">"I have chicken, rice, and broccoli..."</span>
              </div>
<div className="projects__preview-results">
              <div className="projects__preview-recipe">
                <div className="projects__recipe-thumb" />
                <div className="projects__recipe-info">
                  <h5>Chicken & Broccoli Rice Bowl</h5>
                  <p>3 matched ingredients • 25 min</p>
                </div>
              </div>
              <div className="projects__preview-recipe">
                <div className="projects__recipe-thumb" />
                <div className="projects__recipe-info">
                  <h5>Lemon Garlic Chicken Rice</h5>
                  <p>3 matched ingredients • 30 min</p>
                </div>
              </div>
              <div className="projects__preview-recipe">
                <div className="projects__recipe-thumb" />
                <div className="projects__recipe-info">
                  <h5>Teriyaki Chicken Bowl</h5>
                  <p>2 matched ingredients • 20 min</p>
                </div>
              </div>
            </div>
            </div>
            <div className="projects__preview-footer">
              <span className="projects__tech-tag">Web Speech API</span>
              <span className="projects__tech-tag">Flask Backend</span>
              <span className="projects__tech-tag">SQLite</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects__info">
        <div className="projects__meta">
          <span className="projects__number">{project.number}</span>
          <span className="projects__year">{project.year}</span>
        </div>
        <h3 className="projects__project-title">{project.title}</h3>
        <p className="projects__description">{project.description}</p>

        <div className="projects__tech">
          <h4 className="projects__tech-title">Technology Stack</h4>
          <div className="projects__tech-list">
            {project.technologies.map((tech, i) => (
              <motion.button
                key={tech.name}
                className="projects__tech-tag"
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tech.icon size={14} aria-hidden="true" />
                <span>{tech.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="projects__features">
          <h4 className="projects__tech-title">Key Features</h4>
          <ul className="projects__features-list">
            {project.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.4 + i * 0.05, type: 'spring', stiffness: 300, damping: 25 }}
              >
                <span className="projects__feature-bullet" aria-hidden="true" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="projects__actions">
          {(project.links.github || project.links.live) && (
            <>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary projects__btn"
                >
                  <FiGithub size={18} aria-hidden="true" />
                  <span>View Code</span>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary projects__btn"
                >
                  <span>Live Demo</span>
                  <FiExternalLink size={18} aria-hidden="true" />
                </a>
              )}
            </>
          )}
          {!project.links.github && !project.links.live && (
            <div className="projects__no-links">
              <span className="projects__no-links-text">Repository and live demo links will be added upon deployment</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCompact({ project, prefersReducedMotion }) {
  const viewportConfig = { once: true, margin: '0px' };
  return (
    <div className="projects__compact">
      <div className="projects__visual projects__visual--compact">
        <div className="projects__browser-frame">
          <div className="projects__browser-chrome">
            <div className="projects__browser-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="projects__preview projects__preview--portfolio">
            <div className="projects__preview-header">
              <div className="projects__preview-avatar">
                <FiGlobe size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className="projects__preview-title">Portfolio Website</h4>
                <p className="projects__preview-subtitle">Responsive • Animated • Accessible</p>
              </div>
            </div>
            <div className="projects__preview-content">
              <div className="projects__preview-sections">
                <div className="projects__section-preview">
                  <div className="projects__section-bar projects__section-bar--hero" />
                  <div className="projects__section-bar projects__section-bar--about" />
                  <div className="projects__section-bar projects__section-bar--skills" />
                  <div className="projects__section-bar projects__section-bar--projects" />
                  <div className="projects__section-bar projects__section-bar--contact" />
                </div>
              </div>
              <div className="projects__preview-devices">
                <div className="projects__device projects__device--desktop">
                  <div className="projects__device-screen" />
                </div>
                <div className="projects__device projects__device--tablet">
                  <div className="projects__device-screen" />
                </div>
                <div className="projects__device projects__device--mobile">
                  <div className="projects__device-screen" />
                </div>
              </div>
            </div>
            <div className="projects__preview-footer">
              <span className="projects__tech-tag">Bootstrap 5</span>
              <span className="projects__tech-tag">GitHub Pages</span>
              <span className="projects__tech-tag">Custom CSS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects__info projects__info--compact">
        <div className="projects__meta">
          <span className="projects__number">{project.number}</span>
          <span className="projects__year">{project.year}</span>
        </div>
        <h3 className="projects__project-title">{project.title}</h3>
        <p className="projects__description">{project.description}</p>

        <div className="projects__tech">
          <h4 className="projects__tech-title">Technology Stack</h4>
          <div className="projects__tech-list">
            {project.technologies.map((tech, i) => (
              <motion.button
                key={tech.name}
                className="projects__tech-tag"
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={viewportConfig}
                transition={{ delay: 0.3 + i * 0.05, type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tech.icon size={14} aria-hidden="true" />
                <span>{tech.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="projects__features">
          <h4 className="projects__tech-title">Key Highlights</h4>
          <ul className="projects__features-list">
            {project.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: 0.4 + i * 0.05, type: 'spring', stiffness: 300, damping: 25 }}
              >
                <span className="projects__feature-bullet" aria-hidden="true" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="projects__actions">
          {(project.links.github || project.links.live) && (
            <>
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary projects__btn projects__btn--compact"
                >
                  <FiGithub size={16} aria-hidden="true" />
                  <span>View Code</span>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary projects__btn projects__btn--compact"
                >
                  <span>Live Demo</span>
                  <FiExternalLink size={16} aria-hidden="true" />
                </a>
              )}
            </>
          )}
          {!project.links.github && !project.links.live && (
            <div className="projects__no-links">
              <span className="projects__no-links-text">Repository and live demo links will be added upon deployment</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}