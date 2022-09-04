import React from 'react';
import Gallery from 'react-grid-gallery';

const GalleryGrid = ({ imageList }) => {

    const localList = imageList.map(o => (
        {
            src: o.src,
            thumbnail: o.src,
            thumbnailWidth: 800,
            thumbnailHeight: 800/o.aspectRatio,
            isSelected: false,
            caption: o.originalName,
            //thumbnailCaption: o.originalName
        }))

        console.log(imageList)

    return (
        <div style={{
            display: "block",
            minHeight: "1px",
            textAlign: "center",
            padding: '1rem'
        }}>
            <Gallery
                images={localList} 
                enableImageSelection={false}
                showLightboxThumbnails={true}
            />
        </div>
    )
}

export default GalleryGrid;