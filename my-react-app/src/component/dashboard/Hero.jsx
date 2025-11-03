import {DollarSignIcon} from "lucide-react"
import { Link } from "react-router-dom"
import Backgroundgradient from "../background"
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4   text-white">
        <Backgroundgradient/>
      <div className="text-center font-mono max-w-3xl">
        <h1 className="text-6xl md:text-8xl flex flex-col  items-center font-extrabold mb-4">
          <span className="text-white flex">
          <span className="text-primary">{"> "}</span>
            Security
          </span>
          {/* <br /> */}
          <div className="flex justify-center"><span className="text-secondary">Writeups</span>
          <span className="text-green-400"> <DollarSignIcon className="md:h-20 md:w-20 h-16 w-16 mt-1 "/></span></div>
        </h1>
        <p className="text-md text-gray-400 font-mono md:text-xl  mb-12">
          Explore security challenges, penetration testing, and network analysis
          <br />
          Documentation of explorations across the cybersecurity landscape
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={"/writeUps"} className="px-8 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-all">
            {"> "}Explore Writeups
          </Link>
          <button className="px-8 py-3 border border-secondary bg-secondary_lg text-secondary font-bold rounded hover:bg-secondary hover:text-white transition-all">
            {"> "}About Me
          </button>
        </div>
      </div>
    </section>
  )
}