import React, { useState, useEffect } from "react";
import { useAi } from "../../../context/Generated";
import { useParams } from "react-router-dom";

export default function GeneratedPage() {
  const { templates } = useAi();
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    const fetchSavedIndex = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/data/promptData/${id}`
        );
        if (!response.ok) {
        throw new Error("Failed to fetch the saved index");
        }
        const data = await response.json();
        const savedIndex = parseInt(data.data.savedIndex, 10);
        setSelectedTemplateIndex(savedIndex);
      } catch (error) {
        console.error("Error fetching the saved index:", error);
        
        
      }
    };

    fetchSavedIndex();
  }, [templates]);


  if (selectedTemplateIndex === null) {
    return <div>No templates to show</div>;
  }

  const selectedTemplate = templates[selectedTemplateIndex];

  return <div>{selectedTemplate.info}</div>;
}
