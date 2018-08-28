import React from "react";

const Header = () => {
  return (
    <nav className="bg-purple-dark">
      <div className="flex flex-wrap justify-start max-w-xl p-4 md:p-8">
        <h1 className="flex text-white font-sans">
          <a href="/" className="flex no-underline text-white text-3xl">Gatsby Markdown Editor
          </a>
        </h1>
      </div>
    </nav>
  );
};

export default Header;
