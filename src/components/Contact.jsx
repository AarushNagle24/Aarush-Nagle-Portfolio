import { Github, Linkedin, Mail } from 'lucide-react';
import { socials } from '../data/portfolio.js';
import GlassCard from './GlassCard.jsx';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="section-shell">
        <GlassCard
          className="contact-card"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Let's build something useful.</h2>
          <p>
            For software engineering opportunities, collaboration, or questions about my projects,
            feel free to reach out.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href={socials.email}>
              <Mail size={18} aria-hidden="true" />
              Email Me
            </a>
            <a className="button button-secondary" href={socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button button-secondary" href={socials.github} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
          <p className="phone-line">{socials.phone}</p>
        </GlassCard>
      </div>
    </section>
  );
}
