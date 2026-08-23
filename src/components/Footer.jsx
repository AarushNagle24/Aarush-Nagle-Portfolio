import { Github } from 'lucide-react';
import { socials } from '../data/portfolio.js';
import LinkedInBoxIcon from './LinkedInBoxIcon.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <p>&copy; 2026 Aarush Nagle</p>
        <p>Built with React</p>
        <div className="footer-links">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} aria-hidden="true" />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInBoxIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
