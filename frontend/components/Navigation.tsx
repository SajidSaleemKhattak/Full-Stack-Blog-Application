import { Instagram, Linkedin, X } from "lucide-react";
import Link from "next/link";
const Navigation = () => {
  return (
    <div>
      <header className="flex justify-between items-center py-2 px-6">
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
    </div>
  );
};

export default Navigation;
