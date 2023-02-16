import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const {user} =useAuth();
    const [details, setDetails] = useState([]);
    const { serviceId } = useParams();

    useEffect(() => {
        fetch('https://travel-agency-server-production.up.railway.app/data')
            .then(res => res.json())
            .then(data => {
                setDetails(data);
                // console.log(data);
            })
    }, [serviceId])
    const singleService = details.filter(data => data._id === (serviceId));
    console.log(singleService);
    return (
        <div>
            <Row id='' xs={1} md={2} className="g-4 m-3">
                <Col className='mx-auto'>
                    <Card>
                        <Card.Img variant="top" src={singleService[0]?.img} />
                        <Card.Body>
                            <Card.Title> {singleService[0]?.name}</Card.Title>
                            <p>  {singleService.title} </p>
                            <Card.Text>
                                <p>{singleService[0]?.title} </p>
                                <h2> {singleService[0]?.dolar} </h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Form className='border rounded-3 p-5'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder={user?.displayName} disabled />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder= {user?.email} disabled />
                            </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Danmondi-32,Mirpur,Dhaka" />
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder='Dhaka' />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default PlaceOrder;