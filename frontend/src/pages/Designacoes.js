import React, {Component} from 'react';
import SideBar from './Sidebar';
import {Row,Col,Container,Button,ButtonGroup,Form,InputGroup} from 'react-bootstrap';

export default class Designacoes extends Component {
    render(){
        return(
          <div>
          <SideBar></SideBar>
          <Container>
            <Row className="justify-content-center mt-4">
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">&lt;&lt;</Button>
                <Button variant="secondary">Outubro 2019</Button>
                <Button variant="secondary">&gt;&gt;</Button>
              </ButtonGroup>
            </Row>
            <Row className="justify-content-center mt-2">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">&lt;&lt;</Button>
              <Button variant="secondary">7 de Outubro a 11 de Outubro</Button>
              <Button variant="secondary">&gt;&gt;</Button>
            </ButtonGroup>
            </Row>
            <Container className="mt-2 border ">
              <Form>
                <Form.Group>
                  <Row className="justify-content-center">
                    <Col xs={5} className="align-self-center text-right">
                      <Form.Label >Presidente:</Form.Label>
                    </Col>
                    <Col xs={7} >
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-center text-right">
                    <Col xs={5} className="align-self-center">
                      <Form.Label >Oração Inicial:</Form.Label>
                    </Col>
                    <Col xs={7}>
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group >
                  <Row className="justify-content-center text-right">
                    <Col xs={5} className="align-self-center">
                      <Form.Label >Tesouros:</Form.Label>
                    </Col>
                    <Col xs={7}>
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-center text-right">
                    <Col xs={5} className="align-self-center">
                      <Form.Label >Joias:</Form.Label>
                    </Col>
                    <Col xs={7}>
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-center text-right">
                    <Col xs={5} className="align-self-center">
                      <Form.Label >Sala B:</Form.Label>
                    </Col>
                    <Col xs={7}>
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-center text-right">
                    <Col xs={5} className="align-self-center">
                      <Form.Label >Vida Cristã 1:</Form.Label>
                    </Col>
                    <Col xs={7}>
                    <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group >
                  <Row className="justify-content-center text-right">
                    <Col xs={5}>
                      <Form.Label >Vida Cristã 2:</Form.Label>
                    </Col>
                    <Col xs={7}>
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-center text-right">
                      <Col xs={5}>
                        <Form.Label >Vida Cristã 3:</Form.Label>
                      </Col>
                      <Col xs={7}>
                        <InputGroup>
                          <Form.Control name="nome" type='text' readonly="true" />
                          <InputGroup.Append>
                              <Button type='button' variant="outline-secondary">P</Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-center text-right">
                    <Col xs={5}>
                      <Form.Label >EBC</Form.Label>
                    </Col>
                    <Col xs={7}>
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-center text-right">
                    <Col xs={5}>
                      <Form.Label >Leitor</Form.Label>
                    </Col>
                    <Col xs={7}>
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-center text-right">
                    <Col xs={5}>
                      <Form.Label >Oração Final</Form.Label>
                    </Col>
                    <Col xs={7}>
                      <InputGroup>
                        <Form.Control name="nome" type='text' readonly="true" />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary">P</Button>
                        </InputGroup.Append>
                      </InputGroup>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Container>
          </Container>
          </div>
        )
    }
}