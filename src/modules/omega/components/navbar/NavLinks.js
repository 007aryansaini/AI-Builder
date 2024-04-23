import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Links";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <div
              className=" py-7 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <div className="relative w-[29px] h-[23px]">
                <div className="bg-[#9747FF] w-[13px] h-[11px] rounded-t-[3px] absolute top-0 left-0"></div>
                <div className="bg-white w-[13px] h-[11px] rounded-[3px] absolute top-0 right-0"></div>
                <div className="bg-[#9747FF] w-[13px] h-[12px] rounded-b-[3px] absolute bottom-0 left-0"></div>
                <div className="bg-white w-[13px] h-[11px] rounded-[3px] absolute bottom-0 right-0"></div>
              </div>
            </div>
            {link.submenu && (
              <div>
                <div className="absolute top-[8vh] z-20 hidden group-hover:md:block hover:md:block">
                  <div className="bg-[#1F1E2B] w-[50vw] p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold text-[#9747FF]">
                          {mysublinks.Head}
                        </h1>
                        <ul className="mt-10">
                          {mysublinks.sublink.map((slink) => (
                            <li className="text-sm text-white my-2.5">
                              <Link
                                to={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
