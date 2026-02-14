export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "ronami-ai",
    title: "Ronami AI",
    description: "A high-fidelity AI website development project focused on creating a premium user experience.",
    category: "AI / Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "news-app",
    title: "Global News Portal",
    description: "A modern, production-ready news platform with server-side rendering and real-time updates.",
    category: "Web Application",
    technologies: ["React Router", "TypeScript", "Tailwind CSS", "Node.js"],
  },
  {
    id: "fanful",
    title: "Fanful Ecosystem",
    description: "A comprehensive SDK and dashboard for fan engagement, featuring modular architecture and high performance.",
    category: "SDK / Dashboard",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    id: "animebox",
    title: "Animebox",
    description: "A specialized platform for anime enthusiasts to discover and track their favorite content.",
    category: "Entertainment",
    technologies: ["React", "CSS Modules", "API Integration"],
  },
  {
    id: "wedding-app",
    title: "Wedding Planner",
    description: "An interactive application designed to streamline wedding planning and guest management.",
    category: "Utility",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  }
];
