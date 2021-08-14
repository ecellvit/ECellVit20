import React, { useState } from "react";
import Nav from "../Components/Nav";
import Social from "../Components/Social";
import { Link } from "react-scroll";

function Landing() {
  const [head, setHead] = useState("Entrepreneurship Cell");
  window.addEventListener("resize", () => {
    var txt = "E-Cell";
    if (window.innerWidth > 400) {
      txt = "Entrepreneurship Cell";
    }
    setHead(txt);
  });
  window.addEventListener("load", () => {
    var txt = "E-Cell";
    if (window.innerWidth > 400) {
      txt = "Entrepreneurship Cell";
    }
    setHead(txt);
  });

  return (
    <div id="home">
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="landing-data">
        <Nav />
        <Social position="top" />
        <div className="col-12">
          <span className="iia">IDEATE. INNOVATE. ACTUATE.</span>
          <span className="head">{head}</span>
          <span className="vit">VIT VELLORE</span>
          <span className="down">
            <a
              href="https://bit.ly/ResoluteRegistration"
              target="_blank"
              rel="noreferrer"
            >
              <button className="redirectbtn">
                Resolute <i class="fas fa-external-link-alt"></i>
              </button>
            </a>
          </span>
        </div>
        <Link
          className="scrolldown"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          Scroll Down <i className="fa fa-angle-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
