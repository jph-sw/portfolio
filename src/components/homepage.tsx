import React, { useState } from "react";
import {
  ArrowDown,
  ExternalLink,
  Github,
  Layers,
  Code,
  Mail,
} from "lucide-react";
import { PERSONAL_INFO, PROJECTS, SKILLS, SOCIALS } from "../constants";
import Typewriter from "./typewriter";

const Homepage: React.FC = () => {
  // Mobile Nav State
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink text-paper font-sans selection:bg-white selection:text-ink relative overflow-x-hidden">
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('/library.png')]"></div>

      <nav className="fixed top-0 left-0 w-full z-40 bg-ink/80 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            className="font-mono text-xl font-bold tracking-tighter cursor-pointer group"
            href="#about"
          >
            <span className="group-hover:text-neutral-400 transition-colors">
              1π
            </span>
          </a>

          <div className="hidden md:flex gap-8 font-mono text-sm">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-neutral-400 uppercase tracking-widest transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </nav>

      {isNavOpen && (
        <div className="fixed inset-0 z-30 bg-ink flex flex-col items-center justify-center gap-8 font-mono text-2xl">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:underline underline-offset-4"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <section
        className="relative min-h-screen flex flex-col justify-center px-6 pt-16 z-10"
        id="about"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="space-y-2">
              <h2 className="font-mono text-sm text-neutral-500 mb-4 tracking-widest">
                STATUS: APPRENTICE //{" "}
                <span className="text-green-500">ONLINE</span>
              </h2>
              <h1
                className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] glitch-text"
                data-text={PERSONAL_INFO.name}
              >
                {PERSONAL_INFO.name}
              </h1>
            </div>

            <div className="h-24 md:h-20 text-xl md:text-2xl text-neutral-400 font-mono max-w-xl leading-relaxed">
              <Typewriter text={PERSONAL_INFO.role} speed={40} delay={500} />
            </div>

            <p className="max-w-md text-neutral-400 text-sm leading-relaxed border-l-2 border-white pl-4">
              {PERSONAL_INFO.bio}
            </p>

            <a
              href="#projects"
              className="mt-8 px-8 py-4 bg-white text-ink font-mono font-bold hover:bg-neutral-300 transition-colors flex items-center gap-2 group max-w-min"
            >
              VIEW_LOGS{" "}
              <ArrowDown
                size={16}
                className="group-hover:translate-y-1 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="text-neutral-600" />
        </div>
      </section>

      <section
        id="skills"
        className="py-24 px-6 border-t border-neutral-900 bg-neutral-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-mono text-neutral-600">02</span>
            <h2 className="text-4xl font-bold tracking-tight">TECH_STACK</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="border border-neutral-800 p-4 hover:bg-neutral-900 hover:border-neutral-600 transition-all cursor-crosshair group"
              >
                <Code
                  size={20}
                  className="mb-4 text-neutral-600 group-hover:text-white transition-colors"
                />
                <span className="font-mono text-sm uppercase tracking-wider">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-24 px-6 bg-ink border-t border-neutral-900 z-10 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-neutral-600">03</span>
            <h2 className="text-4xl font-bold tracking-tight">EXECUTABLES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col border border-neutral-800 hover:border-neutral-500 transition-colors bg-black"
              >
                <div className="h-48 overflow-hidden relative border-b border-neutral-800">
                  <div className="absolute inset-0 bg-neutral-800 z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none mix-blend-saturation"></div>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-mono text-xl font-bold">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono border border-neutral-700 px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-neutral-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono uppercase bg-neutral-900 text-neutral-300 px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link || "#"}
                      className="inline-flex items-center gap-2 text-sm font-bold hover:text-neutral-400 transition-colors mt-auto"
                    >
                      VIEW_SOURCE <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 px-6 border-t border-neutral-900 bg-neutral-950"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-mono text-neutral-600">04</span>
              <h2 className="text-4xl font-bold tracking-tight">INIT_COMMS</h2>
            </div>
            <p className="text-neutral-400 mb-8 max-w-sm">
              I am currently available for new opportunities and collaborations.
              Let's build something efficient together.
            </p>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-3 text-2xl font-mono hover:text-neutral-400 transition-colors border-b border-white pb-1 mb-12 hover:border-neutral-400"
            >
              <Mail size={24} />
              {PERSONAL_INFO.email}
            </a>

            <div className="flex gap-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="font-mono text-sm uppercase tracking-widest hover:text-neutral-400 hover:line-through decoration-1 transition-all"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-neutral-900 p-8 border border-neutral-800 font-mono text-sm text-neutral-400 space-y-4 shadow-[8px_8px_0px_0px_rgba(30,30,30,1)]">
            <p className="text-white mb-4">// CONTACT_FORM.tsx</p>
            <div className="space-y-1">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">sendMessage</span> ={" "}
                <span className="text-yellow-400">async</span> (msg) {"=>"}{" "}
                {"{"}
              </p>
              <p className="pl-4">
                <span className="text-purple-400">if</span> (!msg.content){" "}
                <span className="text-purple-400">return</span>;
              </p>
              <p className="pl-4">
                <span className="text-purple-400">await</span> mailer.send(msg);
              </p>
              <p className="pl-4">
                <span className="text-green-400">
                  // TODO: Connect to backend API
                </span>
              </p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-neutral-900 text-center font-mono text-xs text-neutral-600">
        <p>
          &copy; {new Date().getFullYear()} JAN PHILIPPS. ALL SYSTEMS
          OPERATIONAL.
        </p>
        <p className="mt-2 opacity-50">BUILT WITH ASTRO, REACT & TAILWIND</p>
      </footer>
    </div>
  );
};

export default Homepage;
