import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const contactInfo = {
  email: 'anandakannan50@gmail.com',
  phone: '+91-9360377133',
  location: 'Coimbatore, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/anandakannans',
  github: 'https://github.com/89610',
};

const socialLinks = [
  { name: 'GitHub', href: contactInfo.github, icon: FiGithub, label: 'View GitHub Profile' },
  { name: 'LinkedIn', href: contactInfo.linkedin, icon: FiLinkedin, label: 'View LinkedIn Profile' },
  { name: 'Email', href: `mailto:${contactInfo.email}`, icon: FiMail, label: 'Send Email' },
  { name: 'Phone', href: `tel:${contactInfo.phone.replace(/\s/g, '')}`, icon: FiPhone, label: 'Call Phone' },
];

export function Contact() {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success, error

  const viewportConfig = { once: true, margin: '0px' };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus('submitting');

    // Create mailto link as fallback since no backend is configured
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    // Simulate async submission
    setTimeout(() => {
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) return;
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    } else if (name === 'message' && value.trim().length < 10) {
      setErrors(prev => ({ ...prev, message: 'Message must be at least 10 characters' }));
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact__background" aria-hidden="true">
        <div className="contact__gradient contact__gradient--1" />
        <div className="contact__gradient contact__gradient--2" />
      </div>

      <div className="container">
        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -40 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="contact__badge">Get In Touch</span>
            <h2 id="contact-title" className="contact__title">Let&apos;s build something useful.</h2>
            <p className="contact__subtitle">
              Have an opportunity, project, internship, or collaboration in mind? Let&apos;s connect.
            </p>

            <div className="contact__details">
              {[
                { icon: FiMail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: FiPhone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
                { icon: FiMapPin, label: 'Location', value: contactInfo.location, href: null },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="contact__detail-item"
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="contact__detail-icon">
                    <item.icon size={20} aria-hidden="true" />
                  </div>
                  <div className="contact__detail-content">
                    <span className="contact__detail-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__detail-value">{item.value}</a>
                    ) : (
                      <span className="contact__detail-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="contact__social" role="list" aria-label="Social links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact__social-link"
                    aria-label={social.label}
                    initial={prefersReducedMotion ? {} : { opacity: 0, y: 20, scale: 0.9 }}
                    animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                    whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                    viewport={viewportConfig}
                    transition={{ delay: 0.6 + index * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={22} aria-hidden="true" />
                    <span className="contact__social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-wrapper"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            <div className="contact__form-card">
              <h3 className="contact__form-title">Send a Message</h3>

              {submitStatus === 'success' && (
                <motion.div
                  className="contact__success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="contact__success-icon">
                    <FiSend size={24} aria-hidden="true" />
                  </div>
                  <h4>Message Ready to Send</h4>
                  <p>Your default email client will open with the composed message.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="contact__form" noValidate>
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name" className="contact__label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="contact__error" role="alert">{errors.name}</span>
                    )}
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="email" className="contact__label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span id="email-error" className="contact__error" role="alert">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="contact__form-group">
                  <label htmlFor="subject" className="contact__label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="What's this about?"
                    required
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <span id="subject-error" className="contact__error" role="alert">{errors.subject}</span>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="message" className="contact__label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`contact__textarea ${errors.message ? 'contact__textarea--error' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    rows={5}
                    required
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                  />
                  {errors.message && (
                    <span id="message-error" className="contact__error" role="alert">{errors.message}</span>
                  )}
                  {!errors.message && (
                    <span id="message-hint" className="contact__hint">Minimum 10 characters</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={submitStatus === 'submitting'}
                  aria-busy={submitStatus === 'submitting'}
                >
                  {submitStatus === 'submitting' ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend size={18} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}