import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Buffer } from "buffer"
import "../../styles/markdown.css"
import { MoveLeftIcon, FileText } from "lucide-react"
import TerminalWindow from "../TerminalWindow"
import GlitchText from "../GlitchText"
window.Buffer = Buffer

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"

export default function SingleWriteup() {
  const { slug } = useParams()
  const [markdown, setMarkdown] = useState(null)

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/post/${slug}`)
        const data = await response.json()
        console.log("✅ Markdown fetched:", data)
        setMarkdown(data.data)
      } catch (error) {
        console.error("Error fetching markdown:", error)
      }
    }
    fetchMarkdown()
  }, [slug])
  
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  if (!markdown) {
    return (
      <div className="min-h-screen flex items-center justify-center text-primary font-mono">
        <span className="animate-pulse">{">"} LOADING_LOG_ENTRY...</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Link
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 font-mono text-sm transition-colors"
          to={"/writeUps"}
        >
          <MoveLeftIcon size={16}/> [ RETURN_TO_LOGS ]
        </Link>

        <TerminalWindow title={`root@cybers3c:~/writeups/${slug}`}>
          <div className="border-b border-gray-800 pb-6 mb-8">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="text-primary" size={20} />
              <h1 className="text-2xl md:text-3xl font-bold text-white font-mono">
                <GlitchText text={markdown.title} />
              </h1>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-mono pl-8">
              <span>AUTHOR: {markdown.author}</span>
              <span>|</span>
              <span>TIME: {markdown.duration}</span>
              <span>|</span>
              <span>DATE: {markdown.date && new Date(markdown.date).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="markdown-content prose prose-invert prose-pre:bg-[#111] prose-pre:border prose-pre:border-gray-800 max-w-none font-mono">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {markdown.content || ""}
            </ReactMarkdown>
          </div>
        </TerminalWindow>
      </div>
    </div>
  )
}
