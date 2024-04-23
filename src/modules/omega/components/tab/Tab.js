import React, { useState } from "react";
import MyTokens from "./myTokens/MyTokens";
import TokenMinting from "./tokenMinting/TokenMinting";
import Statistics from "./statistics/Statistics";
import SolanaTools from "./solanaTools/SolanaTools";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "My Token",
      title: "My Token",
      content: <MyTokens />,
    },
    {
      id: 2,
      tabTitle: "Token Minting",
      title: "Token Minting",
      content: <TokenMinting />,
    },
    {
      id: 3,
      tabTitle: "Statistics",
      title: "Statistics",
      content: <Statistics />,
    },
    {
      id: 4,
      tabTitle: "Solana Tools",
      title: "Solana Tools",
      content: <SolanaTools />,
    },
  ];

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="text-white">
      <div className="flex sm:gap-5 justify-between sm:justify-start sm:w-full    items-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabChange}
            className={`cursor-pointer sm:text-xl text-sm   font-poppins ${
              currentTab === `${tab.id}` ? "text-[#9747FF] " : ""
            }`}
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

export default Tabs;
