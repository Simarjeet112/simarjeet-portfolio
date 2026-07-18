export const profile = {
  name: 'Simarjeet Singh Sodhi',
  role: 'Backend & Distributed Systems Engineer',
  tagline: 'I design systems the way traffic engineers design highways — for the jam that hasn\u2019t happened yet.',
  location: 'Delhi NCR, India',
  email: 'simarjeet437@gmail.com',
  phone: '+91 78188 86283',
  linkedin: 'https://www.linkedin.com/in/simarjeet-singh-sodhi-385775304/',
  github: 'https://github.com/Simarjeet112',
  cta: 'Let\u2019s Build Something Exceptional',
}

export const stats = [
  { value: 2028, label: 'Graduation', suffix: '' },
  { value: 1, label: 'National Hackathon Win', suffix: '' },
  { value: 6, label: 'Systems Shipped', suffix: '+' },
  { value: 4, label: 'Certifications', suffix: '' },
]

export const about = {
  eyebrow: 'ABOUT',
  heading: 'I build the plumbing recruiters never see \u2014 until it breaks.',
  paragraphs: [
    'I\u2019m a second-year Computer Science student at GTBIT (GGSIPU, Delhi), and a National Winner at Smart India Hackathon 2025 \u2014 built on a simple obsession: how do you move data, freight, and requests through a system without anything falling over?',
    'That obsession shows up in everything I ship. LaneLink models freight matching with the same rigor a bank models transactions \u2014 optimistic locking, idempotency, zone-based routing. My other work spans Spring Boot APIs, event-driven pipelines, and interfaces sharp enough that non-technical clients trust them with real business.',
    'I\u2019m currently interning in full-stack development, actively shipping side projects in distributed systems, and starting to fold AI/ML into the stack \u2014 not as a buzzword, but as the next layer of the same problem: making systems reason well under load.',
  ],
  highlights: [
    { label: 'Currently', value: 'Full-Stack Dev Intern @ Prodigy InfoTech' },
    { label: 'Focus', value: 'Distributed Systems, Backend Architecture' },
    { label: 'Recognition', value: 'SIH 2025 \u2014 National Winner' },
    { label: 'Based in', value: 'Delhi NCR, India' },
  ],
}

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    hop: 'NODE_01',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    hop: 'NODE_02',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'SASS', 'GSAP', 'ShadCN UI'],
  },
  {
    id: 'backend',
    label: 'Backend',
    hop: 'NODE_03',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI'],
  },
  {
    id: 'databases',
    label: 'Databases',
    hop: 'NODE_04',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    id: 'platform',
    label: 'Tools & Platform',
    hop: 'NODE_05',
    skills: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'Vercel', 'Google Cloud', 'Postman', 'Figma', 'Cloudinary', 'Cloudflare', 'Firebase', 'VS Code'],
  },
  {
    id: 'core-cs',
    label: 'Core CS',
    hop: 'NODE_06',
    skills: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOPs', 'AI Fundamentals'],
  },
  {
    id: 'aiml',
    label: 'AI / ML',
    hop: 'NODE_07',
    skills: ['Generative AI', 'LLM Integration', 'Prompt Engineering', 'ElevenLabs API', 'Web Speech API'],
  },
]

export const experience = [
  {
    id: 'prodigy',
    company: 'Prodigy InfoTech',
    role: 'Full-Stack Web Development Intern',
    period: 'Jul 2025 \u2014 Aug 2025',
    location: 'Remote',
    points: [
      'Completed a 1-month, outcome-assessed internship building full-stack web features end-to-end.',
      'Worked across the stack with a lean toward backend logic, API design, and data handling.',
      'Delivered with outstanding remarks, reflected in the completion certificate on file.',
    ],
    tags: ['Full-Stack', 'Node.js', 'REST APIs'],
  },
  {
    id: 'jpmc',
    company: 'JPMorgan Chase & Co.',
    role: 'Software Engineering Job Simulation \u2014 Forage',
    period: 'Aug 2025',
    location: 'Virtual',
    points: [
      'Completed a practical software engineering simulation modeled on JPMorgan\u2019s real engineering workflows.',
      'Implemented project setup, Kafka integration, H2 database integration, and REST API controllers.',
      'Practiced the same event-driven, service-oriented patterns used in production-grade financial systems.',
    ],
    tags: ['Kafka', 'REST APIs', 'H2 / SQL'],
  },
  {
    id: 'sih',
    company: 'Smart India Hackathon 2025',
    role: 'National Winner \u2014 Software Edition',
    period: 'Grand Finale \u00b7 Dec 2025',
    location: 'Ministry of Education \u00b7 AICTE \u00b7 MoE Innovation Cell',
    points: [
      'Won at the national Grand Finale among teams from across India, judged with SBI Foundation, TCS, and Persistent as knowledge partners.',
      'Shipped a working solution under hackathon constraints \u2014 scoping, building, and defending it live to a national panel.',
    ],
    tags: ['National Award', 'Team Leadership', 'Rapid Build'],
  },
]

export const projects = [
  {
    id: 'lanelink',
    title: 'LaneLink',
    subtitle: 'Backhaul freight-matching platform',
    description:
      'A distributed-systems-grade freight platform that matches empty return-trip vehicles with backhaul loads. Domain-modeled with Spring Boot around Loads, Carriers, Shippers, and Zones, with idempotent optimistic-locking on the core Accept Load flow to keep concurrent bids consistent.',
    tags: ['Spring Boot', 'PostgreSQL', 'Docker', 'Optimistic Locking'],
    links: { github: 'https://github.com/Simarjeet112/lanelink' },
    kind: 'Portfolio \u00b7 Distributed Systems',
    status: 'ongoing',
  },
  {
    id: 'ephemeral',
    title: 'Ephemeral',
    subtitle: 'Real-time social platform',
    description:
      'A real-time social app built and deployed end-to-end, with live updates over Socket.io, a typed Express 5 API, and a Next.js front end \u2014 including hands-on debugging of CORS policy and Express 5\u2019s new wildcard routing behavior.',
    tags: ['TypeScript', 'Socket.io', 'Express 5', 'MongoDB'],
    links: {
      github: 'https://github.com/Simarjeet112/phemeral-social-app',
      live: 'https://phemeral-social-app-1.onrender.com/',
    },
    kind: 'Personal \u00b7 Shipped',
    status: 'shipped',
  },
  {
    id: 'buildtwin',
    title: 'BuildTwin AI',
    subtitle: 'Digital-twin tooling for construction workflows',
    description:
      'A Spring Boot and React application exploring digital-twin concepts for construction/build workflows, containerized with Docker for consistent local and deployed environments.',
    tags: ['Spring Boot', 'React', 'Docker'],
    links: {
      github: 'https://github.com/Simarjeet112/buildtwin-ai',
      live: 'http://buildtwin-ai-1.onrender.com/',
    },
    kind: 'Personal \u00b7 Systems',
    status: 'ongoing',
  },
]

export const certifications = [
  {
    id: 'jpmc-forage',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co. \u00d7 Forage',
    date: 'Aug 16, 2025',
    image: '/certs/jpmorgan-forage.png',
  },
  {
    id: 'sih-winner',
    title: 'Smart India Hackathon 2025 \u2014 Winner',
    issuer: 'Ministry of Education \u00b7 AICTE \u00b7 MoE Innovation Cell',
    date: 'Dec 2025',
    image: '/certs/sih-2025-winner.png',
  },
  {
    id: 'gcp-genai',
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud \u00d7 Simplilearn SkillUp',
    date: 'Nov 1, 2025',
    image: '/certs/google-cloud-genai.png',
  },
  {
    id: 'prodigy',
    title: 'Full-Stack Web Development Internship',
    issuer: 'Prodigy InfoTech',
    date: 'Jul \u2013 Aug 2025',
    image: '/certs/prodigy-infotech.png',
  },
]

export const education = [
  {
    id: 'gtbit',
    school: 'Guru Tegh Bahadur Institute of Technology (GTBIT)',
    affiliation: 'GGSIPU, Delhi',
    degree: 'B.Tech, Computer Science & Engineering',
    period: '2024 \u2014 2028 (Expected)',
    detail: 'Coursework spanning DSA, DBMS, Operating Systems, Computer Networks, Theory of Computation, and Applied Mathematics.',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]