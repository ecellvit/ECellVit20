import React from "react";
import './Events.css';

function Event(props) {
    return (
        <div className="events">
            <img className="eimg" src="./assets/images/esummit.png" alt={props.name}/>
            <div className="ename">{props.name}</div>
            <div className="edesc">{props.desc}</div>
        </div>
    );
}

function Events() {
    return (
        <div className="d-flex">
            <Event name="E-summit" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil esse excepturi molestiae ab veniam sit quasi ea est quaeras" />
            <Event name="E-summit" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil esse excepturi molestiae ab veniam sit quasi ea est quaeraps" />
            <Event name="E-summit" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil esse excepturi molestiae ab veniam sit quasi ea est quaera" />
            <Event name="E-summit" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil esse excepturi molestiae ab veniam sit quasi ea est quaeraps" />
            <Event name="E-summit" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil esse excepturi molestiae ab veniam sit quasi ea est quaera" />
            <Event name="E-summit" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil esse excepturi molestiae ab veniam sit quasi ea est quaeraees" />
        </div>
    );
}

export default Events;