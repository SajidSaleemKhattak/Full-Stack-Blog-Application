// seed.js
import mongoose from "mongoose";
import Blog from "./model/blog.model.js"; // adjust path to your Blog model

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blogappDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedPosts = [
  {
    title: "How to create a MERN App",
    author: "Danish",
    body: "In this blog post, you’ll learn step-by-step how to build a full stack MERN application from scratch.",
    comments: [],
    date: new Date(),
    category: "MERN",
  },
  {
    title: "How to Debug Errors in a MERN App",
    author: "Sajid Saleem",
    body: "Debugging is a crucial skill. Here’s how you can catch and resolve errors in your MERN stack projects effectively.",
    comments: [],
    date: new Date(),
    category: "Debugging",
  },
  {
    title: "Mastering React Hooks",
    author: "Ali Khan",
    body: "React hooks changed the way we write components. This post covers useState, useEffect, useContext, and custom hooks.",
    comments: [],
    date: new Date(),
    category: "React",
  },
  {
    title: "Introduction to MongoDB Aggregations",
    author: "Fatima Zahra",
    body: "MongoDB aggregations are powerful. Learn how to use pipelines, stages, and operators for data analysis.",
    comments: [],
    date: new Date(),
    category: "MongoDB",
  },
  {
    title: "Express.js Middleware Explained",
    author: "Hassan Raza",
    body: "Middleware is the heart of Express. This blog explains how to write custom middleware and use built-in ones.",
    comments: [],
    date: new Date(),
    category: "Express",
  },
  {
    title: "Understanding Node.js Event Loop",
    author: "Sara Ahmed",
    body: "The event loop is the backbone of Node.js. Here’s a breakdown of how asynchronous tasks are managed.",
    comments: [],
    date: new Date(),
    category: "Node.js",
  },
  {
    title: "Securing Your MERN App",
    author: "Omar Farooq",
    body: "Learn about authentication, authorization, environment variables, and other security practices for MERN apps.",
    comments: [],
    date: new Date(),
    category: "Security",
  },
  {
    title: "JWT Authentication in Node.js",
    author: "Usman Ali",
    body: "A detailed guide on implementing JWT authentication with Node.js and Express.",
    comments: [],
    date: new Date(),
    category: "Authentication",
  },
  {
    title: "Deploying MERN Apps to Vercel",
    author: "Noor Fatima",
    body: "Learn how to deploy your MERN stack project seamlessly to Vercel with environment configurations.",
    comments: [],
    date: new Date(),
    category: "Deployment",
  },
  {
    title: "Optimizing MongoDB Queries",
    author: "Bilal Khan",
    body: "MongoDB performance tips including indexes, projections, and query optimizations.",
    comments: [],
    date: new Date(),
    category: "Database",
  },
  {
    title: "Tailwind CSS for React Developers",
    author: "Ayesha Malik",
    body: "Tailwind CSS speeds up styling in React. Learn utility classes and responsive design with Tailwind.",
    comments: [],
    date: new Date(),
    category: "CSS",
  },
  {
    title: "TypeScript with Node.js",
    author: "Hamza Yousaf",
    body: "Why TypeScript? This blog shows how to integrate TypeScript into a Node.js + Express backend.",
    comments: [],
    date: new Date(),
    category: "TypeScript",
  },
  {
    title: "Building REST APIs with Express",
    author: "Ahmad Raza",
    body: "A complete beginner’s guide to building RESTful APIs with Express.js.",
    comments: [],
    date: new Date(),
    category: "API",
  },
  {
    title: "GraphQL vs REST",
    author: "Kiran Shah",
    body: "Which one should you choose? Pros and cons of GraphQL compared to REST APIs.",
    comments: [],
    date: new Date(),
    category: "GraphQL",
  },
  {
    title: "Using Redux in React Projects",
    author: "Shahid Khan",
    body: "Redux can feel intimidating, but this blog simplifies state management with Redux and React.",
    comments: [],
    date: new Date(),
    category: "State Management",
  },
  {
    title: "Server-Side Rendering in Next.js",
    author: "Zainab Ali",
    body: "Learn how SSR works in Next.js and when to use it for better SEO and performance.",
    comments: [],
    date: new Date(),
    category: "Next.js",
  },
  {
    title: "Real-time Apps with Socket.io",
    author: "Imran Aslam",
    body: "Socket.io enables real-time communication. Here’s how to build a chat app with it.",
    comments: [],
    date: new Date(),
    category: "WebSockets",
  },
  {
    title: "Dockerizing a Node.js Application",
    author: "Asad Iqbal",
    body: "Learn how to containerize your Node.js application using Docker for consistent deployments.",
    comments: [],
    date: new Date(),
    category: "DevOps",
  },
  {
    title: "Unit Testing with Jest",
    author: "Rimsha Nadeem",
    body: "Testing is key for stable apps. Here’s how to write unit tests for your JavaScript and React code with Jest.",
    comments: [],
    date: new Date(),
    category: "Testing",
  },
  {
    title: "CI/CD with GitHub Actions",
    author: "Waqar Ali",
    body: "Automate your workflows with GitHub Actions. Learn how to set up CI/CD pipelines for MERN apps.",
    comments: [],
    date: new Date(),
    category: "CI/CD",
  },
];

// Run the seeder
const seedDB = async () => {
  await Blog.deleteMany({});
  await Blog.insertMany(seedPosts);
  console.log("Database Seeded with Blog Posts ✅");
};

seedDB().then(() => mongoose.connection.close());
