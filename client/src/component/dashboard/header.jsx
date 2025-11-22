import { NavLink } from "react-router-dom";
import NavMap from "./navMap";
import { useState, useEffect } from "react";
import Switch from "../hamburger/hamburger";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between font-mono text-sm">
        
        <div className="flex items-center gap-4">
          <NavLink to={'/'} className="text-primary font-bold hover:text-white transition-colors">
            root@cybers3c:~#
          </NavLink>
          <span className="hidden md:inline text-gray-600">|</span>
          <span className="hidden md:inline text-gray-500">SYSTEM_STATUS: ONLINE</span>
        </div>

        <div className="flex items-center gap-8">
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center">
            <NavMap setShowNav={setShowNav} />
          </div>

          <div className="hidden md:block text-gray-500">
            {time}
          </div>
          
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <Switch isChecked={showNav} setShowNav={setShowNav} />
          </div>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {showNav && (
        <div className="md:hidden flex flex-col items-start px-4 py-4 bg-[#0a0a0a] border-b border-[#333]">
          <NavMap setShowNav={setShowNav} />
        </div>
      )}
    </nav>
  );
}
