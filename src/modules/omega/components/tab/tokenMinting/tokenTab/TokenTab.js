import React, { useState } from "react";

const TokenTab = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "My Token",
      title: "My Token",
      content: "2",
    },
    {
      id: 2,
      tabTitle: "Token Minting",
      title: "Token Minting",
      content: "2",
    },
    {
      id: 3,
      tabTitle: "Statistics",
      title: "Statistics",
      content: "3",
    },
    {
      id: 3,
      tabTitle: "Solana Tools",
      title: "Solana Tools",
      content: "4",
    },
  ];

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="text-white ">
      <div className="flex gap-5  items-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabChange}
            className="cursor-pointer text-xl font-poppins "
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="mt-[1%]">
        {tabs.map((tab, index) => (
          <div key={index}>
            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenTab;
