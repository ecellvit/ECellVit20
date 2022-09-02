import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gimg(props) {
	useEffect(() => {
		AOS.init();
	})
	return (
		<div data-aos="zoom-in-left" data-aos-offset="-20">
			<picture>
				<source media="(max-width: 960px)" srcset="./assets/Gallery/OfflineMeet-900.jpeg" />
				<source media="(min-width: 961px)" srcset="./assets/Gallery/OfflineMeet.jpeg" />
				<img
					loading='lazy'
					width={1200} height={600}
					style={{maxWidth: "90vw", height: "auto"}}
					alt="E-cell VIT"
					src={props.src}
				/>
			</picture>
		</div>
	)
}

function GalleryPics() {
	return (
		<div id="GalleryPics" className="d-flex gal">
			<Gimg src="./assets/Gallery/OfflineMeet.jpeg" />
		</div>
	)
}

export default GalleryPics;