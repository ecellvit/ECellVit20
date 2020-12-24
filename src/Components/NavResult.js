import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className={`topnav result-table-parent`}>
            <img src="./assets/Logos/ecell-white.png" alt="E-cell VIT" height="45" />
            <div>CCS Results</div>
            <Link to="/">home</Link>
        </div>
    );
}

export default Nav;
