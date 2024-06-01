import React, { useEffect, useState } from "react";
import NavFootLayout from "./layouts";
import Hero from "./feautures/hero";
import bgg from "../template3/assets/bg.png";
import Explore from "./feautures/explore";
import { useParams } from "react-router-dom";

function Template4() {
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
    <div style={style.bg}>
      <NavFootLayout>
        <Hero promptData={promptData} parts={parts} />
        <Explore promptData={promptData} parts={parts} />
      </NavFootLayout>
    </div>
  );
}

export default Template4;
const style = {
  bg: {
    backgroundImage: `linear-gradient(rgba(42, 62, 17, 0.19), rgba(42, 62, 17, 0.19)), url(${bgg})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  },
};
