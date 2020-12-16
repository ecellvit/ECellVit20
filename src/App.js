import React from 'react';
import Loader from './Components/Loader';
import About from './Sections/About';
import Landing from './Sections/Landing';
import Footer from './Sections/Footer';
import Gallery from './Sections/Gallery';
import Team from './Sections/Team';
import Activities from './Sections/Activities';
import Register from './Sections/register';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


function Main() {
  return (
    <div className="App">
      <GoogleReCaptchaProvider
        reCaptchaKey="6LdXGwkaAAAAAHDub2OA24Hw42mA-7oKQIzstrRV"
      >
        <Loader timeout="1000" />
        <Landing />
        <About />
        <Activities />
        <Team />
        <Gallery />
        <Register />
        <Footer />
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default Main;