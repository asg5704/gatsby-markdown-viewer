import React from "react";

const Footer = () => (
  <div className="bg-purple-dark">
    <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-md">
      <p className="text-white">
        Created by{" "}
        <a
          href="https://alexandergarcia.me"
          className="font-bold no-underline text-white"
        >
          Alexander Garcia
        </a>
        <span className="text-sm"> with
        <a
          href="https://www.gatsbyjs.org"
          className="font-bold no-underline text-white"
        > Gatsby</a> &amp;
        <a
          href="https://www.tailwindcss.org"
          className="font-bold no-underline text-white"
        > TailwindCSS
        </a>
        </span>
      </p>
      <p>
        <a
          href="https://github.com/asg5704"
          className="font-bold no-underline text-white"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
