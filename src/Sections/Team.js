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
							<img src={`https://ecellvit21mainwebsite.s3.ap-south-1.amazonaws.com/boardImages2/${props.pic}.jpg`} alt={props.name} />
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
      <DarkBg head="Team"  />
      <div className="team">
        <Board
          name="Namrata Singhal"
          designation="Managing Director"
          pic="Namrata"
          cls="one"
          linkedin="https://www.linkedin.com/in/namrata-singhal-ba8735199/"
        />
        <Board
          name="Nipun Mahajan"
          designation="Deputy Managing Director"
          pic="Nipun"
          cls="two"
          linkedin="https://www.linkedin.com/in/nipun-mahajan-6b6718165/"
        />
        <Board
          name="Pearl Motwani"
          designation="Deputy Managing Director"
          pic="Pearl"
          cls="two"
          linkedin="https://www.linkedin.com/in/pearl-motwani-862089190/"
        />
        <Board
          name="Rishabh Mehta"
          designation="Director of Operations"
          pic="Rishabh"
          cls="two"
          linkedin="https://www.linkedin.com/in/rishabh-mehta1605/"
        />
        <Board
          name="Aaditya Pareek"
          designation="Director of Projects"
          pic="Aaditya"
          cls="two"
          linkedin="https://www.linkedin.com/in/aaditya-pareek-29646318a/"
        />
        <Board
          name="Mayank Jain"
          designation="Director of Content Strategy"
          pic="Mayank"
          cls="three"
          linkedin="https://www.linkedin.com/in/mayank-1010/"
        />
        <Board
          name="Param Sharma"
          designation="Director of Design and Media"
          pic="Param"
          cls="three"
          linkedin="https://www.linkedin.com/in/paramssharma/"
        />
        <Board
          name="Yashraj Singh"
          designation="Director of Outreach"
          pic="Yashraj"
          cls="three"
          linkedin="https://www.linkedin.com/in/yashraj-singh-973374187/"
        />
        <Board
          name="Sanjiv Mohanty"
          designation="Director of Research and Development"
          pic="Sanjiv"
          cls="three"
          linkedin="https://www.linkedin.com/in/sanjiv-mohanty-480397199/"
        />
        <Board
          name="Anaswara Santhosh"
          designation="Director of Collaborations"
          pic="Anaswara"
          cls="three"
          linkedin="https://www.linkedin.com/in/anaswara-santhosh-174964199/"
        />
        <Board
          name="Sahib Dua"
          designation="Director of Finance and Sponsorship"
          pic="Sahib"
          cls="three"
          linkedin="https://www.linkedin.com/in/sahib-dua-18b7121a1/"
        />
        <Board
          name="Akriti Agarwal"
          designation="Director of Public Relations"
          pic="Akriti"
          cls="two"
          linkedin="https://www.linkedin.com/in/akriti-agarwal-5295b61a0/"
        />
        <Board
          name="Vinayak Gupta"
          designation="Director of Technology"
          pic="Vinayak"
          cls="two"
          linkedin="https://www.linkedin.com/in/vinayakguptaa/"
        />
      </div>
    </div>
  );
}

export default Team;
