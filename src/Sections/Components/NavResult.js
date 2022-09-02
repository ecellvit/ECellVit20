import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className={`result-topnav`}>
            <Link to="/"><img src="./assets/Logos/ecell-white.png" alt="E-cell VIT" height="45" /></Link>
            <div className="headline">Core Committee 2020-21</div>
        </div>
    );
}

export default Nav;
