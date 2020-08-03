import React, { useState } from "react";
import { Link } from "react-scroll";
import './Nav.css';

function Nav() {
    const [scrolled, setScroll] = useState('');
    const [nav, setNav] = useState(false);
    const toggle = () => {
        if(nav === true){ 
            setScroll('');
            setTimeout(setNav(false), 5000);
        }else {
            setScroll('scrolled');
            setNav(true);
        }
    };
    window.addEventListener('scroll', () => {
        let activeClass = '';
        if (window.scrollY > 10){
            activeClass = 'scrolled';
        }
        setScroll(activeClass);
     });
    return (
        <div className={`topnav ${scrolled}`}>
            <img src="./assets/images/ecell-white.png" alt="E-cell VIT" height="45" />
            <Link to="gallery" spy={true} smooth={true} offset={0} duration={500}>Gallery</Link>
            <Link to="team" spy={true} smooth={true} offset={0} duration={500}>Team</Link>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>home</Link>
            <button className="icon" onClick={toggle}>
                {nav ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
            {nav
                ?
                <div className="sidenav">
                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                    <Link to="team" spy={true} smooth={true} offset={-70} duration={500}>Team</Link>
                    <Link to="gallery" spy={true} smooth={true} offset={-70} duration={500}>Gallery</Link>
                </div>
                :
                <div></div>
            }
        </div>
    );
}

export default Nav;