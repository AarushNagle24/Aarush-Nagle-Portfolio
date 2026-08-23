import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', as: Element = motion.article, ...props }) {
  const handlePointerMove = (event) => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
  };

  return (
    <Element className={`glass-card ${className}`} onPointerMove={handlePointerMove} {...props}>
      {children}
    </Element>
  );
}
