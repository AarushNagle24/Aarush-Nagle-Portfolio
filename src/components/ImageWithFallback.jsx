import { useState } from 'react';

export default function ImageWithFallback({
  src,
  fallback,
  alt,
  className = '',
  loading = 'lazy',
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
      {...props}
    />
  );
}
