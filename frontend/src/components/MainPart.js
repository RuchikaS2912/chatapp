import React,{Component} from 'react';
import {Form,Col} from 'react-bootstrap';
// import oil from '../images/oil.jpg';
import './style.css';
import ProfileIcon from './ProfileIcon';

export default class Formfield extends Component {
    constructor () {
    super();
    this.state = {
        firstname:'',
        lastname:'',
        telephone:'',
        email: '',
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
                        <Form.Control type="text" name="firstname" placeholder="First name" onChange={this.handleOnChange} />
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" placeholder="Last Name" onChange={this.handleOnChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="tel" name="telephone" placeholder="Mobile Number"  onChange = {this.onHandleTelephoneChange} />
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="E-mail" onChange={this.handleOnChange}/>
                        </Form.Group>
                    </Form.Row>
                    </div>
                
                </Form>
            </div>
        </div>
                
        )
    }
    
    }

