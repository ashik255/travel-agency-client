import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import OrderDisplay from './OrderDisplay';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [isSpinnerTrue, setIsSpinnerTrue] = useState(false);

    useEffect(() => {
        setIsSpinnerTrue(true);
        fetch('https://travel-agency-server-production.up.railway.app/users')
            .then(res => res.json())
            .then(data => setOrder(data))
        setIsSpinnerTrue(false);
    }, [])

    return (
        <Container>
            {!isSpinnerTrue ? <Row id='myorder' xs={1} md={2} className="g-4 m-3">

                {
                    order.map(user => <OrderDisplay
                        key={user._id}
                        service={user}
                    >
                    </OrderDisplay>
                    )
                }
            </Row>
                :
                <div className='text-center'>
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                    <Spinner animation="grow" />
                </div>
            }

        </Container>

    );
};

export default MyOrder;