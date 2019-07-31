import React from 'react';
import './App.css';
import Registration from "./components/Registration";
import Login from "./components/Login";
import {Container, Row, Col} from 'react-bootstrap';
import Board from "./components/Board";

function App() {
    return (
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
    );
}

export default App;
