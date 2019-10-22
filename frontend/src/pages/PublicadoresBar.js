import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ListaPublicadores from '../components/ListaPublicadores';
import api from '../services/api';
import { Col,Row,Container,InputGroup,Form,Button,Table } from 'react-bootstrap';
export default class Publicadores extends Component {
    state = {
        nome : '',
        publicadores: []
    };
    handleSearchClick = async (e) =>{
        const {nome} = this.state;
        console.log(nome);
        const response = await api.get('publicadores/'+nome);
        this.setState({publicadores: response.data});
        console.log(this.state.publicadores);
    }
    handleInputChange = (e) =>{
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }
    render() {
      return (
      <div>
          <Sidebar></Sidebar>
          <Container>
                <Row className="justify-content-center text-center align-center j">
                    <Col bsPrefix="col-xs-1 col-sm-2">
                        <Button variant="primary"  href="/publicadores">+Novo</Button>
                    </Col>
                    <Col bsPrefix="col-xs-11 col-sm-10 d-none d-sm-block">
                        <InputGroup>
                            <Form.Control name="nome" value={this.state.nome} onChange={this.handleInputChange} type='text' placeholder="Pesquisar" />
                            <InputGroup.Append>
                                <Button type='button' onClick={this.handleSearchClick} variant="outline-secondary">P</Button>
                            </InputGroup.Append>
                        </InputGroup>                    
                    </Col>
                </Row>
                <Row bsPrefix="mt-4 d-block d-sm-none">
                    <Col>
                        <InputGroup>
                            <Form.Control name="nome" value={this.state.nome} onChange={this.handleInputChange} type='text' placeholder="Pesquisar" />
                            <InputGroup.Append>
                                <Button type='button' onClick={this.handleSearchClick} variant="outline-secondary">P</Button>
                            </InputGroup.Append>
                        </InputGroup>                    
                    </Col>
                </Row>
            <Container className="mt-4">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Celular</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.publicadores.map(publicador => (
                        <ListaPublicadores key={publicador._id} publicador={publicador} {...this.props}/>
                    ))}
                    </tbody>
                </Table>
            </Container>
        </Container>
        </div>
      )
    }
}