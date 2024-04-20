import React from "react";

import { useForm } from "../../context/store";
export default function Omega() {
  const { template } = useForm();
  return (
    <div className="flex h-screen w-full bg-red-500  justify-center items-center">
      <h2>This is the second website template with title </h2>
      <h4>Title: {template?.websiteTitle}</h4>
      <h5>{template?.description}</h5>
    </div>
  );
}
