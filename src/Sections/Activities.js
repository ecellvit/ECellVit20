import React from 'react';
import DarkBg from '../Components/DarkBg';
import Events from '../Components/Events';

function Activities() {
    const events="Our Events";
    return (
        <span id="activities">
        	<DarkBg head="Activities" content={events}/>
            <Events/>
        </span>
    );
}

export default Activities;
