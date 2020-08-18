import React from 'react';
import DarkBg from '../Components/DarkBg';
import './Team.css';

function Board(props) {
	return (
		<div className={props.cls}>
			<div className="bmember">
				<div class="flip-box">
  					<div class="flip-box-inner">
    					<div class="flip-box-front">
      						<img src={props.pic} alt={props.name}/>
    					</div>
    					<div class="flip-box-back">
      						<a href={props.linkedin}><i className="fab fa-linkedin"></i></a>  					
      					</div>
  					</div>
				</div>
			<div className="b-overlay">
			</div>
				<h2 className="name">{props.name}</h2>
				<h3 className="desig">{props.designation}</h3>
			</div>
		</div>
	);
}

function Team() {
	return (
		<div>
			<DarkBg head="Team" content="Our Leaders" />
			<div className="team">
				<Board name="Aditya Shyamsundar" designation="Managing Director" pic="./assets/images/Aditya.jpg" cls="one" linkedin="https://www.linkedin.com/in/aditya-shyamsundar-096660180"/>
				<Board name="Khwaab Thareja" designation="Deputy Managing Director" pic="./assets/images/Khwaab.jpg" cls="two" linkedin="https://www.linkedin.com/in/khwaab-thareja-9aa178197" />
				<Board name="Sneha Kelkar" designation="Deputy Managing Director" pic="./assets/images/Sneha.jpg" cls="two" linkedin="https://in.linkedin.com/in/sneha-kelkar-14214a171"/>
				<Board name="Prithvi Murjani" designation="Director of Operations" pic="./assets/images/Prithvi.jpg" cls="three" linkedin="https://www.linkedin.com/in/prithvikm"/>
				<Board name="Sakshi Sinhal" designation="Director of External Affairs" pic="./assets/images/Sakshi.jpg" cls="three" linkedin="https://www.linkedin.com/in/sakshi-sinhal-b02a83179"/>
				<Board name="Hiren Jani" designation="Director of Sales and Registrations" pic="./assets/images/Hiren.jpg" cls="three" linkedin="http://linkedin.com/in/hiren-jani-a89734170"/>
				<Board name="Akshay Menon" designation="Director of Content Strategy" pic="./assets/images/Akshay.jpg" cls="three" linkedin="https://www.linkedin.com/in/akshay-menon-211980181"/>
				<Board name="Manan Agarwal" designation="Director of Design" pic="./assets/images/Manan.jpg" cls="three" linkedin="https://www.linkedin.com/in/manan-agarwal-31262a16b/"/>
				<Board name="Naman Parmani" designation="Director of Marketing" pic="./assets/images/NamanP.jpg" cls="three" linkedin="https://www.linkedin.com/in/naman-agarwal-950683179/"/>
				<Board name="Ishan Sawhney" designation="Director of Research and Development" pic="./assets/images/Ishan.jpg" cls="three" linkedin="https://in.linkedin.com/in/ishan-sawhney-5b82aa1a0"/>
				<Board name="Amritha Subramanian" designation="Director of Collaborations" pic="./assets/images/Amritha.jpg" cls="three" linkedin="https://www.linkedin.com/in/amritha-subramanian-092a87179"/>
				<Board name="Nimish Batra" designation="Director of Finance" pic="./assets/images/Vani.jpg" cls="three" linkedin="https://www.linkedin.com/in/batranimish"/>
				<Board name="Rahul Pandey" designation="Director of Public Relations" pic="./assets/images/Rahul.jpg" cls="three" linkedin="https://www.linkedin.com/in/rahul-pandey-35096217a"/>
				<Board name="Abhinav Jaishanker" designation="Director of Sponsorship" pic="./assets/images/Abhinav.jpg" cls="three" linkedin="https://www.linkedin.com/in/abhinav-jaishanker-b12b95179"/>
				<Board name="Naman Agarwal" designation="Director of Technology" pic="./assets/images/Naman.jpg" cls="three" linkedin="https://www.linkedin.com/in/naman-agarwal-950683179/"/>
			</div>
		</div>
	)
}



export default Team;
