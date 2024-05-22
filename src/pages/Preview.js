import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Previeww = () => {
  const { id } = useParams();
  const [promptData, setPromptData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/data/promptData/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPromptData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const parts = promptData?.data;
  return (
    <div className="text-white">
      {promptData ? (
        <div>
          <h1>{promptData.title}</h1>
          <p>{parts.tagline}</p>
        
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Previeww;
