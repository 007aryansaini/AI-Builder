import React from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";
import Brands from "./feauture/brands";
import Build from "./feauture/build";

export default function Home() {
  return (
    <div className="h-screen w-full sm:overflow-x-visible overflow-x-hidden  ">
      <NavFootLayout>
        <div className="max-w-[1440px] mx-auto">
          <Hero />
          <Brands />
          <Build />
        </div>
      </NavFootLayout>
    </div>
  );
}
