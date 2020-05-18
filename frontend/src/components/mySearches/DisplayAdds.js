import React, {Component} from "react";
import "./mySearches.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CallIcon from '@material-ui/icons/Call';
import EventNoteIcon from '@material-ui/icons/EventNote';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Card, Button } from "react-bootstrap";
import AddDetails from "./AddDetails";


class DisplayAdds extends Component{
	render(){
		return (
			<div>
                <Card xs={6} md={4}>
                    <Card.Body>
                    	<AddDetails />
                    </Card.Body>
                    <Card.Footer>
                    	<Button variant="light"><FavoriteIcon /> SHORTLIST</Button>{' '}
                    	<Button variant="success"><CallIcon /> CONTACT AGAIN</Button>{' '}
                    	<Button variant="dark"><EventNoteIcon /> SCHEDULE A VISIT</Button>{' '}
                    	<Button variant="warning"><VpnKeyIcon /> BOOK</Button>
                    </Card.Footer>
                </Card>
            </div>
		);
	}
}

export default DisplayAdds;