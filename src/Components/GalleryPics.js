import React from 'react';
import './GalleryPics.css';

function Gimg(props) {
	return (
		<div className="g_imgs">
			<img alt="E-cell VIT" src={props.src} />
			<div className="img-overlay">
			</div>
		</div>
	)
}

function GalleryPics() {
	return (
		<div id="GalleryPics" className="d-flex">
			<Gimg src="./assets/images/apple.jpg" />
			<Gimg src="./assets/images/awesome.jpg" />
			<Gimg src="./assets/images/skool.jpg" />
			<Gimg src="./assets/images/speech.jpg" />
			<Gimg src="./assets/images/entre.jpg" />
			<Gimg src="./assets/images/idea.jpg" />
		</div>
	)
}

export default GalleryPics;