// AiContext.js
import React, { createContext, useContext, useState } from "react";
import Cryzpto from "../modules/cryzpto";
import Temp1 from "../modules/temp1";
import Quickwswap from "../modules/quickswap";
import Template1 from "../modules/template1";
import Template4 from "../modules/template3";
import Desktop from "../modules/amplichat/Desktop";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
  const [templates] = useState([
    {
      id: 2,
      name: "Template 2",
      info: <Template1 />,
      content: {
        tagline: "Tagline for Template 2",
        description: "Description for Template 2",
      },
    },
   
   
  
    // Add more templates as needed
  ]);

  const contextValue = {
    templates,
  };

  return (
    <AiContext.Provider value={contextValue}>{children}</AiContext.Provider>
  );
};

export const useAi = () => useContext(AiContext);
