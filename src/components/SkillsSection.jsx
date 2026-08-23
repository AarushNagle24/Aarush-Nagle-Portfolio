import { Code2, Database, GitBranch, Map } from 'lucide-react';
import { skillGroups } from '../data/portfolio.js';
import GlassCard from './GlassCard.jsx';
import SectionHeader from './SectionHeader.jsx';

const icons = {
  Languages: Code2,
  'AI / Data': Database,
  Development: GitBranch,
  'Mapping / Visualization': Map,
};

export default function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="section-shell">
        <SectionHeader id="skills-heading" eyebrow="Skills" title="Tools I Build With" />
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = icons[group.title] || Code2;
            return (
              <GlassCard
                key={group.title}
                className="skill-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
              >
                <div className="skill-heading">
                  <Icon size={21} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
