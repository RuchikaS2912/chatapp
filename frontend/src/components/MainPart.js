import React from 'react';
import {Form,Col} from 'react-bootstrap';
// import oil from '../images/oil.jpg';
import './style.css';
import ProfileIcon from './ProfileIcon';

export default function Formfield() {
    return (
        <div className="formfield-maindiv" style={{paddingTop:'30px',display:'inline-block'}}>
            <div className="first">
                <ProfileIcon/>
            </div>
            <div className="second">
            <Form >
                <div>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="tel" placeholder="Mobile Number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="E-mail"/>
                    </Form.Group>
                </Form.Row>
                </div>
            
            </Form>
        </div>
    </div>
            
    )
}

