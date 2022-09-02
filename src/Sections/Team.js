import React, { useEffect } from "react";
import DarkBg from "../Components/DarkBg";
import AOS from "aos";
import "aos/dist/aos.css";

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

function Team() {
  return (
    <div id="team">
      <DarkBg head="Team" />
      <div className="team">
        <Board
          name="Shrishail Chavadi"
          designation="Chairperson"
          pic="Shrishail"
          cls="one"
          linkedin="https://www.linkedin.com/in/shrishailchavadi"
        />

        <Board
          name="Anannya Chuli"
          designation="Vice Chairperson"
          pic="Anannya"
          cls="two"
          linkedin="https://www.linkedin.com/in/anannya-chuli-242235203/"
        />
        <Board
          name="Kishika Malhotra"
          designation="Secretary"
          pic="Kishika"
          cls="two"
          linkedin="https://www.linkedin.com/in/kishika-malhotra-7903a31b9"
        />
        <Board
          name="Sai Himabindu Edara"
          designation="Management Head"
          pic="Bindu"
          cls="two"
          linkedin="https://www.linkedin.com/in/himabindu-edara-110531202"
        />
        <Board
          name="M S Mihir"
          designation="Editorial Head"
          pic="Mihir"
          cls="two"
          linkedin="https://www.linkedin.com/in/m-s-mihir-9456bb1b8"
        />
        <Board
          name="Shreyansh Singh Chouhan"
          designation="Design Head"
          pic="Shreyansh"
          cls="three"
          linkedin="https://www.linkedin.com/in/shreyansh-singh-chouhan-0b91521b4"
        />
        <Board
          name="M Palanikannan"
          designation="Technical Head"
          pic="Palanikannan"
          cls="three"
          linkedin="https://www.linkedin.com/in/m-palanikannan-021822200/"
        />
        <Board
          name="Pranit Modi"
          designation="Outreach Head"
          pic="Pranit"
          cls="three"
          linkedin="https://www.linkedin.com/in/pranitmodi"
        />

        <Board
          name="Yuvraj Aaditya Arya"
          designation="Research and Development Head"
          pic="Yuvraj"
          cls="three"
          linkedin="https://www.linkedin.com/in/yuvraj-aaditya-arya01"
        />
        <Board
          name="Rahul Agarwal"
          designation="Collaborations Head"
          pic="Rahul"
          cls="three"
          linkedin="https://www.linkedin.com/in/rahul-agarwal-3212401ba/"
        />
        <Board
          name="Shubhankar Gulati"
          designation="Finance Head"
          pic="Shubhankar"
          cls="three"
          linkedin="https://www.linkedin.com/in/shubhankar-gulati-62507a1ab"
        />
        <Board
          name="Pratham Sharma"
          designation="Sponsorship Head"
          pic="Pratham"
          cls="three"
          linkedin="https://www.linkedin.com/in/pratham-sharma-568794204"
        />
        <Board
          name="Harish R"
          designation="External Affairs Head"
          pic="Harish"
          cls="three"
          linkedin="https://www.linkedin.com/in/harish-r-351719175"
        />
        <Board
          name="Snigdha Singh"
          designation="Public Relations Head"
          pic="Snigdha"
          cls="three"
          linkedin="https://www.linkedin.com/in/snigdha-singh-0749a0202"
        />
      </div>
    </div>
  );
}

export default Team;
