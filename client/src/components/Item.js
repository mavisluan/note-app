import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Button, Card, Accordion} from 'react-bootstrap';

const Item = ({item}) => {
    return (
        <Col sm="12" md="6" lg="4">
            <Accordion >
                <Card className="my-3 item-card">
                    <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                        {item.title}
                        <div className="inline float-right">
                            <Button variant="link"  >
                                <i className="fas fa-pencil-alt item-control-link"></i>
                            </Button>
                            <Button variant="link" >
                                <i className="far fa-trash-alt item-control-link"></i>
                            </Button>
                            <Button variant="link" >
                                <i className="fas fa-share item-control-link"></i>
                            </Button>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={item.id}>
                        <Card.Body>
                            <Card.Text>
                                <span className='font-weight-bolder'>Description:</span>{item.description}
                            </Card.Text>
                            <Card.Text>
                                <span className='font-weight-bolder'>Created by:</span>{item.creator}
                            </Card.Text>
                            <Card.Text>
                                <span className='font-weight-bolder'>Created at:</span>{item.createdAt}
                            </Card.Text>
                            <Card.Text>
                                <span className='font-weight-bolder'>Updated at:</span>{item.updatedAt}
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

        </Col>
    );
};

Item.propTypes = {

};

export default Item;
