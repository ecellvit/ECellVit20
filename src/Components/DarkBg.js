import React from 'react';
import './DarkBg.css';

function DarkBg(props) {
    return (
        <div className="bg p-2" id="about">
            <div className="title-anchor"></div>
            <h2 className="title">{props.head}</h2>
            <p className="content">{props.content}</p>
        </div>
    );
}

export default DarkBg;