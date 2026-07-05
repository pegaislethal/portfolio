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
  title: "Backend-Focused Software Engineer",
  subTitle: "Engineered backend specialist who loves building robust server logic, APIs, and database structures. Self-taught in advanced architectures via online resources and hands-on builds, having done foundational Django web development 3.5 years ago.",
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
    title: "Strong Proficiencies (Core)",
    skills: [
      { name: "Node.js", level: 95, icon: "Node" },
      { name: "Express", level: 92, icon: "Express" },
      { name: "MongoDB", level: 90, icon: "Mongo" },
      { name: "JavaScript", level: 92, icon: "JS" },
      { name: "Python", level: 90, icon: "Python" },
    ],
  },
  {
    title: "Moderate Proficiencies",
    skills: [
      { name: "SQL", level: 80, icon: "SQL" },
      { name: "React", level: 75, icon: "React" },
      { name: "React Native (Mobile Dev)", level: 78, icon: "Mobile" },
    ],
  },
  {
    title: "Basic / Foundational Knowledge",
    skills: [
      { name: "HTML", level: 70, icon: "HTML" },
      { name: "CSS", level: 65, icon: "CSS" },
      { name: "PHP", level: 55, icon: "PHP" },
      { name: "Git", level: 75, icon: "Git" },
      { name: "Django (1 month e-commerce)", level: 50, icon: "Django" },
      { name: "AI & Machine Learning Basics", level: 45, icon: "AI" },
    ],
  },
];

export const TIMELINE_EXPERIENCE: Experience[] = [
  {
    company: "Placement Nepal",
    role: "Mobile Application Developer Intern",
    period: "2024 (2-3 Mos)",
    description: "Acted as a Mobile Application Developer learning and utilizing React Native.",
    achievements: [
      "Collaborated with a team to successfully build and ship the 'Torchlight' and 'Wallpaper' utility apps.",
      "Optimized mobile layout performance and verified asset caching mechanisms."
    ],
    tags: ["React Native", "JavaScript", "Mobile Dev", "Placement Nepal"],
    type: "internship",
  },
  {
    company: "Development Platform (College bodies)",
    role: "Backend Developer Learner Intern",
    period: "2024",
    description: "Acted as a Backend Developer Learner focusing on backend engineering and server-side logic.",
    achievements: [
      "Designed server routers and handled database CRUD connections.",
      "Learned server scalability principles and structured API requests and responses."
    ],
    tags: ["Node.js", "Express", "SQL", "Database Operations"],
    type: "internship",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "medtrack",
    title: "MedTrack",
    category: "Fullstack",
    summary: "A logistical tracking and management solution featuring an automated user alert and integrated mail system.",
    description: "A healthcare supply tracking and logistics tool designed to monitor inventory. It features automated alerts and email dispatch templates to notify users of low stock and supplies approaching expiration.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://medtrack-v2-qgao-pmhnw3zer-pegas-projects-be8fc807.vercel.app/",
    githubUrl: "https://github.com/pegaislethal/medtrack",
    features: [
      "Automated alerts and email notifications for supply thresholds",
      "Dynamic inventory check dashboard with responsive cards",
      "Role-based authentication routing for medical logistics admins"
    ],
  },
  {
    id: "finance-fusion",
    title: "Finance Fusion",
    category: "Fullstack",
    summary: "A comprehensive financial platform built on the MERN stack, designed with deep attention to secure backend routing.",
    description: "A complete transactional platform focusing heavily on database security, secure API structures, data validation, and clean state integration using the MERN stack.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/pegaislethal/finance-fusion",
    features: [
      "Secure backend routing guards and validation middleware",
      "Transactional logging collections in MongoDB with optimized indexing",
      "Responsive MERN dashboard with dynamic chart updates"
    ],
  },
  {
    id: "weather-app",
    title: "Weather App",
    category: "Frontend",
    summary: "A lightweight, clean web app delivering real-time weather metrics and localized data fetching.",
    description: "A responsive weather widget displaying real-time wind speeds, humidity, temperatures, and location coordinates via quick data fetches.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "https://github.com/pegaislethal/weather-app",
    features: [
      "Dynamic third-party API fetches on city submissions",
      "PHP script hooks processing client location queries securely",
      "Lightweight, framework-free web page loading under 200ms"
    ],
  },
  {
    id: "torchlight",
    title: "Torchlight",
    category: "Mobile",
    summary: "A sleek, utility mobile application built during my internship at Placement Nepal.",
    description: "A lightweight, responsive utility app built with React Native during an internship at Placement Nepal, focusing on camera hardware flash controls and battery savings.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    tech: ["React Native"],
    githubUrl: "https://github.com/pegaislethal/torchlight",
    features: [
      "Low-level flash sensor hooks for instant strobe responses",
      "Background sleep mode optimizing device battery draw",
      "Modern dark theme mode toggles aligning with device properties"
    ],
  },
  {
    id: "wallpaper-app",
    title: "Wallpaper App",
    category: "Mobile",
    summary: "A media-centric mobile application designed for smooth asset loading and dynamic wallpaper delivery.",
    description: "A mobile application built with React Native for Placement Nepal, focusing on fast image streaming, caching strategies, and wallpaper application controls.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    tech: ["React Native"],
    githubUrl: "https://github.com/pegaislethal/wallpaper-app",
    features: [
      "Native image caching libraries ensuring zero scroll stuttering",
      "One-click background application hooks matching device ratios",
      "Dynamic catalog filters fetching categorizations instantly"
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Django Web Development Certification",
    issuer: "IT Training Nepal",
    date: "2023",
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
