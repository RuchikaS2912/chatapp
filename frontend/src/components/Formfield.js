import React from 'react';
import {Form,Button,Col} from 'react-bootstrap';
import MainPart from './MainPart';
// import ProfileIcon from './ProfileIcon';
import './style.css';
export default function Formfield() {
    return (
        <div>
            <div className="main-div">
                <div className="main-part">
                    <MainPart/>
                </div>
            </div>
            <div className="additional">
            <Form>
            <h6><b>ADDITIONAL INFORMATION</b></h6>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Profession</Form.Label>
                <Form.Control type="text" placeholder="UI designer" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Company</Form.Label>
                <Form.Control type="text" placeholder="Grab House"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Working Since</Form.Label>
                <Form.Control type="text" placeholder="23 Jul 2015"/>
                </Form.Group>
            </Form.Row>
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Hobbies and interests</Form.Label>
                <Form.Control type="text" placeholder="Swimming,reading,dancing,.." />
                </Form.Group>
            </Form.Row>

            
            
                {['checkbox'].map((type) => (
                <div key={`custom-inline-${type}`} className="mb-3">
                <Form.Check
                    custom
                    inline
                    label="Veg"
                    type={type}
                    id={`custom-inline-${type}-1`}
                />
                <Form.Check
                    custom
                    inline
                    label="Non-Veg"
                    type={type}
                    id={`custom-inline-${type}-2`}
                />
                <Form.Check
                    custom
                    inline
                    label="Any"
                    type={type}
                    id={`custom-inline-${type}-3`}
                />
                </div>
            ))}

            <h6><b>EMERGENCY CONTACT DETAILS</b></h6>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Rumin"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="tel" placeholder="9876543210"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Relationship</Form.Label>
                <Form.Control type="text" placeholder="Friend"/>
                </Form.Group>
            </Form.Row>

            <Button variant="success" type="submit">
                Save
            </Button>
    </Form>
            </div>
    
        </div>
    )
}

