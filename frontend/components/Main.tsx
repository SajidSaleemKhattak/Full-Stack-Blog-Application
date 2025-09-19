import { Dot } from "lucide-react";
import Link from "next/link";

const Main = async () => {
  const res = await fetch("http://localhost:5000/api/blog");
  const blogPosts: any = await res.json();

  return (
    <div className="mt-5 px-2 mb-2">
      <p className="text-2xl mt-1">Blogs</p>
      <p className="w-1/2 text-md mt-1">
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
      <div className="grid grid-cols-4 gap-4 mt-4">
        {blogPosts.map((eachItem: any, index: number) => (
          <Link href={""}>
            <div key={index} className="relative">
              <img
                className="w-full h-[35vh] object-cover object-top rounded-sm"
                src="./sample.webp"
                alt="sample"
              />
              <span className="self-start w-fit py-1 px-4 rounded-xl bg-gray-600/30 backdrop-blur-md border border-white/20 text-white text-sm absolute top-2 left-2">
                {eachItem.Category || "category"}
              </span>
              <div className="flex items-center gap-0 text-gray-600 mt-3">
                <p className="text-base">
                  {eachItem.date.split("T")[0] || "date"}
                </p>
                <Dot size={18} strokeWidth={2} />
                <p className="text-sm">
                  {eachItem.readingTime || "readingTime"}
                </p>
              </div>

              <p className="mt-2 text-lg">{eachItem.title}</p>
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
      <div className="grid grid-cols-3 grid-rows-2 gap-5 mb-0 mt-8">
        <div className=" w-full relative">
          <p className="absolute bottom-1/5 left-2/5 -translate-x-1/2 -translate-y-1/2 text-white text-xl z-10">
            Explore More{" "}
            <span className="ml-3 bg-gray-200 rounded-sm px-4 py-1 text-base text-black">
              Signup
            </span>
          </p>
          <img
            className="w-full h-80 object-cover object-center rounded-sm z-0"
            src="./p1.jpeg"
            alt="img"
          />
        </div>

        <div className="w-full col-span-2 row-span-2 relative">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl z-10">
            Follow this blog for daily updates about tech and get to know the
            insights
          </p>
          <img
            className="w-full h-[100%] object-cover object-center rounded-sm z-0"
            src="./p3.jpeg"
            alt="img "
          />
        </div>

        <div className="w-full relative">
          <p className="absolute bottom-1/5 left-2/5 -translate-x-1/2 -translate-y-1/2 text-white text-2xl z-10">
            Total Articles Available {blogPosts.length}
          </p>
          <img
            className="w-full h-80 object-cover object-center rounded-sm z-0"
            src="./p2.jpeg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
