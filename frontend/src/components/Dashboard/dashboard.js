import React, { Component } from "react";
import Header from "./../pageHeader/header";
import Footer from "./../pageFooter/footer";
import { Link } from "react-router-dom";
import axios from 'axios'
import "./dashboard.css";
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
	constructor(props) {
        super(props);
        
		this.state = {
			error: "",
            redirectTo: null,
            username:null,

		}

		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmitClick = this.handleSubmitClick.bind(this);
		this.dismissError = this.dismissError.bind(this);
	}

	dismissError() {
		this.setState({
			error: ""
		});
	}

	handleEmail(evt) {
		this.setState({
			email: evt.target.value
		});
	}

	handlePassword(evt) {
		this.setState({
			password: evt.target.value
		});
	}

	handleSubmitClick(evt) {

		evt.preventDefault();

		}


	render() {
		if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
		return (
			<div>
				
			</div>
		)};
	};
   
}

export default Dashboard;