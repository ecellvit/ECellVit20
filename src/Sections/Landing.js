import React, { useState } from "react";
import Nav from "../Components/Nav";
import Social from "../Components/Social";
import { Link } from "react-scroll";
import './Landing.css';

function Landing() {
    const [head, setHead] = useState('Entreprenuership Cell');
    window.addEventListener('resize', () => {
        var txt = "E-Cell"
        if(window.innerWidth > 400){
            txt = 'Entreprenuership Cell';
        }
        setHead(txt);
     });
     window.addEventListener('load', () => {
        var txt = "E-Cell"
        if(window.innerWidth > 400){
            txt = 'Entreprenuership Cell';
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
                    {/* <button className="btn-know">Know More</button> */}
                </div>
                <Link className="scrolldown" to="about" spy={true} smooth={true} offset={0} duration={500}>Scroll Down <i className="fa fa-angle-right"></i></Link>
            </div>
        </div>
    );
}

export default Landing;