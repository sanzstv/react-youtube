import React from 'react';

const VideoItemPreview = ({video, onVideoSelect}) =>{
	const thumbUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;
	console.log({onVideoSelect});
	return(
		<li onClick={() => onVideoSelect(video)} lassName="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={thumbUrl} />
				</div>
				<div className="media-body">
					<div className = "media-heading">
						{title}
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoItemPreview;