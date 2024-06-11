import React from 'react';

const Media = () => {
    return (
        <>
            <h1 className="p-2">Media</h1>
            <div className="video-container p-2">
                <video width="400" controls>
                    <source src="videos/hypnotic.mp4" type="video/mp4" />
                </video>
                <video width="400" controls>
                    <source src="videos/interview.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Media;