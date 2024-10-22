import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Naveen Durgam",
  title: "Full Stack Developer",
  email: "naveendurgam74@gmail.com",
  gitHub: "DNAVEEN74",
  instagram: "naveen.durgam_7",
  linkedIn: "naveen-durgam-4b0b98302",
  twitter: "durgam_naveen07",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
