import React from "react";

export default function Navbar() {
  return (
    <header className="w-full text-white font-clash">
      <div className=" fixed w-full h-[10vh] bg-black/40 z-10 flex items-center">
        <div className="w-full flex justify-between items-center px-[4%]">
          <h4 className="text-white font-bold text-2xl">LOGO</h4>
          <nav>
            <ul className="flex gap-6 items-center text-white ">
              <li>Home</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </nav>
          <div className="flex gap-6  items-center">
            <button>Login</button>
            <button className="bg-white text-black px-8 py-2 rounded-[20px]">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}
