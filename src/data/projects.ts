import ronami from "@/assets/projects/ronami-io/ronami.png";
import fanful from "@/assets/projects/fanful/fanful.png";
import wedding from "@/assets/projects/weddn/weddn.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  link?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "ronami-ai",
    title: "Ronami AI",
    description: "A high-fidelity AI website development project focused on creating a premium user experience.",
    category: "AI / Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: ronami,
    link: "#"
  },
  {
    id: "fanful",
    title: "Fanful",
    description: "A comprehensive SDK and dashboard for fan engagement, featuring modular architecture and high performance.",
    category: "SDK / Dashboard",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    image: fanful,
    link: "https://fanful.app/"
  },
  {
    id: "wedding-app",
    title: "Wedding Planner",
    description: "An interactive application designed to streamline wedding planning and guest management.",
    category: "Website",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: wedding,
    link: "#"
  },
  {
    id: "animebox",
    title: "Animebox",
    description: "A specialized platform for anime enthusiasts to discover and track their favorite content.",
    category: "Entertainment",
    technologies: ["React", "CSS Modules", "API Integration"],
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    link: "#"
  },
];
