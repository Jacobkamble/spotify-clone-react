// Import React library
import React from "react";

// Create Error component with title prop
const Error = ({ title }) => (
  // Render div with flexbox styling
  <div className="w-full flex justify-center items-center">
    <h1 className="font-bold text-2xl text-white">
      {title || "Something went wrong. Please try again..."}
    </h1>
  </div>
);

// Export Error component
export default Error;
