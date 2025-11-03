const express = require('express');
const cors = require('cors');
const path = require("path");
const fs = require("fs");
const dotenv = require('dotenv');
const {getPaginatedPosts, getPostBySlug} = require('./utils/getPosts');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/getPosts", (req, res) => {
    console.log("✅ /api/getPosts HIT")
  const page = parseInt(req.query.page) || 1
  const limit = 9 // or make it configurable
  const { posts, totalPages } = getPaginatedPosts(page, limit)
  res.json({ posts, totalPages })
})

// in server/server.js


app.get("/api/post/:slug", (req, res) => {
  const slug = req.params.slug;
  let data=getPostBySlug(slug);
  console.log({data})
  res.json({ data});
});


app.use("/api/test",(req,res)=>
  {
    res.json({mess:"up and running"});
    })

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
