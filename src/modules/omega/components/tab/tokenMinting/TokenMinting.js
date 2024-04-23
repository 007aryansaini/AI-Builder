import React, { useState } from "react";
import { Button } from "../../ui/buttons/Button";
import SPpfToken from "./SPFToken/SPpfToken";
import SpfToken2022 from "./SPFToken2022/SpfToken2022";

function TokenMinting() {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "SPL Token",
      title: "My Token",
      content: <SPpfToken />,
    },
    {
      id: 2,
      tabTitle: "SPL Token20022",
      title: "Token Minting",
      content:<SpfToken2022/>,
    },
  ];

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div>
      <div className="bg-[#1C1C33] p-[2%] rounded-lg font-poppins flex flex-col space-y-6">
        <div className="bg-[#22223E] p-[2%] rounded-lg flex sm:flex-row flex-col justify-between sm:items-center w-full">
          <div>
            <h5 className="font-semibold  text-xl">Token Minting</h5>
            <h6 className="text-[#9CA3AF] text-base">
              Create and issue SPL Token.
            </h6>
          </div>
          <div className="flex gap-3">
            <Button>Create Token</Button>
            <Button>OpenBook Manager</Button>
          </div>
        </div>
        <div>
          <div className="bg-[#22223E] pr-[2%] py-[2%] pl-[3%] rounded-lg flex flex-col w-full">
            <h5 className="text-lg font-semibold my-2   ">TOKEN INFORMATION</h5>
            <div className="flex gap-5 items-center my-5 ">
              <div className="bg-[#17172A] flex gap-3 p-3 rounded-[10px]">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    id={tab.id}
                    disabled={currentTab === `${tab.id}`}
                    onClick={handleTabChange}
                    className={`cursor-pointer text-sm font-poppins ${
                      currentTab === `${tab.id}` ? "bg-[#9747FF] xl:px-[20px] lg:px-[14px] lg:py-2 px-4 py-2  rounded-[10px] " : ""
                    }`}
                  >
                    {tab.tabTitle}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-[1%]">
              {tabs.map((tab, index) => (
                <div key={index}>
                  {currentTab === `${tab.id}` && <div>{tab.content}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenMinting;
