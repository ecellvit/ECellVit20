import React from 'react';
import DarkBg from '../Components/DarkBg';
import Counters from '../Components/Counters';
import Events from '../Components/Events';
import './About.css';

function About() {
    const about = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur nihil tempore aliquid accusantium. Sit libero id minima omnis laboriosam consectetur dolores atque quam quibusdam? Soluta assumenda enim, officia quibusdam obcaecati molestias maxime ducimus ipsum ratione nobis quisquam cupiditate suscipit in velit nisi doloribus recusandae voluptatibus corporis. Accusantium tempore fugit libero ex repellendus neque eveniet minus magni omnis! Illum temporibus officiis nemo quas, numquam quis nisi dicta minima magni quidem facere obcaecati praesentium adipisci aut vero pariatur eos sed dolor!";
    const whatVdo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur nihil tempore aliquid accusantium. Sit libero id minima omnis laboriosam consectetur dolores atque quam quibusdam? Soluta assumenda enim, officia quibusdam obcaecati molestias maxime ducimus ipsum ratione nobis quisquam cupiditate suscipit in velit nisi doloribus recusandae voluptatibus corporis. Accusantium tempore fugit libero ex repellendus neque eveniet minus magni omnis! Illum temporibus officiis nemo quas, numquam quis nisi dicta minima magni quidem facere obcaecati praesentium adipisci aut vero pariatur eos sed dolor!";
    return (
        <span id="about">
            <DarkBg id="about" head="About" content={about} />
            <Counters />
            <DarkBg head="What we do" content={whatVdo} />
            <Events />
        </span>
    );
}

export default About;