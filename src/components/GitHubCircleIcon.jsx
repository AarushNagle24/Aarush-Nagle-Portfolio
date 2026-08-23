import { Github } from 'lucide-react';

export default function GitHubCircleIcon({ size = 18 }) {
  return (
    <span
      className="github-circle-icon"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Github size={Math.round(size * 0.68)} />
    </span>
  );
}
