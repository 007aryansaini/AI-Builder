import React from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";



export default function Home() {
  return (
    <div className="h-screen w-full sm:overflow-x-visible overflow-x-hidden  ">
      <NavFootLayout>
        <Hero />
        
      </NavFootLayout>
    </div>
  );
}
