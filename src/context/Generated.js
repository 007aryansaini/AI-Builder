import React, { createContext, useContext, useState, useEffect } from "react";
import Cryzpto from "../modules/cryzpto";
import Temp1 from "../modules/temp1";
import Quickwswap from "../modules/quickswap";
import Template1 from "../modules/template1";
import Template4 from "../modules/template3";
import Desktop from "../modules/amplichat/Desktop";
import Demo2 from "../modules/demo2";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
  const templates = [
    {
      id: "1",
      name: "Template 1",
      info: <Template1 />,
      content: {
        tagline: "Tagline for Template 1",
        description: "Description for Template 1",
      },
    },
    {
      id: "2",
      name: "Template 2",
      info: <Demo2 />,
      content: {
        tagline: "Tagline for Template 2",
        description: "Description for Template 2",
      },
    },
    {
      id: "3",
      name: "Template 3",
      info: <Cryzpto />,
      content: {
        tagline: "Tagline for Template 3",
        description: "Description for Template 3",
      },
    },
    // Add more templates as needed
  ];
const [shownTemplateIndices, setShownTemplateIndices] = useState([]);
const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(null);

// Shuffle the indices when all templates have been shown
useEffect(() => {
  if (shownTemplateIndices.length === templates.length) {
    setShownTemplateIndices([]);
  }
}, [shownTemplateIndices, templates]);

const showNextTemplate = () => {
  let availableIndices = templates.map((_, index) => index);
  availableIndices = availableIndices.filter(
    (index) => !shownTemplateIndices.includes(index)
  );

  if (availableIndices.length === 0) {
    setShownTemplateIndices([]);
    availableIndices = templates.map((_, index) => index);
  }

  const randomIndex =
    availableIndices[Math.floor(Math.random() * availableIndices.length)];
  setSelectedTemplateIndex(randomIndex);
  setShownTemplateIndices([...shownTemplateIndices, randomIndex]);
};

const showPreviousTemplate = () => {
  if (shownTemplateIndices.length === 0) {
    return;
  }

  const lastShownIndex = shownTemplateIndices[shownTemplateIndices.length - 1];
  setShownTemplateIndices(shownTemplateIndices.slice(0, -1));
  setSelectedTemplateIndex(lastShownIndex);
};

useEffect(() => {
  showNextTemplate();
}, []); // Show the first template when component mounts

if (selectedTemplateIndex === null) {
  return <div>No templates to show</div>;
}

const selectedTemplate = templates[selectedTemplateIndex].id;
console.log(selectedTemplate)

  const contextValue = {
    templates,
  
  };

  return (
    <AiContext.Provider value={contextValue}>{children}</AiContext.Provider>
  );
};

export const useAi = () => useContext(AiContext);
