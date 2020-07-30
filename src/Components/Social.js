import React from "react";
import './Social.css';

function Social(props) {
    return (
        <div className={`${props.position}`}>
            <span><i className="fab fa-twitter"></i></span>
            <span><i className="fab fa-facebook-f"></i></span>
            <span><i className="fab fa-google-plus-g"></i></span>
            <span><i className="fab fa-instagram"></i></span>
        </div>
    );
}

export default Social;