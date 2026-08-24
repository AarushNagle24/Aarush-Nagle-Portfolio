const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const socials = {
  github: 'https://github.com/AarushNagle24',
  linkedin: 'https://www.linkedin.com/in/aarush-nagle',
  email: 'mailto:aarushnagle24@gmail.com',
  phone: '(703) 589-0070',
};

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
];

export const experiences = [
  {
    id: 'xon-studios',
    company: 'XON Studios',
    organization: 'Roblox Game Studio',
    location: 'Vienna, VA',
    role: 'Owner & Lead Developer',
    period: 'March 2021 - Present',
    link: 'https://www.roblox.com/communities/9895654/XON-Studios',
    linkLabel: 'View Roblox Community',
    image: asset('images/xon-studios.png'),
    fallbackImage: asset('images/xon-fallback.svg'),
    description:
      'Founded XON Studios, an independent Roblox development studio whose games have reached 190+ million plays and more than 50 million players worldwide.',
    highlights: [
      'Developed and maintained Roblox games using Lua scripting, UI design, bug fixes, performance optimization, and content updates.',
      'Managed advertising campaigns and partnerships.',
      'Hired and coordinated programmers and artists.',
      "Reached 190+ million total plays across the studio's titles.",
    ],
    stats: ['50M+ Players', '1M+ Monthly Active Users Milestone', '190+ million plays'],
    technologies: [
      'Lua',
      'Roblox Studio',
      'Game Development',
      'UI Development',
      'Performance Optimization',
    ],
    featured: true,
  },
  {
    id: 'gavel-quill',
    company: 'Gavel and Quill',
    organization: 'Startup Incubator',
    location: 'Remote',
    role: 'Software Developer Intern',
    period: 'May - June 2026',
    link: 'https://varshajagadeesh.github.io/Aardvarks_portfolio/',
    linkLabel: 'View Internship Portfolio',
    image: asset('images/gavel-quill.png'),
    fallbackImage: asset('images/gavel-quill.svg'),
    description: 'Worked on multiple software projects during a startup incubator internship.',
    spotlights: [
      {
        title: 'Budget Dashboard',
        text: 'Built a Streamlit/Pandas budgeting dashboard for expense logging, spending trends, and category comparisons.',
      },
      {
        title: 'AI Training Platform',
        text: 'Built a Streamlit/SQLite workplace AI training platform with custom employee courses, lesson tracking, and an admin dashboard.',
      },
      {
        title: 'Drupal Mapping Tool',
        text: 'Built a reusable Drupal mapping module that imported 50,000+ CSV locations, displayed searchable Leaflet maps, and used dynamic category filters.',
      },
    ],
    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'SQLite',
      'Drupal',
      'Leaflet',
      'OpenStreetMap',
    ],
  },
];

export const projects = [
  {
    id: 'tower-of-easy',
    title: 'Tower of Easy',
    category: 'Roblox Game',
    date: 'Live March 2021 - Present',
    image: asset('images/tower-of-easy.png'),
    fallbackImage: asset('images/tower-of-easy.png'),
    alt: 'Tower of Easy Roblox game thumbnail',
    live: 'https://www.roblox.com/games/6496227852/Tower-of-Easy',
    features: [
      'Built and launched a Roblox platformer reaching 180M+ plays, 50M+ unique users, and more than 3,300 peak concurrent players.',
      'Developed Lua systems for checkpoints, randomized levels, in-game shops, a music player, player GUIs and core gameplay features.',
      'Maintained the game after launch through updates, bug fixes, tester feedback, and community-driven gameplay improvements.',
    ],
    technologies: ['Lua', 'Roblox Studio', 'Game Development'],
    buttons: [{ label: 'Play Game', href: 'https://www.roblox.com/games/6496227852/Tower-of-Easy' }],
    featured: true,
  },
  {
    id: 'uva-navigation',
    title: 'UVA Campus Navigation App',
    category: 'Mapping & Routing App',
    date: 'Live July 2026 - August 2026',
    image: asset('images/uva-navigation.svg'),
    fallbackImage: asset('images/uva-navigation.svg'),
    alt: 'Illustrated UVA campus navigation map with route pins',
    features: [
      'Built an interactive UVA campus map with Python, Streamlit, Folium, and OpenStreetMap for walking route lookup across campus.',
      'Implemented pedestrian shortest-path routing with a custom bidirectional Dijkstra algorithm over OpenStreetMap campus data.',
      'Built routing UI with 70+ UVA building dropdowns, 5-second animated search playback, and walking distance/time estimates.',
    ],
    technologies: ['Python', 'Streamlit', 'Folium', 'OpenStreetMap', 'Dijkstra'],
    buttons: [
      { label: 'Live Demo', href: 'https://uva-campus-navigation-app.streamlit.app/' },
      { label: 'GitHub', href: 'https://github.com/AarushNagle24/Campus-Navigation-App' },
    ],
  },
  {
    id: 'auto-album',
    title: 'Auto Album',
    category: 'Computer Vision Project',
    date: 'Live July 2026 - August 2026',
    image: asset('images/auto-album.svg'),
    fallbackImage: asset('images/auto-album.svg'),
    alt: 'Illustrated AI photo organization workflow',
    features: [
      'Built a local AI image organization app with Streamlit, PyTorch, BLIP captions, and CLIP embeddings to classify uploaded images.',
      'Implemented AI-generated file names, smart folder grouping, similarity-based sorting, and ZIP export for organized image batches.',
      'Improved image-sorting accuracy with noisy-label filtering, similarity thresholds, fallback categories, and 31 automated tests.',
    ],
    technologies: ['Python', 'Streamlit', 'PyTorch', 'BLIP', 'CLIP'],
    buttons: [
      { label: 'Live Demo', href: 'https://share.streamlit.io/app/auto-album/' },
      { label: 'GitHub', href: 'https://github.com/AarushNagle24/Auto-Album' },
    ],
  },
];

export const education = [
  {
    school: 'University of Virginia',
    location: 'Charlottesville, VA',
    credential: 'B.S. in Computer Science',
    period: 'August 2024 - May 2028',
    gpa: '3.92 / 4.0',
    image: asset('images/uva-logo.jpg'),
    imageAlt: 'University of Virginia logo',
    featured: true,
  },
  {
    school: 'Oakton High School',
    location: 'Vienna, VA',
    credential: 'Advanced Diploma',
    period: 'August 2020 - June 2024',
    gpa: '4.47',
    image: asset('images/oakton-logo.png'),
    imageAlt: 'Oakton High School seal',
  },
];

export const coursework = {
  completed: [
    'CS 2100 - Data Structures & Algorithms 1',
    'CS 3100 - Data Structures & Algorithms 2',
    'CS 2120 - Discrete Math & Theory 1',
    'CS 2130 - Computer Systems & Organization 1',
    'CS 3130 - Computer Systems & Organization 2',
    'CS 3140 - Software Development Essentials',
    'CS 3240 - Software Engineering',
    'CS 3710 - Introduction to Cybersecurity',
    'CS 4740 - Cloud Computing',
    'Multivariable Calculus - Dual Enrollment',
    'Linear Algebra - Dual Enrollment',
  ],
  current: [
    'CS 4771 - Reinforcement Learning',
    'CS 3120 - Discrete Math & Theory 2',
    'CS 4710 - Artificial Intelligence',
    'CS 4774 - Machine Learning',
  ],
};

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'Lua'],
  },
  {
    title: 'AI / Data',
    items: ['PyTorch', 'BLIP', 'CLIP', 'Pandas', 'SQLite'],
  },
  {
    title: 'Development',
    items: ['Git', 'VS Code', 'Agile / Scrum', 'Autodesk Inventor', 'Roblox Studio'],
  },
  {
    title: 'Mapping / Visualization',
    items: ['Streamlit', 'Leaflet', 'OpenStreetMap'],
  },
];
