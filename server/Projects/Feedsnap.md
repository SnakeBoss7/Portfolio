---
title: "FeedSnap"
description: "Instant AI-Powered Feedback Widget for Any Website – Collect, Analyze, Act."
techStack: ["React", "Node.js", "MongoDB", "Firebase", "AI"]
link: "https://feed-snap-nine.vercel.app"
githubLink: "https://github.com/SnakeBoss7/feedSnap"
date: "2024-11-05"
author: "Rahul"
---

# 🧠 FeedSnap

> **Instant AI-Powered Feedback Widget for Any Website – Collect, Analyze, Act.**

FeedSnap lets website owners embed a single-line feedback widget on their site to collect user feedback, analyze sentiment, and manage responses — all in one dashboard.

---

## 🚀 Features

### 🎯 Core Highlights
- **Plug & Play Widget** – Add one `<script>` line to any website and start collecting feedback.
- **AI Chat Assistant** – Ask natural language queries like "Top 3 complaints this month?"
- **Analytics Dashboard** – Visualize ratings, severity trends, and sentiment insights.
- **Feedback Management** – Filter, sort, and export user feedback (CSV/JSON).
- **Team System (RBAC)** – Invite team members with roles: `admin` / `member`.
- **Email Automation** – Auto-generate and send feedback summary reports.
- **Script Generator** – Customizable widget with color, theme, and position options.

---

## 🧱 Tech Stack

| Layer | Technology | Description |
|--------|-------------|-------------|
| **Frontend** | React.js | Dynamic UI built with modern React components |
| **Backend** | Node.js + Express.js | REST APIs for auth, feedback, and analytics |
| **Database** | MongoDB (Mongoose) | Stores users, websites, and feedback |
| **Authentication** | Firebase Auth + JWT | Secure login & session management |
| **Visualization** | Chart.js / Recharts | Interactive analytics and charts |
| **Deployment** | Vercel (frontend) + Render (backend) | Fully hosted live demo |

---

## 🧩 Project Structure

```
FeedSnap/
│
├── client/                 # React frontend
│   ├── src/
│   ├── components/
│   └── pages/
│
├── server/                 # Express backend
│   ├── models/
│   │   ├── user.js
│   │   ├── webData.js
│   │   └── feedback.js
│   ├── routes/
|   ├── contoller/ 
│   ├── config/
|   ├── public/images
│   └── widgets/
│
└── README.md
```

---


## 🧠 Architecture Diagram

```
Client (React) 
   ⬇️ Fetches & Sends Data
Express Server (Node.js)
   ⬇️
MongoDB Database
   ⬆️
Firebase Auth (Token Validation)
   ⬇️
AI + Email Services
```

---

## 🌐 Live Demo & Deployment

| Type | Link |
|------|------|
| Frontend (Vercel) | https://feed-snap-nine.vercel.app|
| Backend (Render) | https://feedsnap.onrender.com |

### 🔑 Demo Credentials 

| Role | Email | Password |
|------|-------|----------|
| Member | demo@mail.com | 123 |

---

## 📊 Screenshots

| Section | Screenshot |
|---------|------------|
| Landing Page | ![Landing](https://res.cloudinary.com/dnlea05ys/image/upload/v1762328001/Screenshot_from_2025-11-05_10-58-38_tctkns.png) |
| Dashboard | ![Dashboard](https://res.cloudinary.com/dnlea05ys/image/upload/v1762327999/Screenshot_from_2025-11-05_10-56-54_dgkjeo.png) |
| Feedback Table | ![Feedback](https://res.cloudinary.com/dnlea05ys/image/upload/v1762327996/Screenshot_from_2025-11-05_10-50-48_uwwgux.png) ![mail gen](https://res.cloudinary.com/dnlea05ys/image/upload/v1762327997/Screenshot_from_2025-11-05_10-55-40_nja52r.png) |
| Analytics Page | ![Analytics](https://res.cloudinary.com/dnlea05ys/image/upload/v1762327996/Screenshot_from_2025-11-05_10-56-37_wawgjw.png) |
| Script Generator | ![Generator](https://res.cloudinary.com/dnlea05ys/image/upload/v1762327997/Screenshot_from_2025-11-05_10-56-59_dvhwlx.png) |
| Pop up Feedback UI |![feedback](https://res.cloudinary.com/dnlea05ys/image/upload/v1762327998/Screenshot_from_2025-11-05_10-57-08_azxmkx.png)|
| Pop up Chat Bot UI |![chatbot](https://res.cloudinary.com/dnlea05ys/image/upload/v1762328001/Screenshot_from_2025-11-05_10-57-41_fm3jd3.png)|
| Mail Genratino | ![mail example](https://res.cloudinary.com/dnlea05ys/image/upload/v1762327994/Screenshot_from_2025-11-05_10-56-08_vbivcy.png)|
|||

---


## 🧑‍💻 Role-Based Access (RBAC)

| Role | Permissions |
|------|-------------|
| **Admin** | Add websites, manage members, view/export feedback, change configs |
| **editor** | Add websites, view/export feedback,delete data |
| **Member** | View assigned feedback, add notes, access analytics (read-only) |

---

## 🧾 Future Roadmap

 - making it scalable with pagination + rate limiting + cache using redis , currently cache of 5 min with local storage
---

## 🧍‍♂️ Author

**RAHUL**  
BCA Student | Tech enthusiast

📧 rahuldharwal12005@gmail.com  
[Portfolio](https://portfolio-n19d.vercel.app/)