import React from 'react'


const ControlFooter = () => {
    return(
        <div className="fs_controls">
    	<div className="share_block">
        	<a href="javascript:void(0)" className="share_toggle">Share</a>
            <div className="share_box">
                <a href="javascript:void(0)" className="share_facebook"><i className="stand_icon icon-facebook-square"></i></a>
                <a href="javascript:void(0)" className="share_pinterest"><i className="stand_icon icon-pinterest"></i></a>                                                            
                <a href="javascript:void(0)" className="share_tweet"><i className="stand_icon icon-twitter"></i></a>
                <a href="javascript:void(0)" className="share_gplus"><i className="icon-google-plus-square"></i></a>
            </div> 
        </div>
        <div className="title_wrapper">
        	<h2 className="fs_title" style={{ color: 'rgb(168, 171, 173)', display: 'inline-block'}}>Taaaaxiiiiii!</h2>
            <span className="fs_descr" style={{color: 'rgb(168, 171, 173)', display: 'inline'}}></span>
		</div>
        <div className="fs_controls_append"><a href="javascript:void(0)" className="fs_slider_prev"></a><a href="javascript:void(0)" id="fs_play-pause" className="fs_pause"></a><a href="javascript:void(0)" className="fs_slider_next"></a>
	        <a href="javascript:void(0)" className="close_controls"></a>
        </div>
    </div>
    )
}

export default ControlFooter;