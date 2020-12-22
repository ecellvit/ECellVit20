import React, { useState, useEffect } from 'react';

function Loader(props) {
    const [cls, setcls] = useState('');
    useEffect(() => {
        if (document.readyState === 'complete') setTimeout(() => { setcls('moved') }, props.timeout / 2);
        else window.addEventListener('load', () => {
            setTimeout(() => { setcls('moved') }, props.timeout / 2);
        })
    }, [props.timeout])
    return (
        <div className={`loading-screen ${cls}`}>
            <div id="loading-center">
                <div className="loader">
                    <div className="cube">
                        <div className="sides">
                            <div className="loader-logo"></div>
                            <div className="top-side"></div>
                            <div className="right"></div>
                            <div className="bottom-side"></div>
                            <div className="left"></div>
                            <div className="front"></div>
                            <div className="back"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader; 