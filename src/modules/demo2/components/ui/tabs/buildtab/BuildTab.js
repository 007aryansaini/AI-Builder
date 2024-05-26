import React, { useState } from "react";
import tick from "../../../../assets/tick.png";

const BuildTabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Create ",
      title: "Active Rentals",
      content: "1",
      head: "Get real-time alerts from pumping tokens!",
      paragraph:
        "Get multiple time alerts ranging from 1, 5, and 10 minutes! No more need to join another group, easily find tokens from one place.",
      minifeau: [
        {
          mini: "Pump Percentage",
        },
        {
          mini: "Influencer Alerts",
        },
        {
          mini: "DexTools Social Alerts",
        },
      ],
    },
    {
      id: 2,
      tabTitle: "Edit your website",
      title: "Overdue Rentals",
      content: "1",
      head: "Get real-time alerts from pumping tokens!",
      paragraph:
        "Get multiple time alerts ranging from 1, 5, and 10 minutes! No more need to join another group, easily find tokens from one place.",
      minifeau: [
        {
          mini: "Pump Percentage",
        },
        {
          mini: "Influencer Alerts",
        },
        {
          mini: "DexTools Social Alerts",
        },
      ],
    },
    {
      id: 3,
      tabTitle: "Add pages with AI",
      title: "Rental Backorders",
      content: "3",
      head: "Get real-time alerts from pumping tokens!",
      paragraph:
        "Get multiple time alerts ranging from 1, 5, and 10 minutes! No more need to join another group, easily find tokens from one place.",
      minifeau: [
        {
          mini: "Pump Percentage",
        },
        {
          mini: "Influencer Alerts",
        },
        {
          mini: "DexTools Social Alerts",
        },
      ],
    },
  ];
  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="text-white ">
      <div className="flex sm:flex-row flex-col gap-7 items-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabChange}
            className={`cursor-pointer font-inter text-base text-[12px] font-medium  font-poppins ${
              currentTab === `${tab.id}`
                ? "text-white bg-[#3F43F3] px-[16px] h-[40px] rounded-[30px]"
                : "text-white bg-[#1D2531] px-[16px] h-[40px] rounded-[30px]"
            }`}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="mt-[4%]">
        {tabs.map((tab, index) => (
          <div key={index}>
            {currentTab === `${tab.id}` && (
              <div>
                <div>
                  <h4 className="text-[28px] font-inter font-bold w-[373px]">
                    {tab.head}
                  </h4>
                  <p className="w-[481px] font-inter text-base text-[#606F84] my-[3%]">
                    {tab.paragraph}
                  </p>
                  <div className="flex flex-col gap-5 mt-[5%]">
                    {tab.minifeau.map((mini, index) => (
                      <div key={mini.id} className="flex gap-1 items-center">
                        <img src={tick} alt="tick" />
                        <h4 className="text-base font-inter font-medium">
                          {mini.mini}
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
