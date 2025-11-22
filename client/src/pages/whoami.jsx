import TerminalWindow from "../component/TerminalWindow";
import GlitchText from "../component/GlitchText";
import { Terminal, Shield, Code, Cpu } from "lucide-react";

export default function Whoami() {
  return (
    <div className="min-h-screen py-12 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="root@cybers3c:~/whoami">
          <div className="mb-8 border-b border-gray-800 pb-6">
            <h1 className="text-4xl font-bold font-mono mb-4 flex items-center gap-4">
              <span className="text-primary">{">"}</span>
              <GlitchText text="IDENTITY_VERIFIED" />
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 bg-gray-800 rounded-full overflow-hidden border-2 border-primary relative group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                {/* Placeholder for avatar if user wants one later */}
                <div className="w-full h-full flex items-center justify-center text-4xl font-mono text-primary">
                  {">_"}
                </div>
              </div>
              <div className="flex-1 font-mono">
                <p className="text-lg text-white mb-2">
                  <span className="text-primary">USER:</span> INSANE
                </p>
                <p className="text-gray-400 mb-4">
                  Full-stack developer with a passion for cybersecurity. 
                  Specializing in building secure, scalable web applications and 
                  exploring system vulnerabilities.
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>STATUS: ONLINE</span>
                  <span>|</span>
                  <span>LOCATION: [REDACTED]</span>
                  <span>|</span>
                  <span>LEVEL: ADMIN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 border border-gray-800 bg-[#050505] hover:border-primary/50 transition-colors group">
              <Shield className="text-primary mb-3 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white font-bold mb-2 font-mono">SECURITY</h3>
              <p className="text-gray-500 text-sm font-mono">
                Penetration testing, vulnerability assessment, and secure coding practices.
              </p>
            </div>
            <div className="p-4 border border-gray-800 bg-[#050505] hover:border-primary/50 transition-colors group">
              <Code className="text-primary mb-3 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white font-bold mb-2 font-mono">DEVELOPMENT</h3>
              <p className="text-gray-500 text-sm font-mono">
                Full-stack web development using modern technologies like React, Node.js, and more.
              </p>
            </div>
            <div className="p-4 border border-gray-800 bg-[#050505] hover:border-primary/50 transition-colors group">
              <Cpu className="text-primary mb-3 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white font-bold mb-2 font-mono">SYSTEMS</h3>
              <p className="text-gray-500 text-sm font-mono">
                Linux administration, network analysis, and system architecture.
              </p>
            </div>
          </div>

          <div className="font-mono text-sm text-gray-400">
            <p className="mb-2 text-primary">{">"} SKILLS_MATRIX loading...</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-24">JavaScript</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[90%]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24">React</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24">Node.js</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[80%]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-24">Python</span>
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
