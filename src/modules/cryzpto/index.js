import React, { useEffect, useState } from 'react'
import Navbar from './feautures/navbar'
import Hero from './feautures/hero'
import AboutUs from './feautures/aboutus'
import { useParams } from 'react-router-dom';

export default function Cryzpto() {
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
    <div>
      <Navbar promptData={promptData} parts={parts} />
      <Hero promptData={promptData} parts={parts} />
      <AboutUs promptData={promptData} parts={parts} />
    </div>
  );
}
