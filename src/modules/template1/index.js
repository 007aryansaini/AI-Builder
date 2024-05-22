import React, { useEffect, useState } from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";
import Feauture from "./feauture/feature";
import TokenUtility from "./feauture/tokenutility";
import FAQ from "./feauture/faq";
import Footer from "./feauture/footer";
import Brands from "./feauture/brands";
import { useParams } from "react-router-dom";
import Navbar from "./components/navbar";


export default function Home() {
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
    <NavFootLayout>
      <Navbar parts={parts} />
      <Hero promptData={promptData} parts={parts} />
      <Feauture promptData={promptData} parts={parts} />
      <Brands promptData={promptData} parts={parts} />
      <TokenUtility promptData={promptData} parts={parts} />
      <FAQ promptData={promptData} parts={parts} />
      <Footer promptData={promptData} parts={parts} />
    </NavFootLayout>
  );
}
