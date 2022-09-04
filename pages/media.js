import React from 'react';

const Media = () => {
    return (
        <>
            <h1 className="p-2">Media</h1>
            <div className="video-container p-2">
                <video width="400" controls>
                    <source src={process.env.NEXT_PUBLIC_MEDIA_1_URL} type="video/mp4" />
                </video>
                <video width="400" controls>
                    <source src={process.env.NEXT_PUBLIC_MEDIA_2_URL} type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Media;