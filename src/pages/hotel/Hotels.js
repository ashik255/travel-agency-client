import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Hotel from './Hotel';

const Hotels = () => {
    const [hotel,seHotel] = useState([]);

    useEffect(()=>{
        fetch('https://damp-plateau-62877.herokuapp.com/HotelData')
        .then(res => res.json())
        .then (data => {
            seHotel(data);
        })
    },[])
    return (
        <div>
        <h2 className=''> Top Fantasy Hotel</h2>
           <Row id='hotel' xs={1} md={2} className="g-4 m-3">
            {
                hotel.map(user => <Hotel
                key = {hotel.key}
                service={user}
                ></Hotel>)
            } 
        </Row> 
        </div>
    );
};

export default Hotels;