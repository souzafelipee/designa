import React, {Component} from 'react';
import SideBar from './Sidebar';
import {Row,Col,Container,Button,ButtonGroup,Form,InputGroup} from 'react-bootstrap';

export default class Designacoes extends Component {
    state = {
      segundaSelecionada: Date(),
      domingoSelecionado: Date(),
      semanaSelecionada: '',
      mesSelecionado: ''
    }
    async componentDidMount() {
      this.getSemanaAtual();
    }
    handleSelPublicadorClick = async (e) =>{
      localStorage.setItem('@Designa:designacao',e.target.name);
      this.props.history.push('/SelPublicador');        
    }
    handleProxSemanaClick = (e) =>{
      var semanaAux;
      var dataSegunda;
      var monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];      
      console.log(e);
      console.log(this.state.segundaSelecionada);
      console.log('No render: segunda Selecionada:'+this.state.segundaSelecionada);
      dataSegunda = new Date(this.state.segundaSelecionada.getFullYear(),this.state.segundaSelecionada.getMonth(),
                                 this.state.segundaSelecionada.getDate()+7);
      var dataDomingo = new Date(this.state.domingoSelecionado.getFullYear(),this.state.domingoSelecionado.getMonth(),
                                 this.state.domingoSelecionado.getDate()+7);
      this.setState({segundaSelecionada: dataSegunda});
      this.setState({domingoSelecionado: dataDomingo});      
      semanaAux = dataSegunda.getDate()+' de '+monName[dataSegunda.getMonth()]+
                  ' a '+dataDomingo.getDate()+ ' de '+ monName[dataDomingo.getMonth()];

      this.setState({semanaSelecionada: semanaAux}) 
      this.setState({mesSelecionado: monName[dataSegunda.getMonth()]+' '+dataSegunda.getFullYear()})
    }
    handleSemanaAntClick = (e) =>{
      var semanaAux;
      var monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];      
      var dataSegunda = new Date(this.state.segundaSelecionada.getFullYear(),this.state.segundaSelecionada.getMonth(),
                                 this.state.segundaSelecionada.getDate()-7);
      var dataDomingo = new Date(this.state.domingoSelecionado.getFullYear(),this.state.domingoSelecionado.getMonth(),
                                 this.state.domingoSelecionado.getDate()-7);
      this.setState({segundaSelecionada: dataSegunda});
      this.setState({domingoSelecionado: dataDomingo});      
      semanaAux = dataSegunda.getDate()+' de '+monName[dataSegunda.getMonth()]+
                  ' a '+dataDomingo.getDate()+ ' de '+ monName[dataDomingo.getMonth()];
      this.setState({semanaSelecionada: semanaAux}) 
      this.setState({mesSelecionado: monName[dataSegunda.getMonth()]+' '+dataSegunda.getFullYear()})
    }
    getSemanaAtual(){            
      var now = new Date();
      var diasSegunda;
      var diasDomingo;
      var semanaAux;
      var monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho","Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];      
      console.log('Que dia é hj? '+now.getDate());
      console.log('Qual é o dia da semana? '+now.getDay());
      if ( (now.getDay()) === 0){
        diasSegunda = 6;
        diasDomingo = 0;
        console.log('Calculo pra achar a segunda:'+diasSegunda);
      }
      else{
        diasSegunda = (now.getDay()-1);
        diasDomingo = (7-now.getDay());
      }
      var dataSegunda = new Date(now.getFullYear(),now.getMonth(),now.getDate()-diasSegunda);
      var dataDomingo = new Date(now.getFullYear(),now.getMonth(),now.getDate()+diasDomingo);
      this.setState({segundaSelecionada: dataSegunda});
      this.setState({domingoSelecionado: dataDomingo});
      semanaAux = dataSegunda.getDate()+' de '+monName[dataSegunda.getMonth()]+
                  ' a '+dataDomingo.getDate()+ ' de '+ monName[dataDomingo.getMonth()];
      console.log('semana Selecionada:'+semanaAux);
      this.setState({semanaSelecionada: semanaAux}) 
      this.setState({mesSelecionado: monName[dataSegunda.getMonth()]+' '+dataSegunda.getFullYear()})
      return semanaAux;
    }
    render(){
      console.log('No render: semana Selecionada:'+this.state.semanaSelecionada);
      console.log('No render: domingo Selecionada:'+this.state.domingoSelecionado);
      console.log('No render: segunda Selecionada:'+this.state.segundaSelecionada);
        return(
          <div>
          <SideBar></SideBar>
          <Container>
            <Row className="justify-content-center mt-4">
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">&lt;&lt;</Button>
                <Button variant="secondary">{this.state.mesSelecionado}</Button>
                <Button variant="secondary">&gt;&gt;</Button>
              </ButtonGroup>
            </Row>
            <Row className="justify-content-center mt-2">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={this.handleSemanaAntClick}>&lt;&lt;</Button>
              <Button variant="secondary">{this.state.semanaSelecionada}</Button>
              <Button variant="secondary" onClick={this.handleProxSemanaClick} >&gt;&gt;</Button>
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
                        <Form.Control name="nome" type='text' readOnly={true} />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary" name="Presidente" onClick={this.handleSelPublicadorClick}>P</Button>
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
                        <Form.Control name="nome" type='text' readOnly={true} />
                        <InputGroup.Append>
                            <Button type='button' variant="outline-secondary" name="Oração Inicial" onClick={this.handleSelPublicadorClick}>P</Button>
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
                        <Form.Control name="nome" type='text' readOnly={true} />
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
                        <Form.Control name="nome" type='text' readOnly={true} />
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
                        <Form.Control name="nome" type='text' readOnly={true} />
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
                        <Form.Control name="nome" type='text' readOnly={true} />
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
                        <Form.Control name="nome" type='text' readOnly={true} />
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
                          <Form.Control name="nome" type='text' readOnly={true} />
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
                        <Form.Control name="nome" type='text' readOnly={true} />
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
                        <Form.Control name="nome" type='text' readOnly={true} />
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
                        <Form.Control name="nome" type='text' readOnly={true} />
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