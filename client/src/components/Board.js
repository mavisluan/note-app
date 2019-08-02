import React from 'react';
// import PropTypes from 'prop-types';
import {Container, Row, Col, Button, Card, Accordion} from 'react-bootstrap';
import {items} from '../seed';
import ItemList from "./ItemList";

const Board = props => {
    return (
        <Container style={{maxHeight: "36rem", overflow: "auto"}}>
            <Row>
                <ItemList/>
            </Row>
        </Container>
    );
};

Board.propTypes = {};

export default Board;

