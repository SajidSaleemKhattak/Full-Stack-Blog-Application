// seed.js
import mongoose from "mongoose";
import Blog from "./model/blog.model.js"; // adjust path to your Blog model

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/blogappDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Run the seeder
const seedDB = async () => {
  await Blog.deleteMany({});
  // await Blog.insertMany(seedPosts);
  console.log("all blog posts deleted ✅");
};

seedDB().then(() => mongoose.connection.close());
