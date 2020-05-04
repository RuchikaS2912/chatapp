import React, { Component } from "react";
import Header from "./../pageHeader/header";
import Footer from "./../pageFooter/footer";
import axios from 'axios';
import { Redirect } from 'react-router-dom'

import "./signup.css";
let msg = "";



class SignupPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
			error: "",
			redirectTo: null
		}

		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
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

	handleConfirmPassword(evt) {
		this.setState({
			confirmPassword: evt.target.value
		});
	}

	handleSubmitClick(evt) {
		evt.preventDefault();

		console.log(this.state);

		if (!this.state.email) {
			return this.setState({
				error: "Email is required!!"
			});
		}

		if (!this.state.password && this.state.password.length < 8) {
			return this.setState({
				error: "Password should have atleast 8 characters"
			});
		}

		if (this.state.password !== this.state.confirmPassword) {
			return this.setState({
				error: "Confirm Password does not match with Password"
			});
		}

		const newUser = {

			email: this.state.email,
			password: this.state.password,
		};


		async function makePostRequest() {
			let res = await axios.post('/register', newUser);
			console.log(res.data);
			msg = res.data;

		}
		makePostRequest();

		if (msg === "Success") {
			this.setState({
				redirectTo: '/login'
			})
		}
		return this.setState({
			error: msg
		});


	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div>
					<Header />
					<div className="padding bordering col-md-6 col-md-offset-3">
						<form>
							<div>
								{
									this.state.error &&
									<h3 onClick={this.dismissError}>
										<button onClick={this.dismissError}>x</button>
									</h3>
								}
							</div>
							<div className="pad">
								<label className="left-email">Email address</label>
								<input type="text" id="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmail} />
							</div>
							<div className="pad">
								<label className="left-password">Password</label>
								<input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
							</div>
							<div className="pad">
								<label className="left-confirm-password">Confirm Password</label>
								<input type="password" id="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleConfirmPassword} />
							</div>
							<div className="button">
								<button type="submit" onClick={this.handleSubmitClick} >Signup</button>
							</div>
						</form>
					</div>
					<Footer />
				</div>
			)
		};
	};
}

export default SignupPage;