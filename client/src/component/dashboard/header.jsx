import { NavLink } from "react-router-dom";
import NavMap from "./navMap";
import { useState } from "react";
import Switch from "../hamburger/hamburger";

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  
  return (
    <nav className="fixed top-0 font-mono left-0 right-0 z-50 backdrop-blur-md bg-background ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <NavLink to={'/'} className="md:text-3xl text-2xl text-white font-bold cursor-pointer">
          <span>{"<CYBER"}</span>
          <span>{"S"}</span>
          <span className="text-primary">{"3"}</span>
          <span>{"C>"}</span>
        </NavLink>

        <div className="flex items-center gap-8">
          {/* Desktop navigation - always visible on md+ screens */}
          <div className="hidden md:flex gap-3 items-center">
            <NavMap setShowNav={setShowNav} />
          </div>
          
          {/* Mobile hamburger - always visible on small screens */}
          <div className="md:hidden">
            <Switch isChecked={showNav} setShowNav={setShowNav} />
          </div>
        </div>
      </div>
      
      {/* Mobile navigation menu - dropdown below navbar */}
      {showNav && (
        <div className="md:hidden flex flex-col gap-3 items-start px-4 py-4 bg-background/95 backdrop-blur-md">
          <NavMap setShowNav={setShowNav} />
        </div>
      )}
    </nav>
  );
}