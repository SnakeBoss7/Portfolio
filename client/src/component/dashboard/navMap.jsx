import { NavLink } from "react-router-dom"
import GlitchText from "../GlitchText"

const NavMap = ({setShowNav}) => {
  const navItems = [
    { to: '/', label: 'HOME', end: true },
    { to: '/projects', label: 'PROJECTS', end: true },
    { to: '/writeUps', label: 'WRITEUPS', end: true },
    { to: '/whoami', label: 'WHOAMI', end: true },
  ]

  return (
    <>
      {navItems.map(item => {
        return (
          <NavLink
            onClick={() => setShowNav(false)}
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `
              group flex items-center gap-2 px-4 py-2 font-mono text-sm transition-all duration-300
              ${isActive 
                ? "text-primary"
                : "text-gray-500 hover:text-white"
              }
            `}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">[</span>
            <GlitchText text={item.label} />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">]</span>
          </NavLink>
        )
      })}
    </>
  )
}

export default NavMap
