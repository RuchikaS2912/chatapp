import React, { Component } from "react";
import Header from "./../pageHeader/header";
import Footer from "./../pageFooter/footer";
import "./forgotPassword.css";
import axios from 'axios';
let msg = ""

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			error: ""
		}

		this.handleEmail = this.handleEmail.bind(this);
		this.handleSubmitClick = this.handleSubmitClick.bind(this);
	}

	handleEmail(evt) {
		this.setState({
			email: evt.target.value
		});
	}

	handleSubmitClick(evt) {
		evt.preventDefault();

		if (!this.state.email) {
			this.setState({
				error: "Enter Email"
			});
		}



		axios
			.post('/forgot', {
				email: this.state.email,
			})
			.then(response => {
				console.log('login response: ')
				console.log(response)
				if (response.status === 200) {
					console.log(response.data);
					// update the state to redirect to home
					this.setState({
						redirectTo: '/'
					})
				}

			}).catch(error => {
				console.log('login error: ')
				console.log(error);

				msg = "error";
				console.log(msg);

			})
	}


	render() {
		return (
			<div>
				<Header />
				<div className="border_forgot pad_forgot">
					<form>
						<div className="pad">
							<label className="right_email">Email</label>
							<input type="email" onChange={this.handleEmail} value={this.state.email} placeholder="Enter Email" />
						</div>
						<div className="button">
							<button type="submit" onClick={this.handleSubmitClick}>Submit</button>
						</div>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}

export default ForgotPassword;