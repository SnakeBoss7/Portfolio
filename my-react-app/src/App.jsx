import { BrowserRouter, Routes, Route } from "react-router-dom"
import "@fontsource/jetbrains-mono"
import Hero from "./component/dashboard/Hero"
import Navigation from "./component/dashboard/header"
import Writeups from "./pages/writeUp"
import SingleWriteup from "./component/writeUpCom/markdownRender"

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/writeUps" element={<Writeups />} />
        <Route path="/writeUps/:slug" element={<SingleWriteup />} />
      </Routes>
    </BrowserRouter>
  )
}
