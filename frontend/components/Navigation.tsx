import { Dot, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";

const Navigation = async () => {
  const res = await fetch("http://localhost:5000/api/blog");
  const primaryImage = await res.json();

  let randomImageObj =
    primaryImage[Math.floor(Math.random() * primaryImage.length)];

  return (
    <div className="relative px-1 py-1">
      {/* Background Image */}
      <img
        src={randomImageObj.imageUrl}
        alt="Featured Blog"
        className="w-full h-[98vh] rounded-md object-cover"
      />

      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 absolute top-0 w-full text-gray-200 text-md">
        <p className="font-bold cursor-pointer text-lg">SajiX</p>

        <nav className="flex gap-4 list-none cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <Link href="./login">
            <li>Create</li>
          </Link>
        </nav>

        <nav className="flex gap-2 list-none cursor-pointer">
          <li>
            <Linkedin />
          </li>
          <li>
            <X size={26} strokeWidth={3} />
          </li>
          <li>
            <Instagram />
          </li>
        </nav>
      </header>

      {/* Bottom Content */}
      <div className="flex justify-between absolute bottom-5 left-0 w-full px-6 py-4">
        {/* Left Side */}
        <div className="text-white flex flex-col gap-2 max-w-[60%]">
          <span className="self-start w-fit py-1 px-4 rounded-xl bg-gray-400/30 backdrop-blur-md border border-white/20 text-white text-sm">
            {randomImageObj.Category || "category"}
          </span>

          <p className="text-2xl text-gray-200">
            {randomImageObj.title || "title"}
          </p>

          <p className="text-sm w-3/4 text-gray-200">
            {randomImageObj.description?.split(" ").slice(0, 10).join(" ")}
            {randomImageObj.description?.split(" ").length > 10 && "..."}
          </p>
        </div>

        {/* Right Side */}
        <div className="text-sm flex flex-col text-white items-end mt-10 ">
          <p>
            Author{" "}
            <span className="self-start w-fit py-1 px-4 rounded-xl bg-gray-400/30 backdrop-blur-md border border-white/20 text-gray-200 text-sm">
              {randomImageObj.author || "author Name"}
            </span>
          </p>
          <div className="flex items-center gap-0 pt-2">
            <p className="text-sm">
              {randomImageObj.date.split("T")[0] || "date"}
            </p>
            <Dot size={18} strokeWidth={2} />
            <p className="text-sm">
              {randomImageObj.readingTime || "readingTime"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
