import React, {Component} from 'react';
import SideBar from './Sidebar';
import Filtro from '../components/Filtro';
import api from '../services/api';
import ListaPublDesignacao from '../components/ListaPublDesignacao';
import { Col,Row,Container,Form,Table} from 'react-bootstrap';

export default class SelPublicador extends Component {
  state = {
    designacao: '',
    designacao2: '',
    designacao3: '',
    publicadores: [],
    ultimaDesignacao: '',
    ultimaParte: '',
    privilegioRadio: ['anciao']
  }
  handlePrivilegioChange = async (e) =>{
    var designacaoAux = localStorage.getItem('@Designa:designacao');
    var publicadoresAux;
    var ultimaParteAux;
    var ultimaDesignacaoAux;
    this.setState({privilegioRadio: e});
    console.log('No change do Privilegio, Estado: '+this.state.privilegioRadio);
    console.log('No change do Privilegio, evento: '+e);
    console.log(e);

    if (((e.includes('anciao')) || (e.includes('servo')) ) && (e.length ===1)) {
      console.log(this.privilegioRadio);
      publicadoresAux = await api.get('designacaoPubl/'+e);
      ultimaDesignacaoAux = await api.get('ultimaDesignacao/'+e);
      console.log('ultimaParte/'+designacaoAux+'/'+e);
      ultimaParteAux = await api.get('ultimaParte/'+designacaoAux+'/'+e);
      this.setState({publicadores: publicadoresAux.data});
      this.setState({ultimaDesignacao: ultimaDesignacaoAux.data});
      this.setState({ultimaParte: ultimaParteAux.data});
    }
    else  if (((e.includes('anciao')) && (e.includes('servo')) ) && (e.length ===2)) {
      console.log(e[0]+'/'+e[1]);
      publicadoresAux = await api.get('designacaoPubl/'+e[0]+'/'+e[1]);
      ultimaDesignacaoAux = await api.get('ultimaDesignacao/'+e[0]+'/'+e[1]);
      ultimaParteAux = await api.get('ultimaParte/'+designacaoAux+'/'+e[0]+'/'+e[1]);
      this.setState({publicadores: publicadoresAux.data});
      this.setState({ultimaDesignacao: ultimaDesignacaoAux.data});
      this.setState({ultimaParte: ultimaParteAux.data});

    }
    else if (e.length ===0){
      publicadoresAux = await api.get('designacaoPubl/');
      ultimaDesignacaoAux = await api.get('ultimaDesignacao/');
      ultimaParteAux = await api.get('ultimaParte/'+designacaoAux);
      this.setState({publicadores: publicadoresAux.data});
      this.setState({ultimaDesignacao: ultimaDesignacaoAux.data});
      this.setState({ultimaParte: ultimaParteAux.data});
    }
  }

     
  async componentDidMount() {
    var designacaoAux = localStorage.getItem('@Designa:designacao');
    var publicadoresAux;
    var ultimaDesignacaoAux;
    var ultimaParteAux;
    console.log('Filtro Privilegio:'+this.state.privilegioRadio);

    if ((designacaoAux != null) && (designacaoAux.length > 0)) {
      this.setState({designacao: designacaoAux});
    }
    if (designacaoAux === 'Presidente') {
      this.setState({designacao2: 'Presidência'});
      this.setState({designacao3: 'Presidir'})
    }
    if ((this.state.privilegioRadio.includes('anciao')) || (this.state.privilegioRadio.includes('servo')) ) {
      publicadoresAux = await api.get('designacaoPubl/'+this.state.privilegioRadio);
      ultimaDesignacaoAux = await api.get('ultimaDesignacao/'+this.state.privilegioRadio);
      console.log('ultimaParte/'+designacaoAux+'/'+this.state.privilegioRadio);
      ultimaParteAux = await api.get('ultimaParte/'+designacaoAux+'/'+this.state.privilegioRadio);
      this.setState({publicadores: publicadoresAux.data});
      this.setState({ultimaDesignacao: ultimaDesignacaoAux.data});
      this.setState({ultimaParte: ultimaParteAux.data});
    }    
  }
    render(){
        return(
          <div>
          <SideBar />
            <Container>
              <Row className="justify-content-center text-center align-center mt-2 ">
                <Col bsPrefix="col-xs-12">
                  <Form.Label>Designação: <b>{this.state.designacao}</b></Form.Label>
                </Col>
              </Row>
              <Row className="justify-content-center text-center align-center ">
                <Col bsPrefix="col-xs-12">
                  <Form.Label className="mr-1">Filtros: </Form.Label>             
                  <Filtro className="ml-1" designacao={this.state.designacao} privilegioRadio={this.state.privilegioRadio} handlePrivilegioChange={this.handlePrivilegioChange} {...this.props}></Filtro>
                </Col>
              </Row>
              <Row className="justify-content-center text-center align-center mt-2 ">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan='2'>Sugestão1: Mais tempo sem {this.state.designacao3}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>                    
                      <td>{this.state.ultimaParte.nome}</td>
                      <td>{this.state.ultimaParte.ultimaPresidencia}</td>
                    </tr>
                  </tbody>
                </Table>              
              </Row>
              <Row className="justify-content-center text-center align-center mt-2 ">
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                      <th colSpan='2'>Sugestão2: Mais tempo sem fazer parte</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{this.state.ultimaDesignacao.nome}</td>
                      <td>{this.state.ultimaDesignacao.ultimaParte}</td>
                    </tr>
                  </tbody>
                </Table>              
              </Row>                                     
              <Row className="justify-content-center text-center align-center ">
                <Table striped bordered hover size="sm" className="mt-4">
                  <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Ultima Parte </th>
                        <th>Ult. {this.state.designacao2}</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.state.publicadores.map(publicador => (
                        <ListaPublDesignacao key={publicador._id} publicador={publicador} {...this.props}/>
                    ))}
                  </tbody>
                </Table>                
              </Row>
            </Container>
            
            
          </div>
        )
    }
}