import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  const { title, img, dolar, name, _id } = props.service;
  return (
    < >
      <Col className='' lg={4}>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title> {name}</Card.Title>
            <p>  {title} </p>
            <Card.Text>
              <h5> {dolar} </h5>
              <Link to={`/detail/${_id}`}> <Button style={{ backgroundColor: "#212121" }} className='text-decoration-none mt-3 w-100  border-0'> Purchase</Button> </Link>
              <br />

              <Link to={`/detail/${_id}`}> <Button onClick={() => {
                props.handleAddToCart(props.service);
              }} style={{ backgroundColor: "#ff8a65" }} className='mt-3 w-100 border-0'>Add to  MyOrder</Button> </Link>

            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Service;