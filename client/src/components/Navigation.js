import React from 'react';
// import PropTypes from 'prop-types';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';


const Navigation = (props) => {
    return (
        <Navbar bg='primary' expand="lg" sticky="top" variant="dark">
            <Navbar.Brand href="#home" className="font-weight-bolder">Notes App</Navbar.Brand>
            <Nav style={{flexDirection: "row"}} className="text-center">
                <Nav.Link href="#new">
                    <i className="far fa-plus-square nav-icon"></i>
                </Nav.Link>
                <Nav.Link href="#notes">
                    <i className="fas fa-book nav-icon"></i>
                </Nav.Link>
                <Nav.Link href="#trash">
                    <i className="fas fa-trash nav-icon"></i>
                </Nav.Link>
                <Nav.Link href="#trash">
                    <i className="fas fa-sign-out-alt nav-icon"></i>
                </Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className="ml-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    {/*<Button variant="outline-light" >Search</Button>*/}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

Navigation.propTypes = {};
export default Navigation;


