import React, { Component } from "react";
// import Header from "./../pageHeader/header";
// import Footer from "./../pageFooter/footer";
// import { Link } from "react-router-dom";
import axios from 'axios'

// import { Redirect } from 'react-router-dom'

class newadd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			heading: "",
			subHeading: "",
			description: "",
			cost: "",
			error: ""
		}

		this.handleHeading = this.handleHeading.bind(this);
		this.handleSubHeading = this.handleSubHeading.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleCost = this.handleCost.bind(this);
		this.handleSubmitClick = this.handleSubmitClick.bind(this);
		this.dismissError = this.dismissError.bind(this);
    }

    handleHeading(evt){
    	this.setState({
    		heading: evt.target.value
    	});
    }

    handleSubHeading(evt){
    	this.setState({
    		subHeading: evt.target.value
    	});
    }

    handleDescription(evt){
    	this.setState({
    		description: evt.target.value
    	});
    }

    handleCost(evt){
    	this.setState({
    		cost: evt.target.value
    	});
    }

    dismissError(){
    	this.setState({
    		error: ""
    	});
    }

    handleSubmitClick(evt){
    	evt.preventDefault();

    	if(!this.state.heading){
    		return this.setState({
    			error: "Enter Heading"
    		});
    	}
    	if(!this.state.subHeading){
    		return this.setState({
    			error: "Enter Sub Heading"
    		});
    	}
    	if(!this.state.description){
    		return this.setState({
    			error: "Enter Description"
    		});
    	}
    	if(!this.state.cost){
    		return this.setState({
    			error: "Enter Cost"
    		});
    	}

		// storing details of the ad in the database
		const add={
			heading: this.state.heading,
			subHeading: this.state.subHeading,
			description: this.state.description,
			cost: this.state.cost,
			error: ""

		}
		axios
			.post("/newadd",add)
			.then(response => {
				console.log('login response: ')
				console.log(response)
				if (response.status === 200) {
					console.log(response.data);
					// update App.js state
					
					// update the state to redirect to home
					this.setState({
						redirectTo: '/dashboard'
					})
				}

			}).catch(error => {
				console.log('login error: ')
				console.log(error);

				

			})
    }

	render() {
        return (
        	<div className="border_dashboard pad_dashboard">
        		<form>
        			<div>
        				{
        					this.state.error &&
        					<h3 onClick={this.dismissError}>
        						{this.state.error}<button onClick={this.dismissError}>x</button>
        					</h3>
        				}
        			</div>
        			<div className="pad">
        				<label className="right_heading">Heading</label>
        				<input type="text" onChange={this.handleHeading} value={this.state.heading} placeholder="Heading" />
        			</div>
        			<div className="pad">
        				<label className="right_subHeading">Sub Heading</label>
        				<input type="text" onChange={this.handleSubHeading} value={this.state.subHeading} placeholder="Sub Heading" />
        			</div>
        			<div className="pad">
        				<label className="right_description">Description</label>
        				<input type="text" onChange={this.handleDescription} value={this.state.description} placeholder="Description" />
        			</div>
        			<div className="pad">
        				<label className="right_cost">Cost</label>
        				<input type="text" onChange={this.handleCost} value={this.state.cost} placeholder="Cost" />
        			</div>
        			<div className="button">
        				<button onClick={this.handleSubmitClick}>Submit</button>
        			</div>
        		</form>
        	</div>
        );
    }
}

export default newadd;