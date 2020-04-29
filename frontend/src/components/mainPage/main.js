import React, {Component} from "react";
import Header from "./../pageHeader/header";
import Footer from "./../pageFooter/footer";

class MainPage extends Component{
	render() {
		return (
			<div>
				<Header />
				<h3>Welcome to main page</h3>
				<Footer />
			</div>
		);
	}
};

export default MainPage;