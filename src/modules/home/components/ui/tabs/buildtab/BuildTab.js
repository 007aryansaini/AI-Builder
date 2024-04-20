import React, { useState } from "react";
import Createawebsite from "./createawebsite";
import Editwebiste from "./editsite";

const BuildTabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Create a website with AI",
      title: "Active Rentals",
      content: <Createawebsite/>,
    },
    {
      id: 2,
      tabTitle: "Edit your website",
      title: "Overdue Rentals",
      content: <Editwebiste/>,
    },
    {
      id: 3,
      tabTitle: "Add pages with AI",
      title: "Rental Backorders",
      content: "3",
    },
    {
      id: 4,
      tabTitle: "Recreate any wwebsite",
      title: "Rental Backorders",
      content: "4",
    },
  ];
  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="text-white font-clash ">
      <div className="flex sm:flex-row flex-col gap-7 items-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabChange}
            className={`cursor-pointer sm:text-sm text-[12px] font-medium  font-poppins ${
              currentTab === `${tab.id}`
                ? "text-white border-b-[2px] border-white"
                : "text-gray-700"
            }`}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="mt-[4%]">
        {tabs.map((tab, index) => (
          <div key={index}>
            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildTabs;
