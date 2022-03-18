import React from "react";
import About from "./About/About";
import Aproach from "./Abroach/Aproach";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Newsletter from "./Newsletter/Newsletter";
import Ripon from "./Ripon/Ripon";
import Servesis from "./Services/Servesis";
import Testimonials from "./Testimenials/Testimonials";
import UserOptions from "./UserOptions";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContent">
        <UserOptions />
        <div className="homeBanner">
          <Banner />
        </div>
        <div className="homeFeatures">
          <Features />
        </div>
        <div className="homeAbout">
          <About />
        </div>
        <div className="homeServesis">
          <Servesis />
        </div>
        <div className="homeNewsletter">
          <Newsletter />
        </div>
        <div className="homeAproach">
          <Aproach />
        </div>
        <div className="homeTestimonials">
          <Testimonials />
        </div>
        <div className="homeRepon">
          <Ripon />
        </div>
        <div className="homeFooter">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
