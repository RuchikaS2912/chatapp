import React, {Component} from "react";
import {Card, Button} from "react-bootstrap";
import "./payment.css";
class PendingPayments extends Component{
	render() {
		return (
			<div>
                <Card xs={6} md={4}>
                    <Card.Body>
                    	<div className="flex_props">
                        	<div className="flex_deposit pad_deposit">
                        		<div className="flex_props">
                        			<p>Security Deposit</p>
                        			<div className="display">
                        				<div>
                        			        <p>Actual</p>
                        				    <p>Booking amt</p><br />
                        				    <p>Total</p>
                        				</div>
                        				<div className="pad_payment">
                        				    <p>25,000</p>
                        				    <p>-5,000</p>
                        				    <hr />
                        				    <p>20,000</p>
                        				</div>
                        			</div>
                        		</div>
                        		<hr />
                        		<div className="flex_props">
                        			<p>July rent</p>
                        			<p>12,500</p>
                        		</div>
                        		<hr />
                        		<div className="flex_props">
                       		 		<p>Augest rent</p>
                       		 		<p>12,500</p>
                       			</div>
                        	</div>
                        	<div className="border_details">
                        		<h3>Total</h3>
                        		<h2>32,500</h2>
                        		<Button variant="success">Pay Now</Button>
                        	</div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
		);
	}
}

export default PendingPayments;