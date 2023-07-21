import "./home.css";
import { useState, useEffect } from "react";

function Home() {
  return (
    <>
      <div className="header-body">
        <h1 className="title" id="under-line">
          New Matter
        </h1>
      </div>
      <div className="container text-center" id="data-col-row-top">
        <div className="row home-data-div" id="data-row-div-home">
          <div className="col" id="data-col"></div>
          <div className="col" id="data-col">
            Utilizing advanced technologies to analyze extraterrestrial samples,
            we can unravel the mysteries of our universe.
          </div>
          <div className="col" id="data-col">
            Furthermore, focusing on Betelgeuse allows us to deepen our
            understanding of stellar evolution and the mechanisms behind its
            recent dimming.
          </div>
          <div className="col" id="data-col">
            Your visit is greatly appreciated, thank you for the exploration.
            <br />
            <br />
            Designed and developed by{" "}
            <a
              id="portfolio-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.erikmrussell.com"
            >
              Erik Russell
            </a>{" "}
            – ©2023
          </div>
        </div>
      </div>

      <div className="marquee-div">
        <p className="marquee">
          <span></span>
        </p>
      </div>
    </>
  );
}

export default Home;
