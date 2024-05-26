import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./feautures/hero";
import Source from "./feautures/source";
import Feauture from "./feautures/feauture";
import FAQ from "./feautures/faq";
import Footer from "./feautures/footer";
import { useParams } from "react-router-dom";
import Token from "./feautures/token";


export default function Demo2() {
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
    <div className="font-stick">
      <Navbar promptData={promptData} parts={parts} />
      <Hero promptData={promptData} parts={parts} />
      <Source promptData={promptData} parts={parts} />
      <Feauture promptData={promptData} parts={parts} />
      <Token promptData={promptData} parts={parts} />
      <FAQ promptData={promptData} parts={parts} />
      <Footer />
    </div>
  );
}
