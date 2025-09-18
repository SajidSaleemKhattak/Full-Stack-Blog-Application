import { Dot } from "lucide-react";
import Link from "next/link";

const Main = async () => {
  const res = await fetch("http://localhost:5000/api/blog");
  const blogPosts: any = await res.json();

  return (
    <div className="mt-5">
      <p className="text-2xl">Blogs</p>
      <p className="w-1/2 text-md">
        Here I share my personal experiances of life that includes different
        aspects.
      </p>
      <div className="text-sm mt-3">
        <button className="px-4 py-1 bg-gray-100 rounded-md mr-2">All</button>
        <button className="px-4 py-1 bg-gray-100 rounded-md mr-2">
          Coding
        </button>
        <button className="px-4 py-1 bg-gray-100 rounded-md mr-2">
          Design
        </button>
        <button className="px-4 py-1 bg-gray-100 rounded-md mr-2">
          Testing
        </button>
        <button className="px-4 py-1 bg-gray-100 rounded-md mr-2">
          Debugging
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-3">
        {blogPosts.map((eachItem: any, index: number) => (
          <Link href={""}>
            <div key={index} className="relative">
              <img
                className="w-full h-42 object-cover object-top rounded-sm"
                src="./sample.webp"
                alt="sample"
              />
              <span className="self-start w-fit py-1 px-4 rounded-xl bg-gray-600/30 backdrop-blur-md border border-white/20 text-white text-sm absolute top-2 left-2">
                {eachItem.Category || "category"}
              </span>
              <div className="flex items-center gap-0 text-gray-600 mt-2">
                <p className="text-sm">
                  {eachItem.date.split("T")[0] || "date"}
                </p>
                <Dot size={18} strokeWidth={2} />
                <p className="text-sm">
                  {eachItem.readingTime || "readingTime"}
                </p>
              </div>

              <p className="mt-2 font-medium text-lg">{eachItem.title}</p>
              <p className="text-sm w-3/4 text-gray-600">
                {eachItem.description?.split(" ").slice(0, 10).join(" ")}
                {eachItem.description?.split(" ").length > 10 && "..."}
              </p>

              <div className="flex gap-2 mt-2 items-center">
                <img
                  src="./avatar.jpg"
                  className="w-9 h-9 rounded-4xl"
                  alt=""
                />
                <p className="text-gray-400 text-sm">{eachItem.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
