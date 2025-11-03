import React from "react"
import { Link } from "react-router-dom"

function WriteupCard({ meta, slug }) {
  return (
    <Link to={`/writeUps/${slug}`}>
      <div className="bg-secondary_lg border border-gray-800 p-5 rounded-[4px] hover:border-primary hover:shadow-[14px] hover:shadow-primary transition-all">
        <h2 className="text-xl font-semibold text-cyan-400 mb-2">
          {meta.title}
        </h2>
        <p className="text-gray-400 text-sm mb-1">
          By <span className="text-gray-200">{meta.author}</span> •{" "}
          {meta.duration}
        </p>
        <p className="text-gray-500 text-xs mb-2">
          {new Date(meta.date).toDateString()}
        </p>
        <div className="flex flex-wrap gap-1">
          {meta.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-cyan-900/30 text-cyan-300 text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default WriteupCard
