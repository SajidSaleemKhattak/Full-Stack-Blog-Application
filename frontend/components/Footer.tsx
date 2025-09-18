import { Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 flex flex-col px-3 py-3 gap-4 text-sm">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <p className="text-white">
            <span className="text-lg mt-2">SajiX </span>Personal - Blog
          </p>
          <p className="w-9/10 leading-relaxed">
            My mission is to write about stuff related to web development that I
            want to know and stuff that I think that fellow developers should
            also know so that they can perform well in thier fields{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg text-white">About</p>
          <p>About</p>
          <p>Blog</p>
          <p>Carear</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg text-white">Support</p>
          <p>Support</p>
          <p>Contact</p>
          <p>Faq</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg text-white">Get Updates</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-gray-800 px-4 py-2 rounded-xs"
            />
            <button className="rounded-md bg-white text-black px-3 py-1 absolute ">
              Subscribe
            </button>
          </div>
          <div className="flex gap-2">
            <Linkedin />
            <Instagram />
            <X size={26} strokeWidth={3} />
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white">
        <p>@2025 SajiX - Copywright Reseverd</p>
        <div className="flex justify-between text-white gap-7">
          <p>Privacy Policy </p>
          <p>Terms of service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
