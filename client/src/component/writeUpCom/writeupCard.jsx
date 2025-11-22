import React from "react"
import { Link } from "react-router-dom"
import { FileText, Clock, Calendar } from "lucide-react"
import GlitchText from "../GlitchText"

function WriteupCard({ meta, slug }) {
  return (
    <Link to={`/writeUps/${slug}`} className="block h-full">
      <div className="group relative h-full flex flex-col justify-between p-5 border border-gray-800 bg-[#0a0a0a] hover:border-primary/50 transition-all duration-300 overflow-hidden">
        {/* Scanline overlay on hover */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        
        <div>
          <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
            <div className="flex items-center gap-2 text-primary/70">
              <FileText size={16} />
              <span className="text-xs font-mono tracking-widest">LOG_ENTRY</span>
            </div>
            <span className="text-[10px] font-mono text-gray-500 group-hover:text-primary transition-colors">
              ID: {slug.substring(0, 8).toUpperCase()}
            </span>
          </div>

          <h2 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors font-mono leading-tight">
            <span className="text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{">"}</span>
            <GlitchText text={meta.title} />
          </h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 border border-gray-700 text-gray-400 rounded-sm group-hover:border-primary/30 group-hover:text-primary/80 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 font-mono mt-auto pt-4 border-t border-gray-800 group-hover:border-primary/20 transition-colors">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(meta.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            {meta.duration}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default WriteupCard
