import React from 'react';
import './App.css';
import About from './Sections/About';
import Landing from './Sections/Landing';
import Footer from './Sections/Footer';

function App() {
  return (
    <div className="App">
      <Landing id="home" />
      <About />
      <Footer/>
    </div>
  );
}

export default App;
