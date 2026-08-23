import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio.js';
import GlassCard from './GlassCard.jsx';
import ImageWithFallback from './ImageWithFallback.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="section-shell">
        <SectionHeader
          id="experience-heading"
          eyebrow="Experience"
          title="Experience"
          subtitle="Building software in startups and for millions of players."
        />
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }) {
  return (
    <GlassCard
      className={`experience-card experience-${experience.id} ${
        experience.featured ? 'experience-card-featured' : ''
      }`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="experience-media">
        <ImageWithFallback
          src={experience.image}
          fallback={experience.fallbackImage}
          alt={`${experience.company} visual`}
          className="experience-image"
        />
      </div>
      <div className="experience-content">
        <div className="experience-topline">
          <span>
            <BriefcaseBusiness size={16} aria-hidden="true" />
            {experience.organization}
          </span>
          <span>
            <MapPin size={16} aria-hidden="true" />
            {experience.location}
          </span>
        </div>
        <h3>{experience.company}</h3>
        <p className="role-line">
          <strong>{experience.role}</strong>
          <span>{experience.period}</span>
        </p>
        <p>{experience.description}</p>

        {experience.stats ? (
          <div className="stat-row">
            {experience.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
        ) : null}

        {experience.highlights ? (
          <ul className="check-list">
            {experience.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}

        {experience.spotlights ? (
          <div className="spotlight-grid">
            {experience.spotlights.map((spotlight) => (
              <div className="spotlight-item" key={spotlight.title}>
                <h4>{spotlight.title}</h4>
                <p>{spotlight.text}</p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="chip-row">
          {experience.technologies.map((technology) => (
            <span className="chip" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <motion.a
          className="text-link"
          href={experience.link}
          target="_blank"
          rel="noreferrer"
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.98 }}
        >
          {experience.linkLabel}
          <ArrowRight size={16} aria-hidden="true" />
        </motion.a>
      </div>
    </GlassCard>
  );
}
