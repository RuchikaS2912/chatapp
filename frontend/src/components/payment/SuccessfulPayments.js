import React, {Component} from "react";
import {Accordion , Card, Button} from "react-bootstrap";
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import "./payment.css";
import IconButton from '@material-ui/core/IconButton';
import "./payment.css";
import PaymentDetails from "./paymentDetails";
import GetAppIcon from '@material-ui/icons/GetApp';


class SuccessfulPayments extends Component{
	render() {
		return (
			<div>
			<Accordion>
  				<Card>
    			<Card.Header>
    				<div className="flex_props">
    					<p>2016 | Aug 27 | 1:07 pm</p>
    					<p>Txn ID - 87236487623987</p>
    					<p>10,000 <CheckCircleTwoToneIcon/></p>
    					<Accordion.Toggle as={Button} variant="link" eventKey="0">
        					<KeyboardArrowDownIcon />
      					</Accordion.Toggle>
    				</div>
    			</Card.Header>
    			<Accordion.Collapse eventKey="0">
		        	<Card.Body>
		        		<div className="flex_props">
		        			<div className="border_download">
		        			<Button className="margin_download" variant="light"><GetAppIcon />{' '}Download Invoice</Button>
		        			</div>
		        			<div className="margin_right pad_details">
		        			<PaymentDetails />
		        			</div>
		        		</div>
		        	</Card.Body>
    			</Accordion.Collapse>
	  			</Card>
			</Accordion>
			</div>
		);
	}
}

export default SuccessfulPayments;