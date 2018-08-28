import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Subheader from "../components/Subheader";
import "./index.css";
import "./mystyle.css";

const TemplateWrapper = ({ children }) => (
  <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
    <Helmet
      title="Gatsby Markdown Editor"
      meta={[
        { name: "author", content: "Alexander S. Garcia"},
        { name: "description", content: "Gatsby Markdown Previewer" },
        { name: "keywords", content: "markdown, gatsby, javascript, react" }
      ]}
    />
    <Header />
    <Subheader />
    <div>
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
