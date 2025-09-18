"use client";
import { FileInput as FileInputIcon, Loader } from "lucide-react";
import { useEffect, useState } from "react";

interface FeatureImageProps {
  onUpload: (url: string) => void; // 👈 send uploaded url to parent
}

const FeatureImage = ({ onUpload }: FeatureImageProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await fetch("http://localhost:5000/api/blog/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.url) {
        setUploadedImage(data.url);
        onUpload(data.url);
      }
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
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
          <img className="w-3/4 h-3/4 rounded-sm" src={preview} alt="preview" />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-black text-white px-4 p-1 text-sm rounded-sm disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>

      {loading && <Loader className="animate-spin text-black" />}

      {uploadedImage && (
        <div>
          <p>Uploaded Image:</p>
          <img src={uploadedImage} className="w-3/4 h-30" alt="uploaded" />
        </div>
      )}
    </div>
  );
};

export default FeatureImage;
