import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { projects, socials } from '../data/portfolio.js';
import GitHubCircleIcon from './GitHubCircleIcon.jsx';
import LinkedInBoxIcon from './LinkedInBoxIcon.jsx';

const heroAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

const heroTiles = [
  { className: 'hero-thumb-tower', src: projects[0].image, fallback: projects[0].fallbackImage },
  { className: 'hero-thumb-uva', src: projects[1].image, fallback: projects[1].fallbackImage },
  { className: 'hero-thumb-auto', src: projects[2].image, fallback: projects[2].fallbackImage },
  {
    className: 'hero-thumb-code',
    src: heroAsset('images/hello-world-code.svg'),
    fallback: heroAsset('images/hello-world-code.svg'),
  },
  {
    className: 'hero-thumb-game',
    src: heroAsset('images/game-development.svg'),
    fallback: heroAsset('images/game-development.svg'),
  },
];

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
        {heroTiles.map((tile) => (
          <div className={`hero-float ${tile.className}`} key={tile.className}>
            <img
              src={tile.src}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = tile.fallback;
              }}
              alt=""
              loading="eager"
            />
          </div>
        ))}
      </motion.div>

      <a className="scroll-indicator" href="#experience" aria-label="Scroll to experience">
        <ArrowDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
