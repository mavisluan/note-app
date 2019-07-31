import React, {Fragment} from 'react';
// import PropTypes from 'prop-types';

const Login = props => {
    return (
        <Fragment>
            {/*<div className="alert alert-danger">*/}
            {/*    Invalid credentials*/}
            {/*</div>*/}
            <h2 className="large text-primary">Sign In</h2>
            <form className="form mt-3" action="/dashboard">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <input type="submit" className="btn btn-primary form-control" value="Login"/>
            </form>
            <p className="my-1">
                Don't have an account? <a href="/register">Sign Up</a>
            </p>
        </Fragment>
    );
};

Login.propTypes = {

};

export default Login;
