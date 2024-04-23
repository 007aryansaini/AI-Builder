import React from "react";
import Layout from "../layouts/Layout";
import Tabs from "../components/tab/Tab";


function Home() {
  
  return (
    <div className="px-[4%]">
      <Layout>
        <div className="mt-[5%]">
       
          <Tabs />
       
        </div>
      </Layout>
    </div>
  );
}

export default Home;
