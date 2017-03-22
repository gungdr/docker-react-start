import React, { Component } from 'react';

class Body extends Component{
	constructor(){
		super();
		this.state = {
			value: ''
		}
		this.onChange = this.onChange.bind(this);
	}
	onChange(event){
		this.setState({
			value : event.target.value
		});
	}
	render(){
		return(
			<div>
				<p>{this.state.value}</p>
				<input type='text' value={this.state.value} onChange={this.onChange} />
			</div>
			);
	}
}
export default Body;