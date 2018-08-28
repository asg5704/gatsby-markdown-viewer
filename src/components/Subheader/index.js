import React from "react";

const Subheader = () => {

  return (
    <nav className="bg-purple-light shadow">
      <div className="flex flex-wrap justify-start max-w p-4 md:p-8">
        <h2 className="text-white font-semibold w-1/2">Editor</h2>
        <h2 className="text-white font-semibold w-1/2">Preview</h2>
      </div>
    </nav>
  );
};

export default Subheader;
