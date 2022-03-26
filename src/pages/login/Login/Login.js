import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .catch((error) => {
                const errormsg = error.message;
                console.log(errormsg);
            })
    }

    return (
        <div>
            <div className='m-3 d-flex justify-content-center align-items-center'>
                <Form className='m-2'>
                    <Form.Group className="py-2 " controlId="formBasicEmail">
                        <Form.Label >Email address</Form.Label>
                        <Form.Control className='px-5' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                   
                    <Button className='px-4 py-2' style={{backgroundColor:"#ec407a",color:'white'}}  type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <br />
            <Button  style={{backgroundColor:"#01579b",color:'white'}}  className='px-4 py-2' onClick={handleGoogleLogin} > Google Login</Button>
        </div>
    );
};

export default Login;