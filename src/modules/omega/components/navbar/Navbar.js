import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { Button } from "../ui/buttons/Button";
import { RiSearch2Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FaFire } from "react-icons/fa";
import SearchModal from "../modals/SearchModal";
import { useForm } from "../../../../context/store";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
   const { template } = useForm();
  return (
    <header className="flex justify-between items-center w-full h-[10vh]  text-white">
      <div>
        <h4 className="text-xl font-semibold font-poppins">{template?.websiteTitle}</h4>
      </div>
      <nav className="">
        <ul className="md:flex items-center hidden xl:space-x-7 lg:space-x-3  font-poppins">
          <NavLinks />
          <li>
            <Link to="/" className="">
              Swap
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              Limit Order
            </Link>
          </li>{" "}
          <li className="flex items-center gap-1 text-[#9747FF] underline">
            <Link to="/" className="">
              Mintinglab
            </Link>
            <FaFire className="" />
          </li>{" "}
          <li>
            <Link to="/" className="">
              Al
            </Link>
          </li>{" "}
          <li>
            <Link to="/" className="">
              Tools
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              Token
            </Link>
          </li>
          <IconContext.Provider value={{ size: "20px" }}>
            {" "}
            <li
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Link to="/">
                <RiSearch2Line />
              </Link>
            </li>
          </IconContext.Provider>
          <SearchModal onClose={handleClose} visible={showModal} />
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
      </nav>
      <Button>Connect Wallet</Button>
    </header>
  );
};

export default Navbar;
