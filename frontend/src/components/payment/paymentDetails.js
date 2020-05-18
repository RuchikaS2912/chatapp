import React, {Component} from "react";
import "./payment.css";
class PaymentDetails extends Component{
	render() {
		return (
			<div>
				<div className="flex_props">
					<p>
						Security deposit
					</p>
					<p>
						20,000
					</p>
				</div>
				<div className="flex_props">
				<p>
					July rent
				</p>
				<p>
					12,500
				</p>
				</div>
				<hr />
				<div className="flex_props">
				<p>
					Augest rent
				</p>
				<p>
					12,500
				</p>
				</div>
			</div>
		);
	}
}

export default PaymentDetails;