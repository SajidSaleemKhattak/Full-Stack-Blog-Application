import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^https?:\/\/.+/.test(v), // Basic URL validation
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
    public_id: {
      type: String,
      required: true,
      unique: true, // Cloudinary public_id is unique per resource
    },
    original_filename: {
      type: String,
      default: "unknown",
    },
    format: {
      type: String,
      default: "jpg",
    },
    // Optional: Reference to user or blog
    // uploadedBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
    // blogPost: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Blog",
    // },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const ImageDOC = mongoose.model("ImageDOC", imageSchema);

export default ImageDOC;
