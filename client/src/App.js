import React from 'react';
import './App.css';
import Registration from "./components/Registration";
import Login from "./components/Login";
import {Container, Row, Col, Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import Navigation from "./components/Navigation";
import './App.css'
import Board from "./components/Board";

const App = () => (
    <div>
        <Navigation/>
        <Container className="mt-5">
            <Row className="justify-content-lg-between">
                {/*<Col xs={12} md={6} lg={5}>*/}
                {/*    <Registration/>*/}
                {/*</Col>*/}
                {/*<Col xs={12} md={6} lg={5}>*/}
                {/*    <Login/>*/}
                {/*</Col>*/}
                <Board/>
            </Row>
        </Container>
    </div>
);
export default App;
