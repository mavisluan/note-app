import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';
import {FormGroup, Form, Button} from 'react-bootstrap';

const Login = props => {
    return (
        <Fragment>
            {/*<div className="alert alert-danger">*/}
            {/*    Invalid credentials*/}
            {/*</div>*/}
            <h2 className="large text-primary">Sign In</h2>
            <Form className="form mt-3" action="/dashboard">
                <FormGroup>
                    <Form.Control
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </FormGroup>
                <Button type="submit" variant="primary" value="Login">Login</Button>
            </Form>
            <p className="my-1">
                Don't have an account? <a href="/register">Sign Up</a>
            </p>
        </Fragment>
    );
};

Login.propTypes = {

};

export default Login;
