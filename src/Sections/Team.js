import React from 'react';
import DarkBg from '../Components/DarkBg';
import './Team.css';

function Board(props) {
	return (
		<div className={props.cls}>
			<div className="bmember">
				<img className="pic" src={props.pic} alt={props.name} />
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
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="one" />
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="two" />
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="two" />
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="three" />
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="three" />
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="three" />
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="three" />
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="three" />
				<Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg" cls="three" />
			</div>
		</div>
	)
}



export default Team;