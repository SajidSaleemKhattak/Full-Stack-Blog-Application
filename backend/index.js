import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.js";
const app = express();

// Mongoose Connectivity
try {
  await mongoose.connect("mongodb://localhost:27017/blogappDatabase");
} catch (error) {
  handleError(error);
}

//Enable the Cors
app.use(cors({ origin: "*" }));

// Parsing the incomeing Requests
app.use(express.json());

// Route Handler
app.use("/api/blog", router);

// Server Started When everything is Ready
app.listen(5000, () => {
  console.log("Server Started at Port 5000");
});
