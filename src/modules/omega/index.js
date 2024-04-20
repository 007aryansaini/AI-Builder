import React from "react";

import { useForm } from "../../context/store";
import NavFootLayout from "../home/layouts/NavFootLayout";
export default function Omega() {
  const { template } = useForm();
  return (
    <NavFootLayout>
      {" "}
      <div className="flex h-screen w-full bg-red-500 font-clash text-center px-[4%] flex-col  justify-center items-center">
        <h2>This is the second website template with title </h2>
        <h4>Title: {template?.websiteTitle}</h4>
        <h5> Description{template?.description}</h5>
      </div>
    </NavFootLayout>
  );
}
