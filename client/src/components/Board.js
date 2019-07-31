import React from 'react';
import PropTypes from 'prop-types';
import {Container, Col, Row, Button, Accordion, Card} from 'react-bootstrap';
import {notes} from '../seed';

const items = notes;
const Board = props => {
    return (
        <Container className="mt-4">
            <Row>
                {items.length === 0 && (
                    <h3 className="mx-auto">
                        You notes board is empty. Add some notes.
                    </h3>
                )}
                <Col md="6" sm="12" lg="4" xl="3" className="text-center">
                <Accordion>
                    {items.map(item => (
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                            Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={item.id}>
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>))}
                </Accordion>
                </Col>
        </Row>
        < /Container>
    );
};


            // TODO: 1. display the notes  2. Add actions  3. Connect to the db;

Board.propTypes = {};

export default Board;

