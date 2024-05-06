import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import Footer from "./components/Footer";
export default function Template7() {
  return (
    <div className="bg-white w-full h-full">
      {" "}
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Footer />
    </div>
  );
}
