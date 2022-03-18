import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribeContent">
        <div className="subscribeHeading">
          <h5>who we are</h5>
          <h1>
            Subscribe <span>Newsletter</span>
          </h1>
        </div>
        <div className="subscribeForm">
          <form action="">
            <input type="text" name="" id="" placeholder="your name" />
            <input type="email" name="" id="" placeholder="your email" />
            <textarea cols="30" rows="3" placeholder="message"></textarea>
            <button type="submit">subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
