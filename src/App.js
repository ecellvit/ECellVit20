import React from 'react';
import './App.css';
import DarkBg from './Components/DarkBg';
import Landing from './Components/Landing';

function App() {
  const about = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur nihil tempore aliquid accusantium. Sit libero id minima omnis laboriosam consectetur dolores atque quam quibusdam? Soluta assumenda enim, officia quibusdam obcaecati molestias maxime ducimus ipsum ratione nobis quisquam cupiditate suscipit in velit nisi doloribus recusandae voluptatibus corporis. Accusantium tempore fugit libero ex repellendus neque eveniet minus magni omnis! Illum temporibus officiis nemo quas, numquam quis nisi dicta minima magni quidem facere obcaecati praesentium adipisci aut vero pariatur eos sed dolor!";
  const whatVdo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur nihil tempore aliquid accusantium. Sit libero id minima omnis laboriosam consectetur dolores atque quam quibusdam? Soluta assumenda enim, officia quibusdam obcaecati molestias maxime ducimus ipsum ratione nobis quisquam cupiditate suscipit in velit nisi doloribus recusandae voluptatibus corporis. Accusantium tempore fugit libero ex repellendus neque eveniet minus magni omnis! Illum temporibus officiis nemo quas, numquam quis nisi dicta minima magni quidem facere obcaecati praesentium adipisci aut vero pariatur eos sed dolor!";
  return (
    <div className="App">
      <Landing />
      <DarkBg head="About" content={about}/>
      <DarkBg head="What we do" content={whatVdo}/>
    </div>
  );
}

export default App;
