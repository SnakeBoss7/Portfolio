import { Github, ExternalLink, FileCode, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import GlitchText from "../GlitchText";

export default function ProjectCard({ title, description, techStack, link, githubLink, slug }) {
  return (
    <div className="group relative flex flex-col justify-between p-6 border border-gray-800 bg-[#0a0a0a] hover:border-primary/50 transition-all duration-300 overflow-hidden">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>

      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2 text-primary/80">
            <FileCode size={20} />
            <span className="text-xs font-mono tracking-widest">SECURE_FILE</span>
          </div>
          <div className="flex gap-3">
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Github size={18} />
              </a>
            )}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <Link to={`/projects/${slug}`} className="block group-hover:translate-x-1 transition-transform duration-300">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-primary">{">"}</span>
            <GlitchText text={title} />
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm mb-6 font-mono leading-relaxed border-l border-gray-800 pl-3 ml-1">
          {description}
        </p>
      </div>

      <div className="space-y-3">
        <div className="h-px w-full bg-gray-800 group-hover:bg-primary/30 transition-colors"></div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-[10px] font-mono text-primary bg-primary/5 border border-primary/20"
            >
              {tech.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
