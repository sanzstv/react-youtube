//create new component, generate HTML, and insert into DOM
//downward dataflow: most parent component should fetch data
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoDetail from './components/video_detail.js';
import SearchBar from './components/searchbar.js';
import VideoList from './components/video_list.js';
const API_KEY =  "AIzaSyCFMcZv0ISR3A_RKE_eiG-TQQQ9BmYZOrE";


class App extends Component{
	constructor(props){
		super(props);

		this.state = { 
			videos: [], 
			selectedVideo: null 
		};

		YTSearch({key: API_KEY, term: 'penguinz0'}, (results) => {
			this.setState({
				videos: results,
				selectedVideo: results[0]
			});

		});
	}
	render(){
		return (
			<div>Search: 
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	};
}

ReactDOM.render(<App />, document.querySelector('.container'));