import { useState } from "react";
import ProjectCard from "../component/projects/projectCard";
import TerminalWindow from "../component/TerminalWindow";
import GlitchText from "../component/GlitchText";
import { Filter, Code, Shield } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "FeedSnap",
      description: "Instant AI-Powered Feedback Widget for Any Website – Collect, Analyze, Act.",
      techStack: ["React", "Node.js", "MongoDB", "Firebase", "AI"],
      link: "https://feed-snap-nine.vercel.app",
      githubLink: "https://github.com/SnakeBoss7/feedSnap",
      slug: "Feedsnap",
      category: "mern"
    },
    // Example Cyber Project (Placeholder)
    // {
    //   title: "Network Sniffer",
    //   description: "Python-based packet analyzer for detecting suspicious network traffic patterns.",
    //   techStack: ["Python", "Scapy", "Wireshark"],
    //   link: "#",
    //   githubLink: "#",
    //   category: "cyber"
    // },
    // {
    //   title: "MERN E-Commerce",
    //   description: "A full-featured e-commerce platform built with the MERN stack.",
    //   techStack: ["MongoDB", "Express", "React", "Node.js", "Redux"],
    //   link: "#",
    //   githubLink: "#",
    //   category: "mern"
    // },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen w-full text-white relative py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <TerminalWindow title="root@cybers3c:~/projects">
          <div className="mb-8 border-b border-gray-800 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h1 className="text-4xl font-bold font-mono mb-4 flex items-center gap-4">
                  <span className="text-primary">{">"}</span>
                  <GlitchText text="PROJECT_DATABASE" />
                </h1>
                <p className="text-gray-400 max-w-2xl font-mono text-sm">
                  // ACCESSING CLASSIFIED PROJECT FILES...<br/>
                  // DECRYPTING SOURCE CODE...
                </p>
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap gap-2 font-mono text-sm">
                <button 
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 border transition-all flex items-center gap-2 ${
                    filter === "all" 
                      ? "bg-primary text-black border-primary font-bold" 
                      : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"
                  }`}
                >
                  <Filter size={14} /> ALL_FILES
                </button>
                <button 
                  onClick={() => setFilter("cyber")}
                  className={`px-4 py-2 border transition-all flex items-center gap-2 ${
                    filter === "cyber" 
                      ? "bg-primary text-black border-primary font-bold" 
                      : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"
                  }`}
                >
                  <Shield size={14} /> SECURITY_TOOLS
                </button>
                <button 
                  onClick={() => setFilter("mern")}
                  className={`px-4 py-2 border transition-all flex items-center gap-2 ${
                    filter === "mern" 
                      ? "bg-primary text-black border-primary font-bold" 
                      : "border-gray-700 text-gray-400 hover:border-primary hover:text-primary"
                  }`}
                >
                  <Code size={14} /> WEB_APPS
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-500 font-mono">
                {">"} NO_FILES_FOUND_IN_CATEGORY
              </div>
            )}
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
