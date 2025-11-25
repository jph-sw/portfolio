import { type Project, type SocialLink } from "./types.ts";

export const PERSONAL_INFO = {
  name: "JAN PHILIPPS",
  role: "Software Engineer",
  location: "Germany",
  bio: `I craft digital experiences with a focus on minimalism and performance.
  Currently an apprentice exploring the depths of full-stack development,
  system architecture, and UI/UX design.`,
  shortBio: "Building the web, one pixel at a time.",
  email: "jan@philipps.io",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "YAN",
    description:
      "A collaborative wiki platform that leverages real-time WebSocket communication for seamless multi-user editing experiences.",
    techStack: ["Tanstack Start", "React", "WebSockets", "Node.js"],
    imageUrl: "https://picsum.photos/600/400?grayscale&blur=2",
    year: "2025",
    link: "https://github.com/jph-sw/yan",
  },
];

export const SKILLS = [
  "TypeScript",
  "C#",
  "React",
  "Node.js",
  "TailwindCSS",
  "Docker",
  "Linux",
  "SQL",
  "Git",
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/jph-sw ", label: "GH" },
  { platform: "Letterboxd", url: "https://letterboxd.com/jphsw", label: "LB" },
];

// A 4x4 Bayer matrix pattern for dithering in CSS
export const DITHER_PATTERN_B64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzjwqQAyjFVBVQCxIxQA2QwA6k4Q9wQ8oXoAAAAASUVORK5CYII=";
