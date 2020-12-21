import React from 'react';
import DarkBg from '../Components/DarkBg';
import Counters from '../Components/Counters';

function About() {
    const about = "Entrepreneurship Cell is a student body based in VIT, Vellore which aims at fostering entrepreneurial spirit amongst young aspirants by providing them with a platform and required resources for actuating their ideas into successful business ventures. E-Cell strives at attaining an ideal entrepreneurial environment in the campus and we believe in taking strides towards establishing an ever-growing, an ever-improving Start-Up environment. Our sole approach is to magnify the reach and to set up a diverse pool of investors, evaluators and mentors.";
    const whatVdo = "VIT TBI (Technology Business Incubator) has been established at Vellore Institute of Technology with the Sponsorship of the Department of Science and Technology, Government of India to assist budding entrepreneurs incubate their technology venture. VIT-TBI leverages all the resources that are available within the campus such as access to laboratory, workshops, development and testing centres. In addition to these resources, VIT-TBI also has a network of eminent professionals, academicians, bankers, venture capitalists and businessmen, who can extend support to the budding ventures.";
    return (
        <span id="about">
            <DarkBg id="about" head="About Us" content={about} />
            <Counters />
            <DarkBg head="VIT &nbsp;TBI" content={whatVdo} />
        </span>
    );
}

export default About;
