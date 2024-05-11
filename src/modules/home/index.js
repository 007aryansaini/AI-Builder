import React from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";
import Brands from "./feauture/brands";
import Build from "./feauture/build";
import Products from "./feauture/products";
import Chainlist from "./feauture/chainlist";
import Pricings from "./feauture/pricing";
import FAQ from "./feauture/accordion/Faq";
import BrandSlider from "./feauture/brands/brandslider";

export default function Home() {
  return (
    <div className="h-screen w-full sm:overflow-x-visible overflow-x-hidden  ">
      <NavFootLayout>
        <div className="max-w-[1440px] mx-auto">
          <Hero />
         
          <BrandSlider/>
          <Build />
          {/* <Products/> */}
          <Chainlist/>
          <Pricings/>
          <FAQ/>
        </div>
      </NavFootLayout>
    </div>
  );
}
