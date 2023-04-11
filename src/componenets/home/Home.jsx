import "./home.css";
import { useState, useEffect } from "react";

function Home() {
  function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

    // let months = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const formattedTime = () => {
      let day = days[time.getDay()];
      //   let y = time.getFullYear();
      let h = time.getHours();
      let m = time.getMinutes();
      let s = time.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      //   let month = months[time.getMonth()];
      //   let d = time.getDate();

      return day + " " + h + ":" + m + ":" + s;
    };

    const checkTime = (i) => {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };

    return <div id="landing-txt">{formattedTime()}</div>;
  }

  return (
    <>
    <div className="header-body">
      <h1 className="title" id="under-line">
        New Matter
      </h1>
      </div>
      <div className="container text-center" id="data-col-row-top">
        <div className="row home-data-div" id="data-row-div-home">
          <div className="col" id="data-col">
            {Clock()}
          </div>
          <div className="col" id="data-col">
            utilizing advanced technologies to analyze
          </div>
          <div className="col" id="data-col">
            extraterrestrial samples and unravel the
          </div>
          <div className="col" id="data-col">
            mysteries of our universe.
          </div>
        </div>

        <div className="row" id="data-row-div-home">
          <div className="col" id="data-col"></div>
          <div className="col" id="data-col"></div>
          <div className="col" id="data-col"></div>
          <div className="col" id="data-col">
            Designed and developed by{" "}
            <a
              id="portfolio-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.erikmrussell.com"
            >
              Erik
            </a>{" "}
            & Joyce Russell —  ©2023
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
