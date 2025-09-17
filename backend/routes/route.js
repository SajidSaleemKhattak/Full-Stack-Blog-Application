import express from "express";
import {
  getAllBlog,
  createPost,
  editPost,
  deletePost,
  getSinglePost,
} from "../controller/blogController.js";

const router = express.Router();

// GET all blogs
router.get("/", getAllBlog);

// POST a new blog
router.post("/", createPost);

// Edit a post
router.patch("/:id", editPost);

// Delete a post
router.delete("/:id", deletePost);

// GET single Post
router.get("/:id", getSinglePost);

export default router;
