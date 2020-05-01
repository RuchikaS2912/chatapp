import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./header.css";

class Header extends Component {
	render() {
		return (
			<div className="header flex-100">
				<div className="styling flex-70">
					<Link to="/">Webchat</Link>
				</div>
				<div className="profiles flex-30">
					<div className="bordering">
						<Link to="/login">Login</Link>
					</div>
					<div className="bordering">
						<Link to="/signup">Signup</Link>
					</div>
				</div>
			</div>
		);
	};
}

export default Header;