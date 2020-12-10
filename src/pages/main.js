import React from 'react';
import './main.css';
import Loader from '../Components/Loader';
import About from '../Sections/About';
import Landing from '../Sections/Landing';
import Footer from '../Sections/Footer';
import Gallery from '../Sections/Gallery';
import Team from '../Sections/Team';
import Activities from '../Sections/Activities';
import Register from '../Sections/register';


function Main() {
  return (
    <div className="App">
      <Loader timeout="1000" />
      <Landing />
      <About />
      <Activities />
      <Team />
      <Gallery />
      <Register/>
      <Footer />
    </div>
  );
}

export default Main;