import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  description: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  readingTime: String,
  author: String,
  hidden: Boolean,
  imageUrl: String,
  category: String,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
