import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logout}= useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#1a1a1a'}}  bg="dar" variant="dar" sticky="top">
                <Container>
                   <div>
                   </div>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link  className='text-white' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link  className='text-white' as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link  className='text-white' as={HashLink} to="/home#hotel">Hotels</Nav.Link>
                        
                        <Nav.Link  className='text-white' as={HashLink} to="/home#contact">Contact</Nav.Link>
                    {user?.email?
                        (
                            <>
                            <Nav.Link  className='text-white' as={HashLink} to="/myorder">My Orders</Nav.Link>
                        <Button className='bg-info rounded-2 border-0 p-2 ms-2 ' onClick= {logout} variant="success">Logout</Button>
                            </>):
                        <Nav.Link  className='text-white' as={Link} to="/login">Login</Nav.Link>
                    }
                        <Navbar.Text className='m-2'>
                              Signed in as: <a href="#login"> {user?.displayName} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>

        </>
    
    );
};

export default Header;