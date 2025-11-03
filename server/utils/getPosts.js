import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDir = path.join(process.cwd(), "writeUps/")
console.log("Posts directory:", postsDir)

// ✅ Get all posts from /content
export function getAllPosts() {
  const files = fs.readdirSync(postsDir)
  const posts = files.map((file) => {
    const filePath = path.join(postsDir, file)
    const content = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(content) // extract frontmatter
    return { ...data, slug: file.replace(".md", "") }
  })
  // sort newest first
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// ✅ Get paginated posts (limit per page)
export function getPaginatedPosts(page = 1, limit = 5) {
  const posts = getAllPosts()
  const start = (page - 1) * limit
  const end = start + limit
  const totalPages = Math.ceil(posts.length / limit)
  const paginatedPosts = posts.slice(start, end)
  return { posts: paginatedPosts, totalPages }
}

// (optional) Get single post by slug
export function getPostBySlug(slug) {
  const filePath = path.join(postsDir, `${slug}.md`)
  const content = fs.readFileSync(filePath, "utf-8")
  const { data, content: body } = matter(content)
  return { ...data, content: body }
}
