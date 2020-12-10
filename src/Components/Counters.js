import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Counter(props) {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="counters" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="-20">
            <div className="count">{props.count}+</div>
            <div className="spec">{props.spec}</div>
        </div>
    );
}

function Counters() {
    return (
        <div className="d-flex">
            <Counter count="5000" spec="students" />
            <Counter count="289" spec="start ups" />
            <Counter count="210" spec="mentors" />
            <Counter count="100" spec="incubatees" />
        </div>
    );
}

export default Counters;
