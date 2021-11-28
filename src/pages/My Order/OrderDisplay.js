import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const OrderDisplay = (props) => {
    const{title,img,dolar,name,_id} = props.service;
    const [order,setOrder]=useState([]);

    const handleRemove = (id) =>{
        console.log('removed id',id)
        const  proceed = window.confirm('Are you sure ,you want to delete?')
        if(proceed){
            const url = `https://damp-plateau-62877.herokuapp.com/users/${id}`
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then( data => {
            if(data) {
                console.log(data)
                window.location.reload(false);
                alert('delete Successfully')
                const remainUsers = order.filter(user => user._id !== id);
                setOrder(remainUsers);  
            }
        })
        }
    }
   
    return (
        < >
        <Col lg={4}>
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title> {name}</Card.Title>
               <p>  {title} </p>
              <Card.Text>
              <h5> {dolar} </h5>
              </Card.Text>
              
              <Button className='bg-info rounded-2 w-30' onClick={()=> handleRemove(_id)} >Remove</Button>
            </Card.Body>
          </Card>
        </Col>
   </>
    );
};

export default OrderDisplay;