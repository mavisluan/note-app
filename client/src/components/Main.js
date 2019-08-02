import React from 'react';
import PropTypes from 'prop-types';
import {Container, Col, Row, Button} from 'react-bootstrap';
import Board from "./Board";

const Main = props => {
    return (
        <Container className="mx-auto">
            <Row>
                <Col sm={12} md={9} lg={10}>
                    <Board/>
                </Col>
            </Row>
        </Container>
    );
};

Main.propTypes = {};

export default Main;
