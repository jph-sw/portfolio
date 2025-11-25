export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
  year: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export enum SectionId {
  HERO = "hero",
  ABOUT = "about",
  PROJECTS = "projects",
  CONTACT = "contact",
}

export interface ChatMessage {
  role: "user" | "model";
  text: string;
  timestamp: Date;
}
