import React from 'react';
import Loader from './Components/Loader';
import Landing from './Sections/Landing';
import Footer from './Sections/Footer';
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
        <Register />
        <Footer />
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default Main;