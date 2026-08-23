export default function LinkedInBoxIcon({ size = 18, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="3.25" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="8" r="1.35" fill="currentColor" />
      <path d="M6.95 11h2.1v6h-2.1v-6Z" fill="currentColor" />
      <path
        d="M11 11h2.02v.84c.39-.59 1.04-1.02 2.02-1.02 1.55 0 2.61 1.02 2.61 3.16V17h-2.1v-2.74c0-.97-.34-1.46-1.08-1.46-.84 0-1.37.58-1.37 1.58V17H11v-6Z"
        fill="currentColor"
      />
    </svg>
  );
}
