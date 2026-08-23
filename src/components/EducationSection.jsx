import { GraduationCap } from 'lucide-react';
import { coursework, education } from '../data/portfolio.js';
import GlassCard from './GlassCard.jsx';
import ImageWithFallback from './ImageWithFallback.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function EducationSection() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading">
      <div className="section-shell">
        <SectionHeader id="education-heading" eyebrow="Education" title="Education" />
        <div className="education-grid">
          {education.map((item) => (
            <GlassCard
              key={item.school}
              className={`education-card ${item.featured ? 'education-card-featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="education-media">
                <ImageWithFallback
                  src={item.image}
                  fallback={item.image}
                  alt={item.imageAlt}
                  className="education-image"
                />
              </div>
              <div className="education-icon" aria-hidden="true">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3>{item.school}</h3>
                <p>{item.location}</p>
                <strong>{item.credential}</strong>
                <span>{item.period}</span>
                <em>GPA: {item.gpa}</em>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="coursework-section" aria-labelledby="coursework-heading">
          <SectionHeader id="coursework-heading" eyebrow="Coursework" title="Coursework" />
          <div className="coursework-grid">
            <CourseGroup title="Completed" items={coursework.completed} />
            <CourseGroup title="Current" items={coursework.current} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseGroup({ title, items }) {
  return (
    <GlassCard
      className="course-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      <div className="course-list">
        {items.map((item) => {
          const [code, ...titleParts] = item.split(' - ');
          const hasCourseCode = /^[A-Z]{2,4}\s\d{4}$/.test(code);
          const courseCode = hasCourseCode ? code : 'MATH';
          const courseTitle = hasCourseCode ? titleParts.join(' - ') : item;

          return (
            <div className="course-item" key={item}>
              <span className="course-code">{courseCode}</span>
              <span className="course-title">{courseTitle || item}</span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
