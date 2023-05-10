// Import React library
import React from "react";

// Import loader image
import loader from "./loader.svg";

// Create Loader component
const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    {/* Render loader image */}
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    {/* Render loading title */}
    <h1 className="font-bold text-2xl text-white mt-2">{title || "Loading"}</h1>
  </div>
);

// Export Loader component
export default Loader;
