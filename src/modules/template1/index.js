import React from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";
import Feauture from "./feauture/feature";
import TokenUtility from "./feauture/tokenutility";
import FAQ from "./feauture/faq";
import Footer from "./feauture/footer";


export default function Home() {
  return (
    <NavFootLayout>
      <Hero />
      <Feauture/>
      <TokenUtility/>
      <FAQ/>
      <Footer/>
    </NavFootLayout>
  );
}
