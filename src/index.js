//create new component, generate HTML, and insert into DOM
//downward dataflow: most parent component should fetch data
import _ from 'lodash';
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

		this.videoSearch('penguinz0');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (results) => {
			this.setState({
				videos: results,
				selectedVideo: results[0]
			});
		});
	}

	render(){
		//throttle search to call every 400 ms
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 400);
		
		return (
			<div> 
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVi4deoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	};
}

ReactDOM.render(<App />, document.querySelector('.container'));