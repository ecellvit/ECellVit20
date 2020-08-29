import React, { useEffect } from 'react';
import './DarkBg.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function DarkBg(props) {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="bg">
            <h2 className="title" data-aos="fade-up" data-aos-offset="-20">{props.head}</h2>
            <p className="subhead" data-aos="fade-up" data-aos-offset="-20">{props.subhead}</p>
            <p className="content" data-aos="zoom-in" data-aos-offset="-20">{props.content}</p>
        </div>
    );
}

export default DarkBg;