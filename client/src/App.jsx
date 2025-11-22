import { BrowserRouter, Routes, Route } from "react-router-dom"
import "@fontsource/jetbrains-mono"
import Hero from "./component/dashboard/Hero"
import Navigation from "./component/dashboard/header"
import Writeups from "./pages/writeUp"
import Projects from "./pages/projects"
import ProjectDetails from "./pages/projectDetails"
import SingleWriteup from "./component/writeUpCom/markdownRender"
import MatrixBackground from "./component/MatrixBackground"
import Whoami from "./pages/whoami"

export default function App() {
  return (
    <BrowserRouter>
      <div className="scanlines"></div>
      <MatrixBackground />
      <Navigation />
      <div className="pt-14"> {/* Add padding for fixed header */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/writeUps" element={<Writeups />} />
          <Route path="/writeUps/:slug" element={<SingleWriteup />} />
          <Route path="/whoami" element={<Whoami />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
