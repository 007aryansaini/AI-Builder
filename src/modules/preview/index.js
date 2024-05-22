import React from "react";
import { useTemplate } from "../../context/AiContext";
import { Link } from "react-router-dom";

const Preview = () => {
  const { id } = useTemplate();
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-[5%] pt-[3%]">
        <div className="grid grid-cols-4">
          <div className="bg-white w-full h-[300px]"></div>

          <Link to={`/generated-page/${id}`} className="text-white">
            Preview Now
          </Link>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
