import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <Row className='m-4 '>
            <Col>
                <h6>NEEd HELP</h6>
                <br />
                <p>call us</p>
                <h4>+088445454544</h4>
                <p>Email for Us</p>
                <h4>mai98.bd@gmail.com</h4>
                <h6>Follow Us</h6>
                <p><span className='m-3'>< BsFacebook /> </span>  <span className='m-5'> <FaTwitter /> </span>  <span className='m-2'> <FaInstagram /> </span> </p>

            </Col>
            <Col>
                <h6>Company</h6>
                <br />
                <p>About Us</p>
                <p>Community Blog</p>
                <p>Rewards</p>
                <p>Work with Us</p>
                <p>Meet the Team</p>
            </Col>
            <Col>
                <h6>SUPPORT</h6>
                <br />
                <p>Account</p>
                <p>Legal</p>
                <p>Contact</p>
                <p>Affiliate Program</p>
                <p>Privacy Policy</p>
            </Col>
        </Row>
    );
};

export default Footer;