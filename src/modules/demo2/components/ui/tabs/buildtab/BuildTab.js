import React, { useState, useEffect } from "react";
import tick from "../../../../assets/tick.png";

const BuildTabs = ({ promptData, parts }) => {
  const [currentTab, setCurrentTab] = useState("");
  const tabs = parts?.tabfeau;

  useEffect(() => {
    if (tabs && tabs.length > 0) {
      setCurrentTab(tabs[0]._id);
    }
  }, [tabs]);

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="text-white ">
      <div className="flex sm:flex-row flex-col gap-7 items-center">
        {tabs &&
          tabs.map((tab, index) => (
            <button
              key={index}
              id={tab._id}
              disabled={currentTab === `${tab._id}`}
              onClick={handleTabChange}
              className={`cursor-pointer font-inter text-base text-[12px] font-medium  font-poppins ${
                currentTab === `${tab._id}`
                  ? "text-white bg-[#3F43F3] px-[16px] h-[40px] rounded-[30px]"
                  : "text-white bg-[#1D2531] px-[16px] h-[40px] rounded-[30px]"
              }`}
            >
              {tab.subtitle}
            </button>
          ))}
      </div>
      <div className="mt-[4%]">
        {tabs &&
          tabs.map((tab, index) => (
            <div key={index}>
              {currentTab === `${tab._id}` && (
                <div>
                  <div>
                    <h4 className="text-[28px] font-inter font-bold w-[373px]">
                      {tab.title}
                    </h4>
                    <p className="w-[481px] font-inter text-base text-[#606F84] my-[3%]">
                      {tab.paragraph}
                    </p>
                    <div className="flex flex-col gap-5 mt-[5%]">
                      {tabs &&
                        tab.mini.map((mini, index) => (
                          <div
                            key={mini._id}
                            className="flex gap-1 items-center"
                          >
                            <img src={tick} alt="tick" />
                            <h4 className="text-base font-inter font-medium">
                              {mini.title}
                            </h4>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default BuildTabs;
