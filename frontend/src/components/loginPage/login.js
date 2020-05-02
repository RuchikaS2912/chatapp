import React, {Component} from "react";
import Header from "./../pageHeader/header";
import Footer from "./../pageFooter/footer";
import {Link} from "react-router-dom";
import "./login.css";

class LoginPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			password: "",
			error: ""
		}

		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmitClick = this.handleSubmitClick.bind(this);
		this.dismissError = this.dismissError.bind(this);
	}

	dismissError(){
		this.setState({
			error: ""
		});
	}

	handleEmail(evt){
		this.setState({
			email: evt.target.value
		});
	}

	handlePassword(evt){
		this.setState({
			password: evt.target.value
		});
	}

	handleSubmitClick(evt){

		evt.preventDefault();

		if(!this.state.email){
			return this.setState({
				error: "Enter Email"
			});
		}
		if(!this.state.password){
			return this.setState({
				error: "Enter Password"
			});
		}

		//checking whether email exists in the database
		
		//checking whether entered password corresponds to the email in the database 

		return this.setState({
			error: ""
		});
	}

	render() {
		return (
			<div>
				<Header />
				<div className="bordering padding">
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
							<label className="right_email">Email</label>
							<input type="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmail} />
						</div>
						<div className="pad">
							<label className="right_password">Password</label>
							<input type="password" placeholder="Enter Password" value={this.state.password} onChange={this.handlePassword} />
						</div>
						<div className="button">
							<button type="submit" onClick={this.handleSubmitClick}>Login</button>
						</div>
						<div>
							<Link to="/forgotPassword">Forgot Password?</Link>
						</div>
					</form>
				</div>
				<Footer />
			</div>
		);
	};
}

export default LoginPage;