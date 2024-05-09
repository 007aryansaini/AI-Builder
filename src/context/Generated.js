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
      id: 1,
      name: "Template 1",
      info: <Quickwswap />,
      content: {
        tagline: "Tagline for Template 1",
        description: "Description for Template 1",
      },
    },
    {
      id: 2,
      name: "Template 2",
      info: <Template1 />,
      content: {
        tagline: "Tagline for Template 2",
        description: "Description for Template 2",
      },
    },
    {
      id: 3,
      name: "Template 3",
      info: <Cryzpto />,
      content: {
        tagline: "Tagline for Template 3",
        description: "Description for Template 3",
      },
    },
    {
      id: 4,
      name: "Template 4",
      info: <Template4 />,
      content: {
        tagline: "Tagline for Template 4",
        description: "Description for Template 4",
      },
    },
    {
      id: 5,
      name: "Template 5",
      info: <Desktop />,
      content: {
        tagline: "Tagline for Template 5",
        description: "Description for Template 5",
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
