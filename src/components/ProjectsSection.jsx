import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolio.js';
import GlassCard from './GlassCard.jsx';
import ImageWithFallback from './ImageWithFallback.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function ProjectsSection() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
      <div className="section-shell">
        <SectionHeader
          id="projects-heading"
          eyebrow="Selected Projects"
          title="Selected Projects"
        />
        <div className="project-layout">
          <ProjectCard project={featuredProject} featured />
          <div className="project-grid">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <GlassCard
      className={`project-card ${featured ? 'project-card-featured' : ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.58 }}
      whileHover={{ y: -5 }}
    >
      <div className="project-media">
        <ImageWithFallback
          src={project.image}
          fallback={project.fallbackImage}
          alt={project.alt}
          className="project-image"
          loading={featured ? 'eager' : 'lazy'}
        />
      </div>
      <div className="project-content">
        <div className="project-kicker">
          <span>{project.category}</span>
          <span>{project.date}</span>
        </div>
        <h3>{project.title}</h3>
        {project.metrics?.length ? (
          <div className="project-metrics">
            {project.metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>
        ) : null}
        <p>{project.description}</p>
        <div className="chip-row">
          {project.technologies.map((technology) => (
            <span className="chip" key={technology}>
              {technology}
            </span>
          ))}
        </div>
        <ul className="feature-list">
          {project.features.slice(0, featured ? 9 : 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="project-actions">
          {project.buttons.map((button, index) => (
            <motion.a
              key={button.href}
              className={`button ${index === 0 ? 'button-primary' : 'button-secondary'}`}
              href={button.href}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.98 }}
            >
              {button.label}
              {index === 0 ? <ExternalLink size={17} aria-hidden="true" /> : <ArrowRight size={17} aria-hidden="true" />}
            </motion.a>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
