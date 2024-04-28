import React,{useState} from "react";
import { Link } from "react-router-dom";
import * as HiIcons from "react-icons/hi";
export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
  return (
    
    <header className="w-full text-white font-clash">
      <div className=" fixed w-full sm:h-[10vh] h-[8vh] bg-black/40 z-10 flex items-center">
        <div className=" max-w-[1440px] mx-auto w-full">
          <div className="w-full flex justify-between items-center sm:px-[5%] px-[4%]">
            <Link to="/">
              {" "}
              <h4 className="text-white font-bold text-2xl">LOGO</h4>
            </Link>

            <nav className="sm:flex hidden">
              <ul className="flex gap-6 items-center text-white ">
                <li>Home</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </nav>
            <div className="sm:flex hidden gap-6  items-center">
              <button>Login</button>
              <button className="bg-white text-black px-8 py-2 rounded-[20px]">
                Sign Up
              </button>
            </div>
            <div className="sm:hidden flex bg-white text-black p-2 rounded-[8px]">
              <HiIcons.HiMenuAlt4 onClick={() => setNavbar(!navbar)} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
