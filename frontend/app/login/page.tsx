import React from "react";
import Link from "next/link";
const pages = () => {
  return (
    <div className="flex justify-center items-center min-h-[65vh]">
      <div className="px-5 py-8 rounded-sm flex justify-center items-center">
        <form className="flex flex-col gap-5" action="">
          <input
            className="w-full px-2 py-1 border-1 border-gray-300 rounded-sm"
            type="text"
            placeholder="Enter Your Email"
          />
          <input
            className="w-full px-2 py-1 border-1 border-gray-300 rounded-sm"
            type="text"
            placeholder="Enter Your Password"
          />
          <Link className="w-full" href={"./create"}>
            <button className="w-full px-3 py-1 bg-black text-white cursor-pointer hover:bg-gray-700">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default pages;
