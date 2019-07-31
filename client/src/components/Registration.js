import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';

const Registration = props => {
    return (
        <Fragment>
            <h2 className="large text-primary">Register</h2>
            <form className="form mt-3" action="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" name="name" minLength="2"
                    />
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" placeholder="Email Address" name="email"/>
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register"/>
            </form>
            <p className="my-1">
                Already have an account? <a href="/login">Sign In</a>
            </p>
        </Fragment>
    );
};

Registration.propTypes = {};

export default Registration;
