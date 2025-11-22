import { Link } from "react-router-dom"
import TerminalWindow from "../TerminalWindow"
import GlitchText from "../GlitchText"
import { useState, useEffect } from "react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Initializing security protocols...\nAccessing secure database...\nIdentity verified: INSANE\nWelcome back, Operator."
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        <TerminalWindow title="root@cybers3c:~/mission-briefing">
          <div className="space-y-6">
            <div className="min-h-[100px] whitespace-pre-line text-green-500 mb-8 font-mono text-sm md:text-base">
              {text}<span className="typing-cursor"></span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
              <span className="text-primary mr-4">{">"}</span>
              <GlitchText text="CYBER_SECURITY" />
              <br />
              <span className="text-gray-500 ml-8 md:ml-12 text-2xl md:text-4xl">SPECIALIST</span>
            </h1>

            <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed border-l-2 border-primary/30 pl-4 ml-2">
              Exploring the digital frontier. Documenting vulnerabilities.
              <br />
              Securing the future, one packet at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link to={"/writeUps"} className="group relative px-8 py-3 bg-primary/10 border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  {">"} EXECUTE_WRITEUPS
                </span>
                <div className="absolute inset-0 bg-primary/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Link>
              
              <Link to={"/whoami"} className="group px-8 py-3 border border-gray-600 text-gray-400 font-bold hover:border-white hover:text-white transition-all">
                <span className="flex items-center gap-2">
                  {">"} WHOAMI
                </span>
              </Link>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}
