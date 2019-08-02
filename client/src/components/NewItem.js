import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup} from "react-bootstrap";

NewItem.propTypes = {

};

const NewItem = (props) => {
    return (
        <Fragment>
            <h2 className="large text-primary">Register</h2>
            <Form className="form mt-3" action="">
                <FormGroup>
                    <Form.Control type="text" placeholder="Name" name="name" minLength="2"
                    />
                </FormGroup>
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email Address" name="email"/>
                </div>
                <div className="form-group">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                    />
                </div>
                <FormGroup>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                    />
                </FormGroup>
                <Button type="submit" variant="primary" value="Register">Submit</Button>
            </Form>
            <p className="my-1 mb-5">
                Already have an account? <a href="/login">Sign In</a>
            </p>
        </Fragment>
    );
}

export default NewItem;
