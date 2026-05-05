export const PROFILE = {
  name: "Isha Mishra",
  role: "Full Stack Developer",
  tagline: "I craft engaging and interactive web experiences using React, Next.js, and TypeScript.",
  location: "Bhubaneswar, India",
  email: "ishamishra0619@gmail.com",
  phone: "+91 90782 04344",
  linkedin: "https://www.linkedin.com/in/isha-mishra-906939315/",
  github: "https://github.com/ishamishra19",
};

export const EDUCATION = [
  {
    institution: "C. V. Raman Global University",
    degree: "B.Tech, Computer Science & IT",
    period: "2023 — 2027",
    detail: "CGPA 8.03 / 10",
    location: "Bhubaneswar, Odisha",
  },
  {
    institution: "Madnawati Public School",
    degree: "Class XII (CBSE)",
    period: "2023",
    detail: "Percentage: 74.2%",
    location: "India",
  },
  {
    institution: "Madnawati Public School",
    degree: "Class X (CBSE)",
    period: "2021",
    detail: "Percentage: 88.3%",
    location: "India",
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Redux"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vercel"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Datacom Software Development Job Simulation",
    issuer: "Forage",
  },
  {
    title: "Innovation by Design",
    issuer: "NPTEL",
  },
  {
    title: "Google UX Design",
    issuer: "Coursera",
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  liveUrl?: string;
  year: string;
  context: string;
  role: string;
  problem: string;
  highlights: string[];
  outcomes: string[];
  stack: string[];
  size: "lg" | "md";
};

export const PROJECTS: Project[] = [
  {
    slug: "chatbot-ticketing",
    title: "Online Chatbot-Based Ticketing System",
    tagline: "An AI-assisted booking flow that replaces clunky forms with a conversation.",
    year: "2024",
    context: "Smart India Hackathon 2024",
    role: "Frontend Developer",
    problem:
      "Traditional ticket booking flows ask users to navigate through dense forms and dropdowns. We wanted to make booking feel like talking to a helpful agent — fast, friendly, and accessible on any device.",
    highlights: [
      "Designed and built a chat-first booking interface with React + Tailwind",
      "Integrated a rule-based + LLM-backed chatbot for live ticket queries",
      "Real-time seat availability updates with optimistic UI patterns",
      "Mobile-first responsive layout with full keyboard accessibility",
    ],
    outcomes: [
      "Shortlisted at the institute-level round of SIH 2024",
      "Reduced average booking interaction from 9 form fields to a 4-message chat",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    size: "lg",
  },
  {
    slug: "inventory-management",
    title: "Web-Based Inventory Management Application",
    tagline: "A clean dashboard to track stock, suppliers and movements in real time.",
    liveUrl: "https://www.inveron.shop/",
    year: "2026",
    context: "HackTheStack 2026",
    role: "Frontend Developer",
    problem:
      "Small businesses struggle with spreadsheets that fall out of sync. We built a focused dashboard so a single operator can see what's in stock, what's running low, and what's been moved — at a glance.",
    highlights: [
      "Bento-style dashboard with live stock charts and low-stock alerts",
      "CRUD flows for products, suppliers and stock transactions",
      "Role-based access for admin vs warehouse staff",
      "Built-in CSV export for monthly reconciliations",
    ],
    outcomes: [
      "Built end-to-end in a 36-hour hackathon sprint",
      "Demoed to judges with sub-200ms interaction latency on demo data",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
    size: "lg",
  },
];

export const COURSEWORK = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Management Systems",
  "Computer Networks",
  "Web Development",
  "Object-Oriented Programming",
  "Software Engineering",
];

export const INTERESTS = [
  "UI/UX experimentation",
  "Open-source frontends",
  "Editorial design",
  "Reading non-fiction",
];
