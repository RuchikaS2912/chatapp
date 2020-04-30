import React, {Component} from "react";
import Header from "./../pageHeader/header";
import Footer from "./../pageFooter/footer";

class LoginPage extends Component{
	render() {
		return (
			<div>
				<Header />
				<div>
					<h3>This is LoignPage!!!</h3>
				</div>
				<Footer />
			</div>
		);
	};
}

export default LoginPage;