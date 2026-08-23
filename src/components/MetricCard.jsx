import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const formatter = new Intl.NumberFormat('en-US');

export default function MetricCard({ metric, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reducedMotion = useReducedMotion();
  const [hasStarted, setHasStarted] = useState(false);
  const [displayValue, setDisplayValue] = useState(reducedMotion ? metric.value : 0);

  useEffect(() => {
    if (inView) {
      setHasStarted(true);
    }
  }, [inView]);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setHasStarted(true);
      }
    }, 120);

    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!hasStarted) return undefined;

    if (reducedMotion) {
      setDisplayValue(metric.value);
      return undefined;
    }

    let frameId;
    const startTime = performance.now();
    const duration = 950;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(metric.value * eased);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, metric.value, reducedMotion]);

  const text =
    metric.decimals != null
      ? displayValue.toFixed(metric.decimals)
      : formatter.format(Math.round(displayValue));

  return (
    <motion.div
      ref={ref}
      className="metric-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <strong>
        {text}
        {metric.suffix}
      </strong>
      <span>{metric.label}</span>
    </motion.div>
  );
}
