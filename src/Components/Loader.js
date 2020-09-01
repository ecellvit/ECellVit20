import React, { useState } from 'react';
import './Loader.css'

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
				<div class="loader">
					<div class="cube">
						<div class="sides">
							<div class="loader-logo"></div>
							<div class="top-side"></div>
							<div class="right"></div>
							<div class="bottom-side"></div>
							<div class="left"></div>
							<div class="front"></div>
							<div class="back"></div>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Loader; 