import React, { useState, useEffect } from "react";
import { useAi } from "../../../context/Generated";



export default function GeneratedPage() {
const { templates } = useAi();
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

const selectedTemplate = templates[selectedTemplateIndex];
const { tagline, description } = selectedTemplate.content;
  return (
    <div>
    
      <div>{selectedTemplate.name}</div>
    
      
    </div>
  );
}
