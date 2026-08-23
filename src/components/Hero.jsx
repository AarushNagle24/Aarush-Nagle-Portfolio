import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Map, Sparkles, TerminalSquare } from 'lucide-react';
import { socials } from '../data/portfolio.js';
import GitHubCircleIcon from './GitHubCircleIcon.jsx';
import LinkedInBoxIcon from './LinkedInBoxIcon.jsx';

export default function Hero() {
  return (
    <section className="hero-section section-shell" id="home" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05 }}
        >
          Aarush Nagle
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          Computer Science @ UVA | Software Developer | Game Developer
        </motion.p>
        <motion.p
          className="hero-intro"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          Third-year Computer Science student at the University of Virginia.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
        >
          <a className="button button-primary" href="#projects">
            View Projects
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href={socials.github} target="_blank" rel="noreferrer">
            <GitHubCircleIcon size={18} />
            GitHub
          </a>
          <a className="button button-secondary" href={socials.linkedin} target="_blank" rel="noreferrer">
            <LinkedInBoxIcon size={18} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        aria-hidden="true"
      >
        <div className="visual-pane code-pane">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <TerminalSquare size={22} />
          <code>route = dijkstra(uva_map)</code>
        </div>
        <div className="visual-pane map-pane">
          <Map size={22} />
          <div className="map-line" />
          <span className="map-pin pin-a" />
          <span className="map-pin pin-b" />
        </div>
        <div className="visual-pane ai-pane">
          <Sparkles size={22} />
          <strong>CLIP + BLIP</strong>
          <span>smart albums</span>
        </div>
        <div className="tower-stack">
          <span />
          <span />
          <span />
          <span />
        </div>
      </motion.div>

      <a className="scroll-indicator" href="#experience" aria-label="Scroll to experience">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
