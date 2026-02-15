import ronami from "@/assets/projects/ronami-io/ronami.avif";
import fanful from "@/assets/projects/fanful/fanful.avif";
import wedding from "@/assets/projects/weddn/weddn.avif";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  link?: string;
  image: string;
  keyGoal: string;
  features: ProjectFeature[];
}

export const projects: Project[] = [
  {
    id: "ronami-ai",
    title: "Ronami AI",
    description: "A high-fidelity AI website development project focused on creating a premium user experience.",
    longDescription: "Ronami AI is a cutting-edge platform designed to revolutionize how AI-driven websites are built and deployed. The project focused on providing a seamless, high-performance interface that allows users to leverage powerful AI models with ease.",
    category: "AI / Web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: ronami,
    link: "#",
    keyGoal: "To create a premium, AI-first web experience that combines speed, beauty, and intuitive intelligence.",
    features: [
      { title: "AI-Driven UX", description: "Intuitive interfaces that adapt to user behavior and AI responses." },
      { title: "High Performance", description: "Optimized for speed with Next.js and Tailwind CSS." },
      { title: "Fluid Animations", description: "Micro-interactions and transitions powered by Framer Motion." }
    ]
  },
  {
    id: "fanful",
    title: "Fanful",
    description: "A comprehensive SDK and dashboard for fan engagement, featuring modular architecture and high performance.",
    longDescription: "Fanful is a 'Digital Stadium' platform designed to create a dedicated home for sports fans. It moves fan interaction beyond traditional social media by providing a centralized space where 'every day feels like gameday'. The platform empowers teams to own their fan data and engagement.",
    category: "SDK / Dashboard",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    image: fanful,
    link: "https://fanful.app/",
    keyGoal: "To build a digital ecosystem that maximizes fan engagement, retention, and monetization for sports organizations.",
    features: [
      { title: "Content Aggregation", description: "Aggregates clips, news, stats, and live scores into personalized feeds." },
      { title: "Community Hub", description: "Live chats, posts, and comments that transform updates into active conversations." },
      { title: "Gamification Engine", description: "Recognizes and rewards fan passion with points, prizes, and leaderboards." },
      { title: "Integrated Commerce", description: "Integrated features for tickets, team stores, subscriptions, and sponsorships." }
    ]
  },
  {
    id: "wedding-app",
    title: "Weddn",
    description: "An interactive application designed to streamline wedding planning and guest management.",
    longDescription: "Weddn is a comprehensive wedding planning platform designed specifically for the unique dynamics of Nigerian weddings. It addresses the complexities of large guest lists, extended families, and multiple cultural traditions, providing tools that ensure every member of the 'wedding village' has their place.",
    category: "Website",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: wedding,
    link: "#",
    keyGoal: "To modernize and simplify the traditionally complex process of planning large-scale, culturally rich Nigerian weddings.",
    features: [
      { title: "Aso-ebi Coordination", description: "Streamlines traditional attire orders and distribution for the whole wedding party." },
      { title: "Guest Management", description: "Comprehensive tools for tracking RSVPs, managing large guest lists, and seating arrangements." },
      { title: "Wedding Websites", description: "Creation of personalized sites to share event information and collect well wishes." },
      { title: "Bulk Messaging", description: "Integrated communication tools to keep all guests and vendors informed efficiently." }
    ]
  },
  {
    id: "animebox",
    title: "Animebox",
    description: "A specialized platform for anime enthusiasts to discover and track their favorite content.",
    longDescription: "Animebox is a hub for anime lovers, providing a rich discovery experience and tracking tools. It focuses on high-quality visuals and efficient data fetching to provide a smooth browsing experience for large content libraries.",
    category: "Entertainment",
    technologies: ["React", "CSS Modules", "API Integration"],
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    link: "#",
    keyGoal: "To provide a visually stunning and highly functional platform for anime discovery and community engagement.",
    features: [
      { title: "Smart Discovery", description: "Advanced filtering and search for finding content across multiple categories." },
      { title: "Content Tracking", description: "Allows users to maintain personal watchlists and track their progress." },
      { title: "Rich Visuals", description: "A dark-themed interface optimized for showcasing anime artwork." }
    ]
  },
];
