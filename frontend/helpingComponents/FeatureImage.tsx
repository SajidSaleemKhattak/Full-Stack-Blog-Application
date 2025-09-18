"use client";
import { FileInput as FileInputIcon } from "lucide-react";
import { useEffect, useState } from "react";

const FeatureImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const FileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  // Clean up preview URL
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/api/blog/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.url) {
      setUploadedImage(data.url);
    }
  };

  return (
    <div className="flex flex-col gap-3 min-h-[65vh] justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <FileInputIcon size={24} />
        <input
          className="px-4 py-2 bg-gray-400 rounded-sm hover:bg-gray-200 text-sm w-3/4"
          type="file"
          onChange={FileInputHandler}
        />
      </div>

      {preview && (
        <div>
          <p>Preview</p>
          <img className="w-34 h-34 rounded-sm" src={preview} alt="preview" />
        </div>
      )}

      <button
        onClick={handleUpload}
        className="bg-black text-white px-4 p-1 text-sm rounded-sm"
      >
        {" "}
        Upload Image{" "}
      </button>

      {uploadedImage && (
        <div>
          <p>Uploaded Image:</p>
          <img src={uploadedImage} className="w-30 h-30" alt="uploaded" />
        </div>
      )}
    </div>
  );
};

export default FeatureImage;
