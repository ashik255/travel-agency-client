import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <Row id='contact' className='contact m-1 p-5 bg-secondary b-0 rounded'>
            <Col>
                <h1>Subscribe Your Email</h1>
                <p>An email subscription is an option on a website that allows visitors to receive updates via email by specifying their email addresses in a subscription form.</p>
            </Col>
            <Col>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Enter Your Email"
                        aria-label="Enter Your EMail"
                        
                    />
                    <Button variant="primary" size="lg">
                        Subscribe Now
                    </Button>
                </InputGroup>
            </Col>
        </Row>
    );
};

export default Contact;