import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { ImLocation } from "react-icons/im";

const Hotel = (props) => {
    const{location,img,dolar,name} = props.service;
    return (
      
< >
        <Col lg={4} className='border'>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title> {name}</Card.Title>
               <h6> <span><ImLocation /></span> {location}</h6> 
              <Card.Text>
              <h5> {dolar} </h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   </>
    
        
    );
};

export default Hotel;