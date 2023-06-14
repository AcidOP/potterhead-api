import React from "react";
import Usage from "@/Components/Usage";
import Footer from "@/Components/Footer";

const Homepage = () => {
  return (
    <div className="pt-10 h-screen">
      <span className="md:text-4xl lg:text-5xl text-xl font-extrabold text-blue-700 flex justify-center mt-3 ">
        Welcome to the Potterhead API ⚡
      </span>

      <Usage />
      <Footer />
    </div>
  );
};

export default Homepage;
