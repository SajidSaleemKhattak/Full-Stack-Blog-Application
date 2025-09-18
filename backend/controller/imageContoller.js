import { v2 as cloudinary } from "cloudinary";
import ImageDOC from "../model/images.model.js";
cloudinary.config({
  cloud_name: "sajidcloud",
  api_key: "198789741789665",
  api_secret: "ofcHVRj6gyL9SJiGi12Ybjn8iF0",
});
export async function uploadImage(req, res) {
  const file = req.files.image;
  cloudinary.uploader.upload(file.tempFilePath, async (error, result) => {
    console.log(result);
    if (result) {
      const newImage = await ImageDOC.create(result);
      if (newImage) res.status(200).json(newImage);
    } else res.status(404).json(error);
  });
}
