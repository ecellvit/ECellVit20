import React from 'react';
import './App.css';
import About from './Sections/About';
import Landing from './Sections/Landing';
import Footer from './Sections/Footer';
import Gallery from './Sections/Gallery';

function App() {
  return (
    <div className="App">
      <Landing id="home"/>
      <About/>
      <Activities/>
      <Team/>      
      <Gallery/>
      <Footer/>
    </div>
  );
}
export default App;
