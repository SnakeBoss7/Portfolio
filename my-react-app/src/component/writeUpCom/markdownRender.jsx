import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import matter from "gray-matter"
import { Buffer } from "buffer"
import "../../styles/markdown.css"
import { ArrowLeft, LucideArrowBigLeft, MoveLeftIcon } from "lucide-react"
window.Buffer = Buffer

export default function SingleWriteup() {
  const { slug } = useParams()
  const [content, setContent] = useState("")
  const [meta, setMeta] = useState({})

useEffect(() => {
  // Correct relative path based on folder structure
  const files = import.meta.glob("../writeUps/*.md")
  console.log(Object.keys(files))
  const loadMarkdown = async () => {
    const path = `../writeUps/${slug}.md`
    const importer = files[path]

    if (!importer) {
      console.error("Markdown not found:", path)
      return
    }

    try {
      const file = await importer()
      const res = await fetch(file.default)
      const text = await res.text()
      const { data, content } = matter(text)
      setMeta(data)
      setContent(content)
    } catch (err) {
      console.error("Error loading markdown:", err)
    }
  }

  loadMarkdown()
}, [slug])


  return (
    <div className="bg-foreground pt-20">
      <div className="min-h-screen lg:mx-[200px] bg-foreground text-gray-200 p-6 prose prose-invert max-w-none">
      <Link className="text-primary flex gap-3 p-3 items-center text-lg hover:gap-5 tranistion-all ease-in-out duration-300 underline-none " to={"/writeUps"}><MoveLeftIcon/>Back to writeups</Link>
      <h1 className="text-cyan-400 text-3xl font-bold mb-2">{meta.title}</h1>
      <p className="text-gray-400 mb-4">
        By {meta.author} • {meta.duration} •{" "}
        {new Date(meta.date).toDateString()}
      </p>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
    </div>
  )
}
