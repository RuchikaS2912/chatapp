import React, { Component } from 'react';
import {Form,Row,Col,Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyUploader from './MyUploader';
export default class FormDrop extends Component {
    state = { bio: '' };
constructor () {
    super();
    this.state = {
        category:'',
        subcategory:'',
        exactissue:'',
    };
    this.handleChange = this.handleChange.bind(this);
}


  handleChange (evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleBioChange = (e) => {
    const bio = e.target.value;
    this.setState({ bio });
  };
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                <Form responsive>
                        <Row responsive>
                            <Col  xs={6} md={4}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" name="category" placeholder="Category" onChange={this.handleOnChange}>
                                <option value="">Category</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            </Col>
                            <Col  xs={6} md={4}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" name="subcategory"  onChange={this.handleOnChange}>
                                <option value="">Sub-Category</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            </Col>
                            <Col xs={6} md={4}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" name="exactissue" onChange={this.handleOnChange}>
                                <option value="">Exact Issue</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" placeholder={"Can you elaborate more on the issue"} rows="3" onChange={this.handleBioChange}/>
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={4}>
                            <MyUploader/>
                            </Col>
                            <Col>
                                <Button as="input" variant="success" type="submit" value="Post An Issue" />                           
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>       
                </Card>
                                
            </div>
        )
    }
}
