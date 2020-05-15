import React, { Component } from 'react';
import {Form,Row,Col,Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyUploader from './MyUploader';
export default class FormDrop extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                <Form responsive>
                        <Row responsive>
                            <Col  xs={6} md={4}>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select" placeholder="Category">
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
                                <Form.Control as="select">
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
                                <Form.Control as="select">
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
                                    <Form.Control as="textarea" placeholder={"Can you elaborate more on the issue"} rows="3" />
                                </Form.Group>
                            </Col>
                            <Col xs={6} md={4}>
                            {/* <Form.File id="formcheck-api-regular">
                                <Form.File.Input />
                            </Form.File> */}
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
