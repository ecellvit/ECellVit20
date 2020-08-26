import React, { useEffect } from 'react';
import './GalleryPics.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gimg(props) {
	useEffect(()=> {
		AOS.init();
	})
	return (
		<div className="g_imgs" data-aos="zoom-in-left" data-aos-offset="-20">
			<img alt="E-cell VIT" src={props.src} />
			<div className="img-overlay">
			</div>
		</div>
	)
}

function GalleryPics() {
	return (
		<div id="GalleryPics" className="d-flex">
			<Gimg src="./assets/Gallery/img1.jpg" />
			<Gimg src="./assets/Gallery/img2.jpg" />
			<Gimg src="./assets/Gallery/img3.jpg" />
			<Gimg src="./assets/Gallery/img4.jpg" />
			<Gimg src="./assets/Gallery/img5.jpg" />
			<Gimg src="./assets/Gallery/img6.jpg" />
		</div>
	)
}

export default GalleryPics;