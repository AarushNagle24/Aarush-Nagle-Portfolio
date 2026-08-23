import { useEffect, useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects.jsx';
import Contact from './components/Contact.jsx';
import EducationSection from './components/EducationSection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import SkillsSection from './components/SkillsSection.jsx';

const getInitialTheme = () => {
  if (typeof document !== 'undefined' && document.documentElement.dataset.theme) {
    return document.documentElement.dataset.theme;
  }

  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  return 'dark';
};

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('aarush-theme', theme);
  }, [theme]);

  return (
    <>
      <BackgroundEffects />
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <section className="section about-section" id="about" aria-labelledby="about-heading">
          <div className="section-shell about-shell">
            <SectionHeader
              id="about-heading"
              eyebrow="Philosophy"
              title="Building things people actually use."
              subtitle="Aarush is a Computer Science student at the University of Virginia interested in software engineering, artificial intelligence, algorithms, game development, and building practical products."
            />
            <p className="about-copy">
              His work ranges from AI image organization and campus navigation systems to Roblox
              games used by tens of millions of players.
            </p>
          </div>
        </section>
        <EducationSection />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
