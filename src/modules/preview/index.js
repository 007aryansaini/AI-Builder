import React from "react";
import { useTemplate } from "../../context/AiContext";
import { Link } from "react-router-dom";
import NavFootLayout from "../home/layouts/NavFootLayout";

const Preview = () => {
  const { id } = useTemplate();
  return (
    <NavFootLayout>
      <div className="max-w-[1440px] mx-auto">
        <div className="px-[5%] pt-[10%] ">
          <div className="flex flex-col">
            <h4 className="text-white font-clash text-[30px]">Congratulations your site is Ready!!!</h4>
            <Link className="text-[20px] font-clash text-white" to={`/generated-page/${id}`} >
              Preview Now
            </Link>
            <button></button>
          </div>
        </div>
      </div>
    </NavFootLayout>
  );
};

export default Preview;
