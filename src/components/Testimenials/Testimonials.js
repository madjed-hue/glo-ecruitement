import React from "react";
import Slider from "./Slider";
import "./Testimonials.css";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="sliderSection">
        <Slider />
      </div>
      <div className="carousel">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
