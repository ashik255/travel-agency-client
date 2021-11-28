import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../service/Service';
import './Services.css'
const Services = () => {
    const [data,setData] = useState([]);
    const [cart,setCart] =useState([]);

    useEffect(()=>{
        fetch('https://damp-plateau-62877.herokuapp.com/data')
        .then(res => res.json())
        .then (data => {
            setData(data);
        })
    },[])
    const handleAddToCart = (data) => {
        console.log("from handle add to cart",data)
        const newCart = [...cart, data];
        setCart(newCart);
        fetch('https://damp-plateau-62877.herokuapp.com/users', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    alert('Successfully added the user')
                    data.target.reset();
                }
            })
        // data.preventDefault();

      };
    return (
        
           <Row id='services' xs={1} md={2} className="g-4 m-3">
               
            {
                data.map(user => <Service
                key = {data.key}
                service={user}
                handleAddToCart={handleAddToCart}
                ></Service>)
            }
            
        </Row> 
        
    );
};

export default Services;