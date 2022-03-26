import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import {FiPhoneCall} from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <Row  style={{backgroundColor:"#263238",color:'#f2f2f2'}} className='m-2 p-3 '>
             <Col>
                <h4>NEED HELP</h4>
                <br />
                <h4><span><FiPhoneCall /></span>+088013054454544</h4>
                <br />
                <h4> <span> <AiOutlineMail /> </span> mai98.bd@gmail.com</h4>
                <br />
                <p><span className='m-3'><BsFacebook size='2.5em' /> </span>  <span className='m-5'> <FaTwitter size='2.5em' /> </span>  <span className='m-2'> <FaInstagram size='2.5em' /> </span> </p>

            </Col>
            <Col>
                <h4>Company</h4>
                <br />
                <p>About Us</p>
                <p>Community Blog</p>
                <p>Rewards</p>
                <p>Work with Us</p>
                <p>Meet the Team</p>
            </Col>
            <Col>
                <h4>SUPPORT</h4>
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