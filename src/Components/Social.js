import React from "react";
import './Social.css';

function Social(props) {
    return (
        <div className={`${props.position}`}>
            <a href="https://twitter.com/ecell_vit"><span><i className="fab fa-twitter"></i></span></a>
            <a href="https://www.facebook.com/ecellvit"><span><i className="fab fa-facebook-f"></i></span></a>
            <a href="https://www.linkedin.com/company/ecellvitvellore"><span><i className="fab fa-linkedin"></i></span></a>
            <a href="https://medium.com/e-cell-vit"><span><i className="fab fa-medium"></i></span></a>
            <a href="https://www.instagram.com/ecell_vit"><span><i className="fab fa-instagram"></i></span></a>
        </div>
    );
}

export default Social;