import React, { useEffect } from 'react';
import DarkBg from '../Components/DarkBg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Board(props) {
	useEffect(() => {
		AOS.init();
	})
	return (
		<div className={props.cls} data-aos="zoom-in" data-aos-offset="-20">
			<div className="bmember">
				<div className="flip-box">
					<div className="flip-box-inner">
						<div className="flip-box-front">
							<img src={props.pic} alt={props.name} />
						</div>
						<div className="flip-box-back">
							<a href={props.linkedin}><i className="fab fa-linkedin"></i></a>
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
      <DarkBg head="Team" subhead="Our Leaders" />
      <div className="team">
        <Board
          name="Namrata Singhal"
          designation="Managing Director"
          pic="./assets/Board/Namrata.jpg"
          cls="one"
          linkedin="https://www.linkedin.com/in/namrata-singhal-ba8735199/"
        />
        <Board
          name="Nipun Mahajan"
          designation="Deputy Managing Director"
          pic="./assets/Board/Nipun.jpg"
          cls="two"
          linkedin="https://www.linkedin.com/in/nipun-mahajan-6b6718165/"
        />
        <Board
          name="Pearl Motwani"
          designation="Deputy Managing Director"
          pic="./assets/Board/Pearl.jpg"
          cls="two"
          linkedin="https://www.linkedin.com/in/pearl-motwani-862089190/"
        />
        <Board
          name="Rishabh Mehta"
          designation="Director of Operations"
          pic="./assets/Board/Rishabh.jpg"
          cls="two"
          linkedin="https://www.linkedin.com/in/rishabh-mehta1605/"
        />
        <Board
          name="Aaditya Pareek"
          designation="Director of Projects"
          pic="./assets/Board/Aaditya.jpg"
          cls="two"
          linkedin="https://www.linkedin.com/in/aaditya-pareek-29646318a/"
        />
        <Board
          name="Mayank Jain"
          designation="Director of Content Strategy"
          pic="./assets/Board/Mayank.jpg"
          cls="three"
          linkedin="https://www.linkedin.com/in/mayank-1010/"
        />
        <Board
          name="Param Sharma"
          designation="Director of Design and Media"
          pic="./assets/Board/Param.jpg"
          cls="three"
          linkedin="https://www.linkedin.com/in/paramssharma/"
        />
        <Board
          name="Yashraj Singh"
          designation="Director of Outreach"
          pic="./assets/Board/Yashraj.jpg"
          cls="three"
          linkedin="https://www.linkedin.com/in/yashraj-singh-973374187/"
        />
        <Board
          name="Sanjiv Mohanty"
          designation="Director of Research and Development"
          pic="./assets/Board/Sanjiv.jpg"
          cls="three"
          linkedin="https://www.linkedin.com/in/sanjiv-mohanty-480397199/"
        />
        <Board
          name="Anaswara Santhosh"
          designation="Director of Collaborations"
          pic="./assets/Board/Anaswara.jpg"
          cls="three"
          linkedin="https://www.linkedin.com/in/anaswara-santhosh-174964199/"
        />
        <Board
          name="Sahib Dua"
          designation="Director of Finance and Sponsorship"
          pic="./assets/Board/Sahib.jpg"
          cls="three"
          linkedin="https://www.linkedin.com/in/sahib-dua-18b7121a1/"
        />
        <Board
          name="Akriti Agarwal"
          designation="Director of Public Relations"
          pic="./assets/Board/Akriti.jpg"
          cls="two"
          linkedin="https://www.linkedin.com/in/akriti-agarwal-5295b61a0/"
        />
        <Board
          name="Vinayak Gupta"
          designation="Director of Technology"
          pic="./assets/Board/Vinayak.jpg"
          cls="two"
          linkedin="https://www.linkedin.com/in/vinayakguptaa/"
        />
      </div>
    </div>
  );
}

export default Team;
