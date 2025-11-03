import matter from "gray-matter"
import WriteupCard from "../component/writeUpCom/writeupCard"
import { Buffer } from "buffer"
import {DollarSign, PlusIcon, Search }from "lucide-react"
import { useEffect, useState } from "react"
import Backgroundgradient from "../component/background"
window.Buffer = Buffer

export default function Writeups() {
  const [writeups, setWriteups] = useState([])
console.log(writeups)
  useEffect(() => {
    const files = import.meta.glob("../component/writeUps/*.md")

    Promise.all(
      Object.entries(files).map(async ([path, resolver]) => {
        const slug = path.split("/").pop().replace(".md", "")
        const file = await resolver()
        const res = await fetch(file.default)
        const text = await res.text()
        const { data: meta } = matter(text)
        return { slug, meta }
      })
    ).then(setWriteups)
  }, [])

  return (
    <div  className=" pt-20 min-h-screen font-mono tracking-tight flex flex-col  px-4  text-white">
      <Backgroundgradient />
      <div className="md:mx-[250px] pt-10 flex flex-col gap-6">
        <h1 className="md:text-6xl text-4xl font-extrabold  flex gap-2 text-white ">
        <span className="text-primary">{">>"}</span> 
        <span className="">writeups</span>
      </h1>
  <div className="w-32   mb-3 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        <p className="md:text-lg text-sm text-gray-400">Security write-ups, explorations, and technical documentation</p>
        <button className="flex items-center  w-fit bg-secondary p-2 text-md font-bold text-white md:text-md gap-3 my-3 rounded-[3px]">
<PlusIcon size={15}/>New Write Up</button>
    {/* <input type="text" className="w-full bg-secondary_lg p-2 ring-2 outline-none focus:ring-primary " placeholder="$ Search Writeups"/> */}
    <div className="flex items-center group justify-between bg-secondary_lg p-2 ring-2 focus-within:ring-primary rounded-xs">
  <span className="text-gray-400 group-hover:text-primary"><DollarSign/></span>
  <input
    type="text"
    placeholder="Search Writeups"
    className="bg-transparent outline-none text-white w-full mx-2"
  />
  <span className="text-gray-500 text-sm  group-hover:text-primary"><Search/></span>
</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {writeups.map(({ slug, meta }) => (
          <WriteupCard key={slug} meta={meta} slug={slug} />
        ))}
      </div>
      </div>
    </div>
  )
}


