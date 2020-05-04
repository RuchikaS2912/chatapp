import React, {Component} from "react";
import Header from "./../pageHeader/header";
import Footer from "./../pageFooter/footer";
import "./forgotPassword.css";

class ForgotPassword extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: "",
			error: ""
		}

		this.handleEmail = this.handleEmail.bind(this);
		this.handleSubmitClick = this.handleSubmitClick.bind(this);
	}

	handleEmail(evt){
		this.setState({
			email: evt.target.value
		});
	}

	handleSubmitClick(evt){
		evt.preventDefault();

		if(!this.state.email){
			this.setState({
				error: "Enter Email"
			});
		}

		
	}

	render(){
		return (
			<div>
				<Header />
				<div className="bordering padding">
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