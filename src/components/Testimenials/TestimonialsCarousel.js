import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import iOne from "../../images/i01.jpg";
import iTwo from "../../images/i02.jpg";
import iThree from "../../images/i03.jpg";
import iFoor from "../../images/i04.jpg";

const TestimonialsCarousel = () => {
  return (
    <div className="testimonials-carousel">
      <div className="content">
        <div className="container">
          <div className="testimonialsWrapper">
            <div className="testimonialsLeft">
              <h5>our testimonials</h5>
              <h1>
                What employ say about <br /> <span>Glo Recruitment</span>
              </h1>
              <div className="phrase">
                <p>
                  We have introduced the value that our functions. We feel that
                  this specialist part of Human Resources are contribution in
                  digital marketing
                </p>
              </div>
              <a href="/#">view all our testimonials</a>
            </div>
            <div className="testimonialsRight">
              <OwlCarousel className="owl-theme" items={1} loop margin={8} nav>
                <div className="item">
                  <div className="testimonialCard">
                    <div className="avatarContainer">
                      <img src={iOne} alt="avatar" />
                    </div>
                    <div className="cardContent">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque aliquid suscipit cupiditate numquam? Aliquid,
                        maiores minima. Accusamus ducimus ex sint .
                      </p>
                      <span>
                        Leon Grenad - <span>CEO of HR</span>
                      </span>
                      <FormatQuoteIcon />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonialCard">
                    <div className="avatarContainer">
                      <img src={iTwo} alt="avatar" />
                    </div>
                    <div className="cardContent">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque aliquid suscipit cupiditate numquam? Aliquid,
                        maiores minima. Accusamus ducimus ex sint.
                      </p>
                      <span>
                        Jesica Lenon - <span>Manager</span>
                      </span>
                      <FormatQuoteIcon />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonialCard">
                    <div className="avatarContainer">
                      <img src={iThree} alt="avatar" />
                    </div>
                    <div className="cardContent">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque aliquid suscipit cupiditate numquam? Aliquid,
                        maiores minima. Accusamus ducimus ex sint.
                      </p>
                      <span>
                        Rafael Simon - <span>Leader</span>
                      </span>
                      <FormatQuoteIcon />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonialCard">
                    <div className="avatarContainer">
                      <img src={iFoor} alt="avatar" />
                    </div>
                    <div className="cardContent">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Itaque aliquid suscipit cupiditate numquam? Aliquid,
                        maiores minima. Accusamus ducimus ex sint.
                      </p>
                      <span>
                        Sarkan Jouel - <span>Adviser</span>
                      </span>
                      <FormatQuoteIcon />
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
