import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Hotel from './Hotel';

const Hotels = () => {
    const [hotel,seHotel] = useState([]);

    useEffect(()=>{
        fetch('https://travel-agency-server-bj54n20zh-ashik255.vercel.app/HotelData')
        .then(res => res.json())
        .then (data => {
            seHotel(data);
        })
    },[])
    return (
        <div className='border p-4'>
        <h2 > Top Fantasy Hotel</h2>
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