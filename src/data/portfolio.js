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
  { label: 'Coursework', href: '#coursework' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const experiences = [
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
        text: 'Developed a Streamlit/Pandas budgeting dashboard for commuters with per-user expense logs and category spending charts',
      },
      {
        title: 'AI Training Platform',
        text: 'Built a Streamlit/SQLite employee AI training portal with bcrypt hashing, course join codes, quizzes, and admin progress tracking',
      },
      {
        title: 'Drupal Mapping Tool',
        text: 'Built a reusable Drupal/PHP module with Leaflet maps and a GeoJSON API for Bankcra’s bank/credit union finder and Press Forward’s local media finder; imported 50,000+ locations from CSV files into searchable maps with category and radius filters',
      },
    ],
    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'SQLite',
      'Drupal',
      'PHP',
      'Leaflet',
      'GeoJSON',
    ],
  },
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
      'Founded XON Studios, an independent Roblox game studio whose titles have reached more than 50 million players worldwide',
    highlights: [
      'Developed and maintained Roblox games in Lua for gameplay systems, UI development, debugging, and performance optimization',
      'Managed advertising campaigns and partnerships while hiring and coordinating contractors, including programmers and artists',
      "Earned Roblox’s Black Crown of O’s after surpassing 1 million monthly active users across the studio’s titles",
    ],
    stats: ['50M+ Players', '1M+ Monthly Active Users', 'Black Crown of O’s'],
    technologies: [
      'Lua',
      'Roblox Studio',
      'Game Development',
      'UI Development',
      'Performance Optimization',
    ],
    featured: true,
  },
];

export const projects = [
  {
    id: 'tower-of-easy',
    title: 'Tower of Easy',
    category: 'Roblox Game',
    date: 'March 2021 - Present',
    image: asset('images/tower-of-easy.svg'),
    fallbackImage: asset('images/tower-of-easy.svg'),
    alt: 'Tower of Easy Roblox game thumbnail',
    live: 'https://www.roblox.com/games/6496227852/Tower-of-Easy',
    features: [
      'Built and launched a Roblox platformer reaching 180M+ plays, 50M+ unique users, and more than 3,500 peak concurrent players',
      'Developed Lua systems for checkpoints, randomized levels, in-game shops, music playback and custom interactive player interfaces',
      'Fixed gameplay bugs, optimized performance, and shipped gameplay improvements based on user and tester feedback post-launch',
    ],
    technologies: ['Lua', 'Roblox Studio', 'Game Development'],
    buttons: [{ label: 'Play Game', href: 'https://www.roblox.com/games/6496227852/Tower-of-Easy' }],
    featured: true,
  },
  {
    id: 'uva-navigation',
    title: 'UVA Campus Navigation App',
    category: 'Mapping & Routing App',
    date: 'July 2026 - August 2026',
    image: asset('images/uva-navigation.svg'),
    fallbackImage: asset('images/uva-navigation.svg'),
    alt: 'Illustrated UVA campus navigation map with route pins',
    features: [
      'Developed a Python/Streamlit campus navigation app using Folium and OpenStreetMap data to map 70+ UVA campus locations',
      'Implemented bidirectional Dijkstra on OpenStreetMap pedestrian graphs to compute shortest paths, distances, and walking times',
      'Expanded walking routes through parking areas and unpaved terrain while caching map data for 7 days to handle API quotas',
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
    date: 'July 2026 - August 2026',
    image: asset('images/auto-album.svg'),
    fallbackImage: asset('images/auto-album.svg'),
    alt: 'Illustrated AI photo organization workflow',
    features: [
      'Built a local AI photo organizer with Streamlit, PyTorch, BLIP captions and CLIP embeddings to automate uploaded image sorting',
      'Implemented CLIP-based cosine similarity clustering and dynamic folder naming to automatically group related photos by content',
      'Implemented rule-based filters for unreliable BLIP captions, preventing inaccurate AI-generated filenames and folder assignments',
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
  ],
};

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'Lua', 'SQL', 'C'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Streamlit', 'Pandas', 'PyTorch', 'Folium', 'Leaflet'],
  },
  {
    title: 'Databases & Platforms',
    items: ['SQLite', 'Drupal', 'Roblox Studio', 'OpenStreetMap'],
  },
  {
    title: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Docker', 'BLIP', 'CLIP', 'Autodesk Inventor', 'Agile/Scrum'],
  },
];
