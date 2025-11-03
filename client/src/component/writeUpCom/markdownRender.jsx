import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import { Buffer } from "buffer"
import "../../styles/markdown.css"
import { MoveLeftIcon } from "lucide-react"
window.Buffer = Buffer

const apiUrl = import.meta.env.VITE_API_URL

export default function SingleWriteup() {
  const { slug } = useParams()   // ✅ Correct param extraction
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

  return (
    <div className="bg-foreground pt-20">
      <div className="min-h-screen lg:mx-[200px] bg-foreground text-gray-200 px-6 prose prose-invert max-w-none">
        <Link
          className="text-primary flex gap-3 py-6 items-center text-sm hover:gap-5 transition-all ease-in-out duration-300 underline-none"
          to={"/writeUps"}
        >
          <MoveLeftIcon size={15}/> Back to writeups
        </Link>

        <h1 className="text-cyan-400 text-3xl font-bold mb-2">{markdown?.title}</h1>
        <p className="text-gray-400 mb-4">
          By {markdown?.author} • {markdown?.duration} •{" "}
          {markdown?.date && new Date(markdown.date).toDateString()}
        </p>

        {/* ✅ Only render the content string */}
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {markdown?.content || ""}
        </ReactMarkdown>
      </div>
    </div>
  )
}
