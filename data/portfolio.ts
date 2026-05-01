import {
  ArrowsClockwise,
  Brain,
  Briefcase,
  ChatTeardropText,
  Crown,
  Lightbulb,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFigma,
  SiFlask,
  SiGit,
  SiGooglecloud,
  SiGraphql,
  SiHuggingface,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPostgresql,
  SiPytorch,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiTensorflow,
  SiC,
  SiCplusplus,
  SiDart,
  SiOpenjdk,
  SiFlutter
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";
type PhosphorIcon = any;

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  websiteUrl: string;
  logoPath?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  date: string;
  githubUrl: string;
  liveUrl?: string;
  imagePath?: string;
  featured: boolean;
}

export interface CommunityEntry {
  title: string;
  role: string;
  description: string;
  period: string;
  icon: PhosphorIcon;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: "Tech" | "AI/ML" | "Projects" | "Growth" | "Life";
  tags: string[];
  readTime: string;
  mediumUrl?: string;
  contentHtml?: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
  cvUrl: string;
  linktreeLabel: string;
  qrCodePath: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  medium: string;
}

export interface SkillLogo {
  name: string;
  icon: IconType;
  brandColor: string;
}

export interface ToolSkill extends SkillLogo {
  group: "Frontend" | "Backend" | "AI/ML" | "DevOps";
  brandColor: string;
}

export interface SoftSkill {
  name: string;
  icon: PhosphorIcon;
}

export const educationInfo = {
  institution: "University of Buea",
  program: "Computer Engineering",
  status: "Student",
  expectedGraduation: "2028"
} as const;

export const heroHighlights = [
  { label: "Current", value: "Computer Engineering Student" },
  { label: "University", value: "University of Buea" },
  { label: "Expected Graduation", value: "2028" }
] as const;

export const experiences: Experience[] = [
  {
    company: "Skaleway",
    role: "Software Engineer Intern",
    period: "Aug 2025 - Jan 2026",
    description:
      "Built skale-am, an intern management platform that streamlined task tracking, evaluation cycles, and mentor feedback workflows.",
    tags: ["Next.js", "Elysia.js", "TypeScript"],
    websiteUrl: "https://www.skaleway.com",
    logoPath: "/companies/skaleway.png"
  },
  {
    company: "Flomad Labs",
    role: "AI Intern",
    period: "Jul 2025 - Oct 2025",
    description:
      "Developed computer vision pipelines for real-time object detection and model optimization, improving inference reliability in constrained environments.",
    tags: ["Python", "OpenCV", "PyTorch"],
    websiteUrl: "https://flomad.com",
    logoPath: "/companies/flomad-labs.png"
  },
  {
    company: "Labmentix",
    role: "ML Intern",
    period: "Jul 2025 - Nov 2025",
    description:
      "Built an intelligent expense tracker with ML-powered transaction categorization and lightweight analytics for daily spending insight.",
    tags: ["Python", "Flask", "Machine Learning"],
    websiteUrl: "https://labmentix.com",
    logoPath: "/companies/labmentix.png"
  },
  {
    company: "Codveda",
    role: "Full Stack Intern",
    period: "May 2025 - Jun 2025",
    description:
      "Built a web scraper and data pipeline for automated content aggregation, with transformation routines that improved data quality for downstream use.",
    tags: ["JavaScript", "Node.js", "Automation"],
    websiteUrl: "https://www.codveda.com",
    logoPath: "/companies/codveda.png"
  },
  {
    company: "Freelance",
    role: "Independent Developer",
    period: "2024 - Present",
    description:
      "Built the Knowledge Center website and Cameroon Budget Boss for CMFI, delivering practical products with iterative stakeholder feedback loops.",
    tags: ["React", "MERN", "Product Delivery"],
    websiteUrl: "https://github.com/grairudolf"
  }
];

export const projects: Project[] = [
  {
    title: "NeRF Implementation",
    description:
      "From-scratch neural radiance field implementation with camera pose ingestion, volume rendering, and reproducible experiment setup for 3D scene synthesis.",
    tags: ["PyTorch", "Computer Vision", "Rendering"],
    date: "Nov 2025 - Jan 2026",
    githubUrl: "https://github.com/grairudolf/nerf",
    featured: true,
    imagePath: "/projects/nerf.jpg"
  },
  {
    title: "EazyCV",
    description:
      "AI-assisted CV builder with FastAPI backend and React frontend, combining prompt-guided writing and structured formatting for fast professional resumes.",
    tags: ["FastAPI", "React", "Gemini AI"],
    date: "Nov 2025 - Feb 2026",
    githubUrl: "https://github.com/grairudolf/eazycv",
    liveUrl: "https://eazycv.vercel.app",
    featured: true,
    imagePath: "/projects/eazycv.jpg"
  },
  {
    title: "LoRA Fine-Tuning Replication",
    description:
      "Replication of Hu et al. 2022 with controlled LoRA experiments, training scripts, and comparative metrics for low-rank adaptation efficiency.",
    tags: ["PyTorch", "NLP", "LoRA"],
    date: "Jan 2026 - Mar 2026",
    githubUrl: "https://github.com/grairudolf/lora",
    featured: true,
    imagePath: "/projects/lora.jpg"
  },
  {
    title: "EduMind",
    description:
      "Multilingual education chatbot supporting English, French, and Pidgin with contextual responses over real-time WebSockets for classroom-style interaction.",
    tags: ["HuggingFace", "WebSockets", "Multilingual AI"],
    date: "Oct 2025 - Nov 2025",
    githubUrl: "https://github.com/grairudolf/edumind",
    featured: true,
    imagePath: "/projects/edumind.jpg"
  },
  {
    title: "maze-cpp",
    description:
      "Pathfinding playground implementing DFS, BFS, and A* with visualization-friendly structures and deterministic maze generation.",
    tags: ["C++17", "DFS/BFS", "A*"],
    date: "Jan 2026",
    githubUrl: "https://github.com/grairudolf/maze-cpp",
    featured: false,
    imagePath: "/projects/maze-cpp.jpg"
  },
  {
    title: "GeoVision3D",
    description:
      "3D shape analysis toolkit using OpenCV pipelines for feature extraction, contour intelligence, and geometry-aware processing.",
    tags: ["Python", "OpenCV", "3D Analysis"],
    date: "Dec 2025 - Jan 2026",
    githubUrl: "https://github.com/grairudolf/GeoVision3d",
    featured: false,
    imagePath: "/projects/geovision3d.jpg"
  },
  {
    title: "Silicon Hub",
    description:
      "SiliconHub is a collaborative platform designed to connect developers, innovators, and tech enthusiasts. It offers tools, resources, and a community space to share projects, find collaborators, and grow ideas from concept to launch. Special credits to my team The Scripts for this project.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    date: "May 2025 - Jul 2025",
    githubUrl: "https://github.com/grairudolf/CFC25_HACKATHON",
    liveUrl: "https://siliconhub.vercel.app",
    featured: false,
    imagePath: "/projects/siliconhub.jpg"
  },
  {
    title: "Cameroon Budget Boss",
    description:
      "Budgeting application for CMFI focused on practical personal finance workflows and transparent monthly expenditure tracking.",
    tags: ["React", "Vite", "Finance"],
    date: "Apr 2025 - Jun 2025",
    githubUrl: "https://github.com/grairudolf/cameroon-budget-boss",
    liveUrl: "https://cameroon-budget-boss.vercel.app",
    featured: false,
    imagePath: "/projects/cameroon.jpg"
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek, modern personal portfolio designed to showcase my work, personality, and journey — complete with a dark theme and smooth, engaging visuals for a memorable user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "2024",
    githubUrl: "https://github.com/grairudolf/myportfoilio",
    liveUrl: "https://myportfoilio-indol.vercel.app",
    featured: false,
    imagePath: "/projects/port.jpg"
  },
  {
    title: "Task Management App",
    description:
      "A productivity application designed to help users manage tasks, set clear priorities, and track progress across multiple projects with ease and efficiency.",
    tags: ["React", "Node.js", "TypeScript"],
    date: "2024",
    githubUrl: "",
    liveUrl: "https://taskify-liard-iota.vercel.app",
    featured: false,
    imagePath: "/projects/task.jpg"
  },
  {
    title: "Astrophysics Career Guide",
    description:
      "Born from my passion for astronomy, I strongly encourage dreaming big — because great dreams add meaning, direction, and color to life.",
    tags: ["HTML", "CSS", "JavaScript", "SCSS"],
    date: "2024",
    githubUrl: "https://github.com/grairudolf/AstroPhysics",
    liveUrl: "https://astro-physics-career.vercel.app",
    featured: false,
    imagePath: "/projects/astrophysics.jpg"
  },
  {
    title: "NetBoltZ",
    description:
      "Developed with teammates Ayafor Bill and Tazuh Faith in response to widespread slow internet connectivity. Designed to enhance browsing speed and significantly improve the overall internet experience.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Java", "SSH"],
    date: "2024",
    githubUrl: "https://github.com/basedcatx/NetBoltZ",
    liveUrl: "https://netboltz.vercel.app",
    featured: false,
    imagePath: "/projects/netboltz.jpg"
  }
];

export const languageSkills: SkillLogo[] = [
  { name: "Python", icon: SiPython, brandColor: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, brandColor: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, brandColor: "#F7DF1E" },
  { name: "C", icon: SiC, brandColor: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, brandColor: "#00599C" },
  { name: "Dart", icon: SiDart, brandColor: "#0175C2" },
  { name: "Java", icon: SiOpenjdk, brandColor: "#007396" }
];

export const toolSkills: ToolSkill[] = [
  { name: "React", icon: SiReact, group: "Frontend", brandColor: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, group: "Frontend", brandColor: "#111111" },
  { name: "Tailwind CSS", icon: SiTailwindcss, group: "Frontend", brandColor: "#06B6D4" },
  { name: "Flutter", icon: SiFlutter, group: "Frontend", brandColor: "#02569B" },
  { name: "Node.js", icon: SiNodedotjs, group: "Backend", brandColor: "#5FA04E" },
  { name: "FastAPI", icon: SiFastapi, group: "Backend", brandColor: "#009688" },
  { name: "Flask", icon: SiFlask, group: "Backend", brandColor: "#111111" },
  { name: "Express.js", icon: SiExpress, group: "Backend", brandColor: "#111111" },
  { name: "MongoDB", icon: SiMongodb, group: "Backend", brandColor: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, group: "Backend", brandColor: "#4169E1" },
  { name: "Firebase", icon: SiFirebase, group: "Backend", brandColor: "#DD2C00" },
  { name: "GraphQL", icon: SiGraphql, group: "Backend", brandColor: "#E10098" },
  { name: "PyTorch", icon: SiPytorch, group: "AI/ML", brandColor: "#EE4C2C" },
  { name: "OpenCV", icon: SiOpencv, group: "AI/ML", brandColor: "#5C3EE8" },
  { name: "HuggingFace", icon: SiHuggingface, group: "AI/ML", brandColor: "#FFCC4D" },
  { name: "NumPy", icon: SiNumpy, group: "AI/ML", brandColor: "#013243" },
  { name: "TensorFlow", icon: SiTensorflow, group: "AI/ML", brandColor: "#FF6F00" },
  { name: "Git", icon: SiGit, group: "DevOps", brandColor: "#F05032" },
  { name: "Docker", icon: SiDocker, group: "DevOps", brandColor: "#2496ED" },
  { name: "AWS", icon: FaAws, group: "DevOps", brandColor: "#FF9900" },
  { name: "Linux", icon: SiLinux, group: "DevOps", brandColor: "#FCC624" },
  { name: "Figma", icon: SiFigma, group: "DevOps", brandColor: "#F24E1E" },
  { name: "Google Cloud", icon: SiGooglecloud, group: "DevOps", brandColor: "#4285F4" }
];

export const softSkills: SoftSkill[] = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Team Collaboration", icon: UsersThree },
  { name: "Leadership", icon: Crown },
  { name: "Communication", icon: ChatTeardropText },
  { name: "Critical Thinking", icon: Brain },
  { name: "Adaptability", icon: ArrowsClockwise }
];

export const communityEntries: CommunityEntry[] = [
  {
    title: "Tech Innovation Center (TiC)",
    role: "Regional Tech Trainer",
    description: "I actively contribute to shaping the next generation of great minds and techpreneurs in Cameroon, helping students become problem solvers and innovators who create meaningful change in their communities and beyond.",
    period: "2024 - Present",
    icon: Briefcase
  },
  {
    title: "FET AI Club",
    role: "Member",
    description: "Active member of my Faculty's Artificial Intelligence Club, where I grow and collaborate with peers to develop practical skills, share ideas, and explore the future of intelligent systems.",
    period: "2024 - 2025",
    icon: Brain
  },
  {
    title: "Knowledge Center (KC)",
    role: "Science Tutor and Developer",
    description: "One of the things I'm most grateful for is the gift of KC — an organization that challenges societal norms and champions meritocracy, all while empowering the next generation of global leaders and visionaries.",
    period: "2024 - Present",
    icon: Lightbulb
  },
  {
    title: "Tutoring",
    role: "Teacher",
    description: "After high school, I developed a passion for teaching to help other students learn more easily by guiding them through the same challenges I once faced. My goal has been to make learning accessible, relatable, and empowering for those who need support.",
    period: "2024 - Present",
    icon: ChatTeardropText
  },
  {
    title: "CMFI (Christian Missionary Fellowship International)",
    role: "Disciple",
    description: "I am a disciple of the Lord Jesus Christ, devoted to following Him and obeying His commands — the very reason we were created. My life's mission is to glorify God by living in obedience to His Word and sharing the gospel, so that as many souls as possible may come to the knowledge of salvation.",
    period: "2024 - Present",
    icon: Crown
  }
];

export const contactInfo: ContactInfo = {
  email: "grairudolf0@gmail.com",
  github: "https://github.com/grairudolf",
  linkedin: "https://linkedin.com/in/grairudolf",
  location: "Buea, Cameroon",
  cvUrl: "https://drive.google.com/file/d/1mTekKfo1YcxbCS5sY6aUFWgul6ZjAmg4/view?usp=sharing",
  linktreeLabel: "Scan to visit my Linktree",
  qrCodePath: "/grairudolf0.png"
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/grairudolf",
  linkedin: "https://linkedin.com/in/grairudolf",
  medium: "https://medium.com/@grairudolf"
};
