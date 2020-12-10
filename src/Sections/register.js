import React from 'react';
import DarkBg from '../Components/DarkBg';
import './register.css';
import { Link } from "react-router-dom";

function Register() {
    const about = "We at ECell-VIT are looking for students with the best entrepreneurial mindset. The question is-  Have you got it?";
    const button =
        (
            <div className>
                {about}
                <br></br>
                <br></br>
                <Link className="redirectButton" to="/recruitments">
                    <button className="redirectbtn">Register for recruitments</button>
                </Link>
            </div>

        );

    return (
        <span id="register">
            <DarkBg id="register" head="Recruitments" content={button} />
        </span>
    );
}

export default Register;
