import Blog from "../model/blog.model.js";

// @Get All Posts
// @api/blog/
export async function getAllBlog(req, res) {
  const allBlogs = await Blog.find();
  res.json(allBlogs);
}

// @Get Single Blog Post
// @api/blog/:id
export async function getSinglePost(req, res) {
  try {
    const { id } = req.params;
    const singlePost = await Blog.findById(id);
    if (singlePost.length == 0) return res.status(400).json("{Post Not Found}");
    res.status(200).json(singlePost);
  } catch (error) {
    res.json(error);
  }
}
// Create a single Blog Post
// @api/blog/createPost
export async function createPost(req, res) {
  try {
    const data = req.body;
    const newBlog = await Blog.create(data);
    res.status(201).json(newBlog);
  } catch (e) {
    res.status(500).json({ message: "Error creating blog", error: e.message });
  }
}

// Edit a blog Post
// @api/blog/:id
export async function editPost(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const editedBlog = await Blog.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!editedBlog) return res.status(400).json("{Error Updating Post}");

    res.status(201).json(editedBlog);
  } catch (error) {
    res.json(error);
  }
}

// Delete a blog post
// @api/delete/:id
export async function deletePost(req, res) {
  try {
    const id = req.params.id;
    const deletedPost = await Blog.findByIdAndDelete(id);
    if (!deletedPost) return res.status(404).json("{Error Deleting Post}");
    res.status(200).json(deletedPost);
  } catch (error) {
    res.json(error);
  }
}
