import React from "react";
import Usage from "@/Components/Usage";
import Footer from "@/Components/Footer";

const Homepage = () => {
  return (
    <div className="">
      <span className="md:text-4xl lg:text-5xl text-xl font-extrabold text-blue-700 flex justify-center pt-4 ">
        Welcome to the {" "} <a href="/" className="ml-2 px-2 rounded-md lg:bg-cyan-400 bg-cyan-300 text-gray-700">Potterhead API</a> ⚡
      </span>
      <div >
        <Usage />
        <Footer  />
      </div>
    </div>
  );
};

export default Homepage;