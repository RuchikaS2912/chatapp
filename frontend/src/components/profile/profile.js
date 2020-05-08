import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./profile.js";
// import {createBrowserHistory as history} from 'history';

class Profile extends Component{
	constructor(props){
		super(props);
		this.state = {
			error: ""
		}

		this.handleProfile = this.handleProfile.bind(this);
		this.handlePayment = this.handlePayment.bind(this);
		this.handleIssues = this.handleIssues.bind(this);
		this.handleMySearches = this.handleMySearches.bind(this);

	}

	handleProfile(){
		window.location.replace("http://localhost:3000/profile");
	}

	handleIssues(){
		window.location.replace("http://localhost:3000/issues");
	}

	handlePayment(){
		window.location.replace("http://localhost:3000/payment");
	}

	handleMySearches(){
		window.location.replace("http://localhost:3000/mySearches");
	}

	render() {
		return (
			<div className="color">
				<div className="leftSideBarParent">
					<div>
						<div className="bordering" onClick = {this.handleProfile}>
							<h4>Profile</h4> 
						</div>
						<div className="bordering" onClick={this.handlePayment}>
							<h4>Payment</h4> 
						</div>
						<div className="bordering" onClick={this.handleIssues}>
							<h4>Issues</h4> 
						</div>
						<div className="bordering" onClick={this.handleMySearches}>
							<h4>My Searches</h4> 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;