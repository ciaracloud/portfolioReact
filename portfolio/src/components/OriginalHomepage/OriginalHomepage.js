import React from "react";
import illustration from "../../images/illustration.png";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Work from "../Work/Work";
import ResumeAndContact from "../ResumeAndContact/ResumeAndContact";
import Footer from "../Footer/Footer";

export default function OriginalHomepage() {
  return (
    <div className="homepage">
      <img class="illustration" src={illustration} />
      <Navbar />
      <Home />
      <About />
      <Work />
      <ResumeAndContact />
      <Footer />
    </div>
  );
}
