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
  category: "Frontend" | "Backend" | "Fullstack" | "AI/ML";
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
  name: "Rohit",
  title: "Senior Full-Stack Developer & AI Specialist",
  subTitle: "Crafting beautiful, high-performance distributed systems, intelligent web applications, and elegant user interfaces.",
  experienceYears: 6,
  projectsCount: 24,
  technologiesCount: 18,
  certificationsCount: 8,
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "rohit.dev@example.com",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js 15", level: 95, icon: "React" },
      { name: "TypeScript", level: 90, icon: "TS" },
      { name: "Tailwind CSS", level: 95, icon: "Tailwind" },
      { name: "Framer Motion / GSAP", level: 85, icon: "Motion" },
      { name: "Redux / Zustand", level: 88, icon: "Zustand" },
    ],
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: 92, icon: "Node" },
      { name: "Python / FastAPI", level: 85, icon: "Python" },
      { name: "Go (Golang)", level: 80, icon: "Go" },
      { name: "GraphQL / REST APIs", level: 90, icon: "API" },
      { name: "Microservices", level: 84, icon: "Microservices" },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", level: 88, icon: "Postgres" },
      { name: "MongoDB", level: 90, icon: "Mongo" },
      { name: "Redis", level: 85, icon: "Redis" },
      { name: "Prisma / Mongoose", level: 92, icon: "Prisma" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (S3, EC2, Lambda)", level: 82, icon: "AWS" },
      { name: "Docker / Kubernetes", level: 80, icon: "Docker" },
      { name: "CI/CD (GitHub Actions)", level: 85, icon: "CICD" },
      { name: "Vercel / Netlify", level: 95, icon: "Vercel" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "OpenAI API / LangChain", level: 88, icon: "AI" },
      { name: "Vector Databases (Pinecone)", level: 82, icon: "Pinecone" },
      { name: "Hugging Face Models", level: 78, icon: "Hugging" },
      { name: "Prompt Engineering", level: 90, icon: "Prompt" },
    ],
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git / GitHub", level: 95, icon: "Git" },
      { name: "Agile / Scrum", level: 90, icon: "Agile" },
      { name: "Figma (UI/UX design)", level: 80, icon: "Figma" },
      { name: "Jest / Playwright (Testing)", level: 84, icon: "Test" },
    ],
  },
];

export const TIMELINE_EXPERIENCE: Experience[] = [
  {
    company: "Nova Technologies",
    role: "Senior Full-Stack Architect",
    period: "2023 - Present",
    description: "Lead developer on SaaS platforms delivering responsive designs and real-time chat widgets. Overhauled distributed databases, cutting system latency and enhancing API response speeds.",
    achievements: [
      "Designed and launched microservices-based core billing app using Go, Postgres, and Redis.",
      "Redesigned the corporate client portal into a modern Next.js 15 SSR dashboard, reducing load times by 42%.",
      "Mentored a team of 6 engineers on React design patterns and state management conventions.",
    ],
    tags: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Docker", "AWS"],
    type: "job",
  },
  {
    company: "Apex Ledger Corp",
    role: "Full-Stack Developer",
    period: "2021 - 2023",
    description: "Built financial analytics dash panels with highly interactive charting layers. Designed secure JWT/OAuth token verification mechanisms and integrated real-time webhook syncs.",
    achievements: [
      "Implemented a dynamic charting component supporting millions of real-time currency ticks.",
      "Architected backend microservices in Node.js and TypeScript, handling over 250,000 requests/day.",
      "Optimized query structures and database indexes, boosting PostgreSQL read operations by 30%.",
    ],
    tags: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL", "Redis"],
    type: "job",
  },
  {
    company: "Cognitive AI (Freelance Project)",
    role: "AI Integration Lead & UI Developer",
    period: "2022 (6 Mos)",
    description: "Contract based development to create a custom LLM prompting dashboard for customer service analysis, optimizing prompt execution workflows.",
    achievements: [
      "Connected LangChain workflows with OpenAI APIs to process historical chat transcripts.",
      "Crafted a beautiful dashboard with Tailwind and Framer Motion showing keyword trend flows.",
    ],
    tags: ["React", "FastAPI", "OpenAI", "Tailwind CSS", "Framer Motion"],
    type: "freelance",
  },
  {
    company: "ByteCraft Softwares",
    role: "Full-Stack Developer Intern",
    period: "2020 - 2021",
    description: "Participated in agile ceremonies and wrote automated integration testing scripts. Maintained legacy internal dashboard frameworks.",
    achievements: [
      "Wrote Jest and React Testing Library code, expanding test coverage from 45% to 80%.",
      "Created reusable form elements with validation using React Hook Form and Zod.",
    ],
    tags: ["React", "JavaScript", "Node.js", "MongoDB", "Jest"],
    type: "internship",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "zenith-commerce",
    title: "Zenith Headless Commerce",
    category: "Fullstack",
    summary: "Premium Next.js e-commerce platform integrated with Stripe, search, and dynamic dashboards.",
    description: "A fast, SEO-optimized headless commerce application. Built using Next.js 15 App Router, Tailwind CSS, Prisma, and PostgreSQL. It features full responsive navigation, incremental static regeneration (ISR) for product detail pages, instant search with Meilisearch, and a beautiful custom checkout checkout pipeline using Stripe Elements.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://zenith-commerce.demo",
    githubUrl: "https://github.com/rohit/zenith-commerce",
    features: [
      "ISR catalog rendering loading under 300ms",
      "Interactive cart with client-side state syncing and stock checking",
      "Stripe payment gateway integrated with webhook listener",
      "Polished admin analytics console showcasing sales, trends, and orders",
    ],
  },
  {
    id: "intellect-chat",
    title: "Intellect AI Workspace",
    category: "AI/ML",
    summary: "Collaborative workspace connecting custom LangChain nodes, PDF query engines, and live code execution.",
    description: "An advanced SaaS workspace enabling teams to prompt multiple custom trained AI agents, build chat workflows, query documents using vector embeddings, and execute code snippets in a isolated sandbox environment.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tech: ["Next.js", "FastAPI", "Pinecone", "LangChain", "OpenAI", "Tailwind CSS"],
    liveUrl: "https://intellect-chat.demo",
    githubUrl: "https://github.com/rohit/intellect-ai-workspace",
    features: [
      "PDF indexing with Vector embeddings via OpenAI text-embedding-ada-002",
      "Interactive canvas to draw model prompting node flows",
      "Secure python-sandbox script execution tool using Docker containers",
      "Websocket connection for ultra-low latency AI streaming answers",
    ],
  },
  {
    id: "aurora-dashboard",
    title: "Aurora SaaS Analytics Portal",
    category: "Frontend",
    summary: "A ultra-polished metrics dashboard inspired by Linear and Vercel UI visual styles.",
    description: "A premium client-side analytics UI displaying detailed server performance, api throughput, request logs, and customer conversion rates. Built to showcase visual elegance and micro-interactions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tech: ["React", "TypeScript", "Recharts", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://aurora-dashboard.demo",
    githubUrl: "https://github.com/rohit/aurora-analytics",
    features: [
      "Glassmorphism widgets supporting real-time data streaming",
      "Intricate Framer Motion charts showing metrics zooming",
      "Custom cursor interactions providing quick log stats on cell hover",
      "Adaptive dark-first mode matching system presets",
    ],
  },
  {
    id: "hyper-cache",
    title: "HyperCache Distributed Store",
    category: "Backend",
    summary: "A lightweight in-memory cache written in Go with raft-consensus replication.",
    description: "A distributed, high-performance in-memory key-value database designed for microservice environments. Leverages Raft consensus protocol for reliable node replication, supports LRU eviction policies, and exposes RESTful and gRPC endpoints.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
    tech: ["Go", "gRPC", "Protobuf", "Raft", "Docker"],
    githubUrl: "https://github.com/rohit/hyper-cache",
    features: [
      "Custom TTL caching engine processing over 80,000 write ops/sec",
      "Automated leader node selection using HashiCorp Raft",
      "gRPC server configuration reducing payloads by 65% compared to JSON APIs",
      "Docker Compose environment configuring multi-node clusters instantly",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    credentialId: "AWS-SAP-892",
  },
  {
    title: "Next.js Certified Professional Developer",
    issuer: "Vercel / Next.js",
    date: "2024",
    credentialId: "NX-CERT-4412",
  },
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    date: "2023",
    credentialId: "MDB-556102",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    date: "2024",
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    school: "Global Institute of Technology",
    period: "2017 - 2021",
    details: "Graduated with Honors (GPA 3.85/4.0). Focused on Advanced Data Structures, Cloud Architecture, and Software Engineering methodologies.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Vice President of Engineering",
    company: "Nova Technologies",
    text: "Rohit is an outstanding full-stack engineer. He re-architected our core database query engine, resulting in a dramatic speedup. His visual design tastes and front-end engineering match his systems capabilities.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Marcus Aurelius",
    role: "Product Director",
    company: "Apex Ledger Corp",
    text: "Working with Rohit was a breeze. He translated our complex financial analytic wireframes into highly performant and responsive React views. His focus on micro-interactions and smooth transitions is world-class.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Founder & CTO",
    company: "Cognitive AI",
    text: "Rohit joined us as an AI lead contractor and delivered a perfect OpenAI dashboard integration. He has a unique combination of LLM engineering knowledge and exceptional styling detail. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
];
