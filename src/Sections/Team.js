import React from 'react';
import DarkBg from '../Components/DarkBg';
import './Team.css';

function Board(props){
	return(
		<div className="board">
			<img id="pic" className="board" src={props.pic}/>
			<h2 id="name" className="board">{props.name}</h2>
			<h3 id="designation" className="board">{props.designation}</h3>
		</div>
		);
}

function Team(){
	return(
	<div>
	<DarkBg head="Team" content="Our Leaders"/>
		<div className="team">
            <Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg"/>
            <Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg"/>
            <Board name="Aditya Sham" designation="Chair" pic="./assets/images/idea.jpg"/>
        </div>
    </div>
		)
}



export default Team;