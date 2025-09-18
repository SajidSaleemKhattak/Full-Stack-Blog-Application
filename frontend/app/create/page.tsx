"use client";
import { useState } from "react";
import FeatureImage from "@/helpingComponents/FeatureImage";

export default function BlogForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "",
    author: "",
    readingTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (url: string) => {
    setForm({ ...form, imageUrl: url });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/blog/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Blog saved:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mt-25 justify-center items-center mb-5"
    >
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="border px-3 py-1 w-2/4"
      />
      <input
        name="author"
        placeholder="Author"
        value={form.author}
        onChange={handleChange}
        className="border px-3 py-1 w-2/4"
      />
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border px-3 py-1 w-2/4"
      />
      <input
        name="readingTime"
        placeholder="Reading Time"
        value={form.readingTime}
        onChange={handleChange}
        className="border px-3 py-1 w-2/4"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border px-3 py-1 w-2/4"
      />
      <FeatureImage onUpload={handleImageUpload} />
      <button
        type="submit"
        className="bg-gray-600 text-white px-3 py-1 rounded"
      >
        Submit Blog
      </button>
    </form>
  );
}
