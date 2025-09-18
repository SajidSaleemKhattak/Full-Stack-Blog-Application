import { Dot, Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
const Navigation = async () => {
  const res = await fetch("http://localhost:5000/api/blog");
  const primaryImage = await res.json();
  let randomImageObj =
    primaryImage[Math.floor(Math.random() * primaryImage.length)];
  // console.log(randomImageObj);
  return (
    <div className="relative px-1 py-1  ">
      <img
        src={randomImageObj.imageUrl}
        alt="Featured Blog"
        className="w-full h-screen rounded-md"
      />
      <header className="flex justify-between items-center py-4 px-6 absolute top-0 w-full text-white">
        <p className="font-bold cursor-pointer">SajiX</p>
        <nav className="flex gap-4 list-none cursor-pointer">
          <li>Home </li>
          <li>About</li>
          <li>Contact</li>
          <Link href={"./login"}>
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

      <div className="flex justify-between absolute bottom-0 left-0 ">
        <div className="text-white w-1/2 flex flex-col">
          <p className="py-2 px-3 rounded-lg bg-gray-400/30 backdrop-blur-md border border-white/20 text-white text-sm">
            {randomImageObj.Category || "category"}
          </p>
          <p>{randomImageObj.title || "title"}</p>
          <p className="text-sm">
            {randomImageObj.description?.split(" ").slice(0, 10).join(" ")}
            {randomImageObj.description?.split(" ").length > 10 && "..."}
          </p>
        </div>
        <div className="text-sm flex flex-col text-whir]">
          <p>{randomImageObj.author || "author Name"}</p>
          <div className="flex justify-between gap-2">
            <p>{randomImageObj.date.split(" ")}</p>
            <Dot size={248} strokeWidth={1.75} />
            <p>{randomImageObj.readingTime || "readingTime"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
