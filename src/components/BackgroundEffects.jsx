import { useEffect } from 'react';

export default function BackgroundEffects() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canHover || reducedMotion) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="background-effects" aria-hidden="true">
      <div className="ambient-gradient ambient-gradient-a" />
      <div className="ambient-gradient ambient-gradient-b" />
      <div className="cursor-glow" />
      <div className="noise-layer" />
    </div>
  );
}
