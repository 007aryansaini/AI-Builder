import React, { useState, useEffect } from "react";
import { RiArrowDropRightFill } from "react-icons/ri";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Navbar({ promptData, parts }) {
    const navs = parts?.navLinks;

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update the current date every second
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []);

  // Define the days of the week and months
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return (
    <div>
      <div className="sm:px-20 px-4 sm:py-10 py-5 flex gap-2 w-[100%] sm:justify-center justify-between items-center">
        <div className="sm:w-[280px] w-[150px] h-[35px] flex justify-center items-center border  border-[#969696] rounded-[8px]">
          <div className="flex gap-1 items-center">
            <div>
              <div className="relative">
                <IconContext.Provider value={{ color: "#C3C3C3" }}>
                  <BsArrowDownShort className="-rotate-45" />
                  <BsArrowUpShort className="-rotate-45 absolute top-1 left-1" />
                </IconContext.Provider>
              </div>
            </div>

            <h5 className="text-[#C3C3C3] text-[14px]">Network</h5>
          </div>
        </div>
        <nav className="w-[440px] h-[35px] bg-[#181818] sm:flex hidden justify-center items-center border border-[#969696] rounded-[8px]">
          <ul className="flex gap-7 text-[#C3C3C3] text-sm">
            {navs &&
              navs.map((nav, index) => (
                <div key={index}>
                  <li>{nav.title}</li>
                </div>
              ))}
          </ul>
        </nav>
        <div className="flex gap-1 text-[#C3C3C3] text-sm">
          <div className="sm:flex hidden items-center gap-[1px] w-[230px] h-[35px]  justify-center border  border-[#969696] rounded-[8px]">
            <h5>{day}</h5>
            <h6 className="text-[10px]">{`${month} ${date} ${year}`}</h6>
          </div>
          <Link to="/auth/login">
            <div className=" w-[100px] h-[35px] flex justify-center items-center border  border-[#969696] rounded-[8px]">
              <h5 className="text-sm"> Login</h5>
              <IconContext.Provider value={{ size: "20px" }}>
                <h5>
                  <RiArrowDropRightFill />
                </h5>
              </IconContext.Provider>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
