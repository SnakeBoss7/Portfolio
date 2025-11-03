import { NavLink } from "react-router-dom"
import { DollarSignIcon } from "lucide-react"
// import { preview } from "vite"

const NavMap = ({setShowNav}) => {
  const navItems = [
    { to: '/', icon: DollarSignIcon, label: 'Home', color: 'primary1', end: true },
    { to: '/writeUps', icon: DollarSignIcon, label: 'WriteUps', color: 'primary2', end: true },
    { to: '/whoami', icon: DollarSignIcon, label: 'Whoami', color: 'primary3', end: true },
  ]

  return (
    <>
      {navItems.map(item => {
        const Icon = item.icon
        return (
          <NavLink
            onClick={() => setShowNav(false)}
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `
              flex gap-2 w-full h-12 font-extrabold text-[15px] p-2 rounded-lg 
              transition-all duration-300 tracking-tight
              ${isActive 
                ? "text-primary hover:text-green-300"
                : "text-gray-500 hover:text-white"
              }
            `}
          >
            <Icon className="flex-shrink-0" size={18} />
            <span className="font-thin align-end">{item.label}</span>
          </NavLink>
        )
      })}
    </>
  )
}

export default NavMap