import React from 'react';
import DarkBg from '../Components/DarkBg';
import Gallery_pics from '../Components/Gallery_pics';

function Gallery(){
	return(
		<div className="gallery">
            <DarkBg id="gallery" head="Gallery"/>
            <Gallery_pics/>
        </div>
		)
}
export default Gallery;