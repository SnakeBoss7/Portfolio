import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Buffer } from "buffer"
import "../styles/markdown.css"
import { MoveLeftIcon, Github, ExternalLink, Terminal } from "lucide-react"
import TerminalWindow from "../component/TerminalWindow"
import GlitchText from "../component/GlitchText"

window.Buffer = Buffer

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"

export default function ProjectDetails() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/project/${slug}`)
        const data = await response.json()
        console.log("✅ Project fetched:", data)
        setProject(data.data)
      } catch (error) {
        console.error("Error fetching project:", error)
      }
    }
    fetchProject()
  }, [slug])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-primary font-mono">
        <span className="animate-pulse">{">"} DECRYPTING_DATA...</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 font-mono text-sm transition-colors"
          to={"/projects"}
        >
          <MoveLeftIcon size={16}/> [ RETURN_TO_BASE ]
        </Link>

        <TerminalWindow title={`root@cybers3c:~/projects/${slug}`}>
          <div className="border-b border-gray-800 pb-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-primary" size={24} />
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                <GlitchText text={project.title} />
              </h1>
            </div>
            
            <p className="text-xl text-gray-400 font-mono mb-6 border-l-2 border-primary/30 pl-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.techStack?.map((tech, index) => (
                <span key={index} className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 hover:border-primary hover:text-primary transition-all text-gray-300 text-sm font-mono">
                  <Github size={16} /> GITHUB_REPO
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black transition-all text-sm font-mono font-bold">
                  <ExternalLink size={16} /> LIVE_SYSTEM
                </a>
              )}
            </div>
          </div>

          <div className="markdown-content prose prose-invert prose-pre:bg-[#111] prose-pre:border prose-pre:border-gray-800 max-w-none font-mono">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {project.content || ""}
            </ReactMarkdown>
          </div>
        </TerminalWindow>
      </div>
    </div>
  )
}
