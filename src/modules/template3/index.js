import React from 'react'
import NavFootLayout from './layouts';
import Hero from './feautures/hero';
import bgg from "../template3/assets/bg.png";

function Template4() {
  return (
    <div style={style.bg}>
      <NavFootLayout>
        <Hero />
      </NavFootLayout>
    </div>
  );
}

export default Template4
const style = {
  bg: {
    backgroundImage: `linear-gradient(rgba(42, 62, 17, 0.19), rgba(42, 62, 17, 0.19)), url(${bgg})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  },
};