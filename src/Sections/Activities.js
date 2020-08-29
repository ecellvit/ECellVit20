import React from 'react';
import DarkBg from '../Components/DarkBg';
import Events from '../Components/Events';

function Activities() {
    return (
        <span id="activities">
            <DarkBg head="Activities" subhead="Our Events" />
            <Events />
        </span>
    );
}

export default Activities;
