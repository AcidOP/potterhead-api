import React from "react";
import Usage from "@/Components/Usage";
import Footer from "@/Components/Footer";


export default function Homepage() {
  return (
    < >
      <span className="md:text-4xl lg:text-5xl text-xl font-extrabold text-blue-700 flex justify-center pt-10 items-center">
        Welcome to the {" "} <span className="ml-2 px-2 py-2 rounded-md bg-cyan-400 text-gray-700">Potterhead API</span> ⚡
      </span>

      <div>
        <Usage/>
    
        <Footer/>
        </div>
    </>

  )
}
