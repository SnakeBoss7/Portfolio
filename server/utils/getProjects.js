const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const projectsDir = path.join(__dirname, "../Projects");

function getProjectBySlug(slug) {
  const fullPath = path.join(projectsDir, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

module.exports = { getProjectBySlug };
