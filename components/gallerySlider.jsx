import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const GallerySlider = ({ imageList }) => {
    console.log(imageList.map(o => o.src))
    return (
        <div>
            <ImageGallery 
            items={imageList.map(o => ({original: o.src, thumbnail: o.src}))} 
            showNav={false}
            showThumbnails={false}
            autoPlay={true}/>
        </div>
    )
}

export default GallerySlider;