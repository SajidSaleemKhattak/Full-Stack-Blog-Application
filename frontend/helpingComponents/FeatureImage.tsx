"use client";
import { FileInput } from "lucide-react";
import { useEffect, useState } from "react";

const FeatureImage = async () => {
  let [file, setFile] = useState<File | null>(null);
  let [preview, setPreview] = useState<any | null>(null);

  let FileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  //   Clean up of the preivous blob otherwise each time we change the pic pur memory will save its url
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  let handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/api/upload");
  };
  return (
    <div>
      <div className="flex justify-center items-center min-h-[65vh] gap-2">
        <FileInput></FileInput>
        <input
          className="px-4 py-2 bg-gray-400 rounded-sm hover:bg-gray-200"
          type="file"
          onChange={FileInputHandler}
        />
      </div>
      {preview && (
        <div>
          <p>Preview</p>
          <img src={preview} alt="preview" />
        </div>
      )}
      <button onClick={handleUpload}> Upload Image</button>
    </div>
  );
};

export default FeatureImage;
