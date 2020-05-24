    import React,{Component} from 'react';
    import {Form,Button,Col} from 'react-bootstrap';
    import MainPart from './MainPart';
    // import ProfileIcon from './ProfileIcon';
    import './style.css';
    export default class Formfield extends Component {
        constructor () {
        super();
        this.state = {
            profession:'',
            company:'',
            working:'',
            hobbies:'',
            fullname:'',
            telephone:'',
            relationship: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.onHandleTelephoneChange = this.onHandleTelephoneChange.bind(this);
    }

    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

        onHandleTelephoneChange = e => {
            let telephone = e.target.value;

            if (!Number(telephone)) {
                return;
            }
            this.setState({
                [e.target.name]: telephone
            });
        };

        render(){
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
                        <Form.Control type="text" name="profession" placeholder="UI designer" onChange={this.handleOnChange} />
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" name="company" placeholder="Grab House" onChange={this.handleOnChange}/>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Working Since</Form.Label>
                        <Form.Control type="text" name='working' placeholder="23 Jul 2015" onChange={this.handleOnChange}/>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Hobbies and interests</Form.Label>
                        <Form.Control type="text" name="hobbies" placeholder="Swimming,reading,dancing,.."  onChange={this.handleOnChange}/>
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
                        <Form.Control type="text" name="fullname"  placeholder="Rumin" onChange={this.handleOnChange}/>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="tel"  name="telephone" placeholder="9876543210" onChange = {this.onHandleTelephoneChange}/>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Relationship</Form.Label>
                        <Form.Control type="text" name="relationship" placeholder="Friend" onChange={this.handleOnChange} />
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
        }



