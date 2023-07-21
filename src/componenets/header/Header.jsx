import "./header.css";
import { useState, useEffect } from "react";

function Header() {
  function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

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
      let h = time.getHours();
      let m = time.getMinutes();
      let s = time.getSeconds();
      m = checkTime(m);
      s = checkTime(s);

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
    <div className="header-body-div">
      <div className="container text-center" id="data-col-row-container">
        <div className="row">
          <div className="col" id="data-col">
            {Clock()}
          </div>
          <div className="col" id="data-col"></div>
          <div className="col" id="data-col"></div>
          <div className="col" id="data-col"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
