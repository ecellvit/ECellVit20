import React from 'react';
import './GalleryPics.css';

function GalleryPics(){
	return(
		<div id="GalleryPics" className="d-flex">
			{/* <div className="g_imgs">
				<img alt="E-cell VIT" src="./assets/images/apple.jpg"/>
				<div className="img-overlay">
                </div>
			</div> */}
			<img className="g_imgs" alt="E-cell VIT" src="./assets/images/apple.jpg"/>
			<img className="g_imgs" alt="E-cell VIT" src="./assets/images/awesome.jpg"/>
			<img className="g_imgs" alt="E-cell VIT" src="./assets/images/skool.jpg"/>
			<img className="g_imgs" alt="E-cell VIT" src="./assets/images/speech.jpg"/>
			<img className="g_imgs" alt="E-cell VIT" src="./assets/images/entre.jpg"/>
			<img className="g_imgs" alt="E-cell VIT" src="./assets/images/idea.jpg"/>
		</div>
		)
}

export default GalleryPics;