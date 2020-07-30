import React from "react";
import Nav from "../Components/Nav";
import './Landing.css';

function Landing() {
    return (
        <div id="home">
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="landing-data">
                <Nav />
                <div className="col-12">
                    <span className="iia">IDEATE. INNOVATE. ACCUTATE.</span>
                    <span className="head">ENTREPRENUERSHIP CELL</span>
                    <span className="vit">VIT VELLORE</span>
                    <button className="btn-know">Know More</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;