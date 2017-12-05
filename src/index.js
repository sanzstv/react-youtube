//create new component, generate HTML, and insert into DOM
//downward dataflow: most parent component should fetch data
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar.js';
import VideoList from './components/video_list.js';
const API_KEY =  "AIzaSyCFMcZv0ISR3A_RKE_eiG-TQQQ9BmYZOrE";


class App extends Component{
	constructor(props){
		super(props);

		this.state = { videos: []};

		YTSearch({key: API_KEY, term: 'elsagate'}, (results) => {
			this.setState({videos: results});
		});
	}
	render(){
		return (
			<div>Search: 
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	};
}

ReactDOM.render(<App />, document.querySelector('.container'));