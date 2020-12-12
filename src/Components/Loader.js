import React, { useState } from 'react';

function Loader(props) {
    const [cls, setcls] = useState('');
    let test = 0;
    setTimeout(() => {test = 1}, props.timeout);
    window.addEventListener('load', () => {
        if(test === 1) {
            setcls('moved');
        } else {
            setTimeout(() => {setcls('moved')}, props.timeout/2);
        }
    })
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