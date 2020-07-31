import React from "react";
import './Counters.css';

function Counter(props) {
    return (
        <div className="counters">
            <div className="count">{props.count}+</div>
            <div className="spec">{props.spec}</div>
        </div>
    );
}

function Counters() {
    return (
        <div className="d-flex">
            <Counter count="15908" spec="students" />
            <Counter count="289" spec="start ups" />
            <Counter count="210" spec="mentors" />
            <Counter count="126" spec="incubetees" />
        </div>
    );
}

export default Counters;