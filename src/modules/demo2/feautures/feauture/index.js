import React, { useEffect, useState } from 'react'
import bgg from "../../assets/features.png";
import refresh from "../../assets/refresh.png";
import mini from "../../assets/robotmini.png";
import BuildTabs from '../../components/ui/tabs/buildtab/BuildTab';
import { useParams } from 'react-router-dom';
function Feauture() {
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
      <div style={style.bg}>
        <div className="max-w-[1440px] mx-auto">
          <div className="px-[5%] pt-[3%]">
            <div className="flex justify-end w-full">
              <div className="flex items-start gap-4">
                <h3 className="text-[40px] text-white font-bold w-[535px] uppercase text-right">
                  Features to help you take the best decisions
                </h3>
                <img src={refresh} className="w-[40px] mt-[2%]" alt="refresh" />
              </div>
            </div>
            <div className="flex w-fulll items-end justify-end mt-[10%]">
              <div className=" w-[50%] h-[600px] ">
                <div className="bg-[#020617] w-full h-full rounded-[28px] pt-[8%] pl-[6%]">
                  <BuildTabs promptData={promptData} parts={parts} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="absolute left-0 top-[8%] " src={mini} alt="mini" />
      </div>
    </div>
  );
}

export default Feauture;

const style = {
  bg: {
    backgroundImage: `linear-gradient(rgba(42, 62, 17, 0.19), rgba(42, 62, 17, 0.19)), url(${bgg})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "979px",
    position: "relative",
    zIndex: "999",
  },
};