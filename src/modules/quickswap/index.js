import React from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import Hero from "./feauture/hero";
import LiquidityProvisioning from "./feauture/liquidyprovisioning";
import Explore from "./feauture/explore";
import LongVolatilty from "./feauture/longvolatility";
import EarnLiquidity from "./feauture/earnliquidity";


export default function Quickwswap() {
  return (
    <div className="h-screen w-full sm:overflow-x-visible overflow-x-hidden  font-cabinet">
      <NavFootLayout>
        <Hero />
        <LiquidityProvisioning/>
        <LongVolatilty/>
        <EarnLiquidity/>
        <Explore/>
      </NavFootLayout>
    </div>
  );
}
