import React from "react";
import Navbar from "./components/navbar";
import ApiFetchItems from "./components/ApiFetchItems";


const page = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-orange-500/35 via-pink-400/35 to-purple-800/35">
        <Navbar />
        <ApiFetchItems />
      </div>
    </>
  );
};

export default page;
