import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Board(props) {
    useEffect(() => {
        AOS.init();
    });
    return (
        <div className={props.cls} data-aos="zoom-in" data-aos-offset="-20">
            <div className="bmember">
                <div className="flip-box">
                    <div className="flip-box-inner">
                        <div className="flip-box-front">
                            <img src={`assets/Board/${props.pic}.jpg`} alt={props.name} />
                        </div>
                        <div className="flip-box-back">
                            <a href={props.linkedin}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <h2 className="name">{props.name}</h2>
                <h3 className="desig">{props.designation}</h3>
            </div>
        </div>
    );
}

function DarkBg(props) {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className="bg">
            <h2 className="title" data-aos="fade-up" data-aos-offset="-20">{props.head}</h2>
            <p className="subhead" data-aos="fade-up" data-aos-offset="-20">{props.subhead}</p>
            <p className="content" data-aos="zoom-in" data-aos-offset="-20">{props.content}</p>
            {props.faculty &&
                <div className='facultyContainer'>
                    <div className='leftImage'>
                        <Board
                            name="Vidhya S"
                            designation="Faculty Coordinator"
                            pic=""
                            // cls="one"
                            linkedin=""
                        />
                    </div>
                    <div className='rightText'>
                        <p className="content" data-aos="zoom-in" data-aos-offset="-20">{props.faculty}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default DarkBg;