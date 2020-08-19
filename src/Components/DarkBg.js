import React from 'react';
import './DarkBg.css';

function DarkBg(props) {
    return (
        <div className="bg">
            <h2 className="title">{props.head}</h2>
            <p className="subhead">{props.subhead}</p>
            <p className="content">{props.content}</p>
        </div>
    );
}

export default DarkBg;