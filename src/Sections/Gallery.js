import React from 'react';
import DarkBg from '../Components/DarkBg';
import GalleryPics from '../Components/GalleryPics';

function Gallery() {
    return (
        <div className="gallery" id="gallery">
            {/* <DarkBg head="Gallery" /> */}
            <GalleryPics />
        </div>
    )
}
export default Gallery;