import React from 'react';
import VideoItemPreview from './video_preview.js'
const VideoList = (props) =>{
	const videoItems = props.videos.map((video) =>{
		return <VideoItemPreview key = {video.etag} video={video} />
	});
	return (
	<ul className="col-md-4 list-group">
		{videoItems};
	</ul>
	);
}

export default VideoList;