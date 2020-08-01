import React from "react";
import './Footer.css';
import Social from '../Components/Social';

function Footer() {
    return (
        <div className="footer">
            <img src="./assets/images/ecell-white.png" alt="E-cell VIT" height="70" />
            <span className="iia">IDEATE. INNOVATE. ACTUATE.</span>
            <a href="mailto:info@ecellvit.com">info@ecellvit.com</a>
            <a href="tel:+91000">+911234567890</a>
            <Social position="bottom" />
        </div>
    );
}

export default Footer;