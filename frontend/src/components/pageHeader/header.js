import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./header.css";

class Header extends Component {
	render() {
		return (
			<div class="header flex-100">
				<div class="styling flex-70">
					<Link to="/">Webchat</Link>
				</div>
				<div class="profiles flex-30">
					<div class="bordering">
						<Link to="/login">Login</Link>
					</div>
					<div class="bordering">
						<Link to="/signup">Signup</Link>
					</div>
				</div>
			</div>
		);
	};
}

export default Header;