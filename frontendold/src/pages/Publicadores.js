import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import './Publicadores.css';
import imgCalendar from '../img/annual-calendar-symbol.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Col,Row,Container,ToggleButton,ToggleButtonGroup,Form,InputGroup,FormControl } from 'react-bootstrap';

export default class Publicadores extends Component {
  render() {
    return (
    <div>
        <Sidebar></Sidebar>
        <Container>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column xs={2} sm={2} md={1}>Nome:</Form.Label>
                    <Col xs={10} sm={8} md={11}>
                        <Form.Control type='text' placeholder="Nome" />
                    </Col>
                    <Col sm={1} classname="d-none d-sm-block">
                        <ToggleButtonGroup  type="checkbox" name="options" >
                            <ToggleButton variant="light" fvalue="1">Ativo</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column  xs={2} sm={2} md={1}>Celular:</Form.Label>
                    <Col xs={6} sm={4} md={11} >
                        <MaskedFormControl type='tel' placeholder="Celular" mask='(11)11111-1111' />
                    </Col>
                    <Col xs={2} sm={1}>
                        <ToggleButtonGroup  type="checkbox" name="options" >
                            <ToggleButton variant="light" fvalue="1">Ativo</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={9}>
                            <ToggleButtonGroup  type="radio" name="options" defaultValue={3}>
                                <ToggleButton variant="light" value={1}>Ancião</ToggleButton>
                                <ToggleButton variant="light" value={2}>Servo</ToggleButton>
                                <ToggleButton variant="light" value={3}>Publicador</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                        <Col xs={3}>
                            <ToggleButtonGroup  type="checkbox" name="options" >
                                <ToggleButton variant="light" fvalue="1">Leitor</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ultima Parte:</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ultima Presidencia:</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ult. Oração Inicial</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ultimo Tesouros</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ultimo Joias</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ult Pres. SalaB</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ultimo Vida e Ministério</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
            
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ult. Estudo Bíblico</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ult. Estudo Bíblico</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ult. Leitura EB</Form.Label>   
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-center align-center">
                        <Col xs={4} sm={3} md={1}>
                            <Form.Label>Ult. Oração Final</Form.Label>
                        </Col>
                        <Col xs={8} sm={9} md={11}>                            
                        <InputGroup>
                            <FormControl type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <InputGroup.Append>
                                <InputGroup.Text id="basic-addon2">
                                <img
                                    src={imgCalendar}
                                    width="25"
                                    height="25"
                                    alt="cal"
                                    className="d-inline-block align-top"
                                />
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                        </Col>
                    </Row>
                </Form.Group>      
            </Form>
        </Container>    
    </div>
    )
  }
}
