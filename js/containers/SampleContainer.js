import React, { Component } from 'react';
import axios 	from 'axios';
import update from 'react-addons-update';

export default class SampleContainer extends Component {

	constructor(props){
		super(props);

		//Initialize your state here
		this.state = {

		}
	}

	componentDidMount(){
		//fetch data from remote
	}

	render() {
		return (
			<div> SampleContainer </div>
		);
	}
}
