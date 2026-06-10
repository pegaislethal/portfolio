export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tags: string[];
  type: "job" | "internship" | "freelance";
}

export interface Project {
  id: string;
  title: string;
  category: "Frontend" | "Backend" | "Fullstack" | "AI/ML" | "Mobile";
  summary: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeUrl?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export const PROFILE = {
  name: "Rohit Ghimire",
  title: "Backend-Focused Full-Stack Developer",
  subTitle: "Building robust APIs, scalable backend architectures, and lightweight, responsive client-side applications.",
  experienceYears: 2,
  projectsCount: 10,
  technologiesCount: 12,
  certificationsCount: 2,
  socials: {
    github: "https://github.com/pegaislethal",
    linkedin: "https://www.linkedin.com/in/rohit-ghimire-abb71222b/",
    email: "ghimirerohit21@gmail.com",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Proficiencies (High)",
    skills: [
      { name: "Node.js", level: 95, icon: "Node" },
      { name: "Express.js", level: 92, icon: "Express" },
      { name: "Python", level: 90, icon: "Python" },
      { name: "Django", level: 90, icon: "Django" },
      { name: "MongoDB", level: 88, icon: "Mongo" },
      { name: "SQL (PostgreSQL/MySQL)", level: 85, icon: "SQL" },
      { name: "JavaScript", level: 90, icon: "JS" },
      { name: "Git & GitHub", level: 90, icon: "Git" },
    ],
  },
  {
    title: "Secondary & Supporting (Moderate)",
    skills: [
      { name: "React / Next.js", level: 80, icon: "React" },
      { name: "React Native (Mobile)", level: 78, icon: "Mobile" },
      { name: "REST APIs", level: 85, icon: "API" },
      { name: "Postman", level: 80, icon: "Postman" },
    ],
  },
  {
    title: "Foundational Knowledge (Basic)",
    skills: [
      { name: "AI & Machine Learning Basics", level: 45, icon: "AI" },
    ],
  },
];

export const TIMELINE_EXPERIENCE: Experience[] = [
  {
    company: "Freelance Software Engineer",
    role: "Backend-Focused Developer",
    period: "2024 - Present",
    description: "Consult with local and remote clients in Kathmandu to build robust backend servers, clean databases, and dynamic web applications.",
    achievements: [
      "Designed the backend for MedTrack supply logic, building database pipelines with Node.js and MongoDB.",
      "Developed the Finance Fusion platform, handling secure financial data processing and lightweight frontend integration.",
      "Integrated automated alert systems sending instant emails using SMTP configurations.",
    ],
    tags: ["Node.js", "Django", "Python", "Express", "MongoDB", "SQL"],
    type: "freelance",
  },
  {
    company: "Placement Nepal",
    role: "Full-Stack Developer Intern",
    period: "2024 (6 Mos)",
    description: "Built mobile utilities and responsive web features using React Native and Node.js. Maintained data flow APIs and optimized app load times.",
    achievements: [
      "Developed the Torchlight utility mobile application using React Native, achieving under 100ms camera flash response latency.",
      "Created internal REST endpoints using Express.js to automate data sync logs.",
      "Collaborated with senior engineers to implement agile sprints and Postman API test suites.",
    ],
    tags: ["React Native", "JavaScript", "Node.js", "Express", "Postman"],
    type: "internship",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "medtrack",
    title: "MedTrack",
    category: "Fullstack",
    summary: "A logistical solutions app featuring an automated alert and email system.",
    description: "A comprehensive logistics and inventory tracking solution designed for healthcare supplies. It features automated low-stock email alerts, dynamic expiration date tracking, and an intuitive dashboard.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/pegaislethal/medtrack",
    features: [
      "Automated email alerts for supplies approaching expiration",
      "Real-time supply level checking and low-stock updates",
      "Secure multi-user authentication with distinct access roles",
    ],
  },
  {
    id: "finance-fusion",
    title: "Finance Fusion",
    category: "Backend",
    summary: "A financial data platform focused heavily on complex backend logic, secure data processing, and lightweight frontend integration.",
    description: "An analytics portal that processes real-time transaction streams. Heavy focus on concurrency, query optimizations, and database security with a clean and lightweight UI layout.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    tech: ["Node.js", "Python", "Database Management"],
    githubUrl: "https://github.com/pegaislethal/finance-fusion",
    features: [
      "High-throughput transaction logging and analytical aggregation",
      "Secure API access control and backend rate limiting",
      "Optimized SQL indexing resulting in faster analytical queries",
    ],
  },
  {
    id: "torchlight",
    title: "Torchlight",
    category: "Mobile",
    summary: "A sleek utility mobile application built during an internship at Placement Nepal.",
    description: "A high-performance utility application designed for Android and iOS. Built with React Native during an internship at Placement Nepal, focusing on device sensor integration, battery optimization, and sleek theme options.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    tech: ["React Native"],
    githubUrl: "https://github.com/pegaislethal/torchlight",
    features: [
      "Direct camera flash hardware integration with negligible latency",
      "Battery-saving background state optimization",
      "Sleek dark and light styling matching device defaults",
    ],
  },
  {
    id: "wallpaper-app",
    title: "Wallpaper App",
    category: "Mobile",
    summary: "A dynamic media/wallpaper delivery mobile app focusing on smooth performance and asset loading.",
    description: "A native mobile application that delivers high-resolution visual wallpapers. Optimized image caching, lazy loading, and infinite scrolling to provide a fluid user experience.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    tech: ["React Native"],
    githubUrl: "https://github.com/pegaislethal/wallpaper-app",
    features: [
      "Optimized visual asset streaming using native image caching",
      "Infinite scroll list loading with smooth UI transitions",
      "Category filtering and dynamic background setter integration",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Django Web Development Certification",
    issuer: "IT Training Nepal",
    date: "2025",
  },
  {
    title: "Backend Web Development with Node.js & Express",
    issuer: "IT Academy Nepal",
    date: "2024",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. (Hons) in Computer Science",
    school: "Herald College Kathmandu",
    period: "2023 - Present",
    details: "Currently studying. Focusing on software development patterns, system administration, and distributed database designs.",
  },
  {
    degree: "+2 Science",
    school: "DAV College",
    period: "2021 - 2023",
    details: "Specialized in Computer Science and physics fundamentals.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "IT Training Nepal Lead",
    role: "Senior Instructor",
    company: "IT Training Nepal",
    text: "Rohit demonstrated an outstanding capacity to learn and apply Django concepts during his certification. He builds clean, maintainable backend structures and grasps MVC patterns naturally.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
];
