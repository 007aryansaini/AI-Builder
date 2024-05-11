import React from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";
import Feauture from "./feauture/feature";
import TokenUtility from "./feauture/tokenutility";
import FAQ from "./feauture/faq";
import Footer from "./feauture/footer";
import Brands from "./feauture/brands";


export default function Home() {
  return (
    <NavFootLayout>
      <Hero />
      <Feauture />
      <Brands/>
      <TokenUtility />
      <FAQ />
      <Footer />
    </NavFootLayout>
  );
}
