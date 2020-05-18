import React, {Component} from "react";
import Media from 'react-bootstrap/Media';
import "./mySearches.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Sofa from "./../../images/sofa.jpg";
class AddDetails extends Component{
	render() {
		return (
			<div>
				<Media>
  					<img
  					width="25%"
  					height="25%"
    				className="mr-3"
    				src={Sofa}
    				alt="Generic placeholder"
  					/>
  					<Media.Body>
  					<div>
  						<div className="flex_props">
  							<div>
    							<h3>Sri Ram Laxmi Luxury PG</h3>
    							<p>Available for <b>Men</b></p>
    						</div>
    						<div className="border_rent">
    							<p>RENT</p>
    							<h4>19,500<small>/M</small></h4>
    						</div>
    					</div>
    					<div className="pad_address">
    						<p><LocationOnIcon /> 1st Block Koramangala,Bangalore,Near Forum Mall</p>
    					</div>
    					<div className="flex_props">
    							<div className="pad_details">
    							<p>SECURITY DEPOSIT</p>
    							<p><b>20,000</b></p>
    						</div>
    						<div className="pad_details">
    							<p>SHARING TYPE</p>
    							<p><b>1,2,3 Sharing</b></p>
    						</div>
    						<div className="pad_food">
    							<p>MEALS AVAILABLE</p>
    							<p><b>Breakfast, Lunch, Dinner</b></p>
    						</div>
    					</div>
    				</div>
  					</Media.Body>
				</Media>
			</div>
		);
	}
}

export default AddDetails;