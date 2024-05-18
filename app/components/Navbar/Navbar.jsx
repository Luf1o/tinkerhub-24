"use client";

import Ham from "./ham";

export default function Navbar() {
  return (
    <nav className=" h-auto flex flex-row-reverse items-center justify-between p-5">
      <div className="w-[120px] h-8 lg:h-12 bg-white rounded-lg lg:mx-6 mx-2 text-center">
        <span className="text-black flex justify-center items-center h-full">
          Logo
        </span>
      </div>
      <div></div>
    </nav>
  );
}
