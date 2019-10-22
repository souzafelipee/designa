import React, { Component } from 'react';
import Sidebar from './Sidebar';
import MaskedFormControl from 'react-bootstrap-maskedinput';
import './Publicadores.css';
import imgCalendar from '../img/annual-calendar-symbol.png';
import api from '../services/api';

import { Col,Row,Container,ToggleButton,ToggleButtonGroup,Form,InputGroup,FormControl,Button} from 'react-bootstrap';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    console.log([year, month, day].join('-'));
    return [year, month, day].join('-');
};

export default class Publicadores extends Component {
    state = {
        nome: '',
        celular: '',
        privilegioRadio: 3,
        ativoCheckbox: '',
        leitorCheckbox: '',
        ultimaParte: '',
        ultimaPresidencia: '',
        ultimaOracaoInicial: '',
        ultimoTesouros: '',
        ultimoJoias: '',
        ultimaPresidenciaSalaB: '',
        ultimoNossaVidaEMinisterio: '',
        ultimaLeituraEB: '',
        ultimoEstudoBiblico: '',
        ultimaOracaoFinal: ''
    };
    async componentDidMount() {
        var id = localStorage.getItem('@Designa:publicador_id');
        if ((id != null) && (id.length > 0)) {
            const response = await api.get('publicadores/id/'+id);
            var privilegioRadioAux, ativoCheckboxAux,leitorCheckboxAux;
            var ultimaParteAux,ultimaPresidenciaAux,ultimaOracaoInicialAux,ultimoTesourosAux;
            var ultimoJoiasAux, ultimaPresidenciaSalaBAux, ultimoNossaVidaEMinisterioAux;
            var ultimaLeituraEBAux, ultimoEstudoBiblicoAux, ultimaOracaoFinalAux;

            ultimaParteAux = (response.data.ultimaParte == null) ? '' : formatDate(response.data.ultimaParte);
            ultimaPresidenciaAux = (response.data.ultimaPresidencia == null) ? '' : formatDate(response.data.ultimaPresidencia);
            ultimaOracaoInicialAux = (response.data.ultimaOracaoInicial == null) ? '' : formatDate(response.data.ultimaOracaoInicial);
            ultimoTesourosAux = (response.data.ultimoTesouros == null) ? '' : formatDate(response.data.ultimoTesouros);
            ultimoJoiasAux = (response.data.ultimoJoias == null) ? '' : formatDate(response.data.ultimoJoias);
            ultimaPresidenciaSalaBAux = (response.data.ultimaPresidenciaSalaB == null) ? '' : formatDate(response.data.ultimaPresidenciaSalaB);
            ultimoNossaVidaEMinisterioAux = (response.data.ultimoNossaVidaEMinisterio == null) ? '' : formatDate(response.data.ultimoNossaVidaEMinisterio);
            ultimaLeituraEBAux = (response.data.ultimaLeituraEBAux == null) ? '' : formatDate(response.data.ultimaLeituraEBAux);
            ultimoEstudoBiblicoAux = (response.data.ultimoEstudoBiblico == null) ? '' : formatDate(response.data.ultimoEstudoBiblico);
            ultimaOracaoFinalAux = (response.data.ultimaOracaoFinal == null) ? '' : formatDate(response.data.ultimaOracaoFinal);
            // eslint-disable-next-line
            if (response.data.privilegio == 'publicador') {
                privilegioRadioAux = 3;
            }
            // eslint-disable-next-line
            else if (response.data.privilegio == 'servo'){
                privilegioRadioAux = 2;
            }
            // eslint-disable-next-line
            else if (response.data.privilegio == 'anciao'){
                privilegioRadioAux = 1;
            }
            
            // eslint-disable-next-line
            if (response.data.ativo == true) {
                ativoCheckboxAux = true;
            }
            else {
                ativoCheckboxAux = '';
            }
            // eslint-disable-next-line
            if (response.data.leitor == true) {
                leitorCheckboxAux = true;
            }
            else {
                leitorCheckboxAux = '';
            }            

            
            console.log('Ativo no bd: '+response.data.ativo);
            console.log('Leitor no bd: '+response.data.leitor);
            console.log('ativoCheckboxAux: '+ativoCheckboxAux);
            console.log('leitorCheckboxAux: '+leitorCheckboxAux);
            
            this.setState({nome: response.data.nome,
                celular: response.data.telefone,
                privilegioRadio: privilegioRadioAux,
                ativoCheckbox: ativoCheckboxAux,
                leitorCheckbox: leitorCheckboxAux,
                ultimaParte: ultimaParteAux,
                ultimaPresidencia: ultimaPresidenciaAux,
                ultimaOracaoInicial: ultimaOracaoInicialAux,
                ultimoTesouros: ultimoTesourosAux,
                ultimoJoias: ultimoJoiasAux,
                ultimaPresidenciaSalaB: ultimaPresidenciaSalaBAux,
                ultimoNossaVidaEMinisterio: ultimoNossaVidaEMinisterioAux,
                ultimaLeituraEB: ultimaLeituraEBAux,
                ultimoEstudoBiblico: ultimoEstudoBiblicoAux,
                ultimaOracaoFinal: ultimaOracaoFinalAux
            });
            console.log('State ativoCheckbox: '+this.state.ativoCheckbox);            
        }

    }
    handlePrivilegioChange = (e) =>{
        this.setState({privilegioRadio: e})
    }
    handleAtivoChange = (e) =>{
        console.log('onchange ativoCheckbox: '+e);
        this.setState({ativoCheckbox: e})
    }
    handleLeitorChange = (e) =>{
        this.setState({leitorCheckbox: e})
    }
    handleInputChange = (e) =>{
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }
    handleSubmit  = async e => {
        e.preventDefault();
        const {nome} = this.state;
        const {ultimaParte} = this.state;
        const {ultimaPresidencia} = this.state;
        const {ultimaOracaoInicial} = this.state;
        const {ultimoTesouros} = this.state;
        const {ultimoJoias} = this.state;
        const {ultimaPresidenciaSalaB} = this.state;
        const {ultimoNossaVidaEMinisterio} = this.state;
        const {ultimaLeituraEB} = this.state;
        const {ultimoEstudoBiblico} = this.state;
        const {ultimaOracaoFinal} = this.state;
        var privilegio;
        var ativo;
        var leitor;
        var telefone = this.state.celular;
        if (!nome.length){
            alert('Nome é Obrigatório');
            return;
        } 
        if (!telefone.length){
            alert('Telefone é Obrigatório');
            return;
        }
        switch (this.state.privilegioRadio) {
            case 1:
                privilegio = 'anciao';
                break;
            case 2:
                privilegio = 'servo';
                break;
            case 3:
                privilegio = 'publicador';
                break;
            default :
                privilegio =  'publicador';
                break;
        }    
        // eslint-disable-next-line    
        if ((this.state.ativoCheckbox == true) || (this.state.ativoCheckbox == ',true') ) {
            ativo = true;
        }else{
            ativo = false;
        }
        // eslint-disable-next-line
        if ( (this.state.leitorCheckbox == ',') || (this.state.leitorCheckbox == ',true')) {
            leitor = true;
        }else{
            leitor = false;
        }
        telefone = telefone.replace(/\D/g,"");
        var id = localStorage.getItem('@Designa:publicador_id');
        if ((id != null) && (id.length > 0)) {
            console.log('Front End: Vamos atualizar')
            await api.put('publicadores/id/'+id, {nome,telefone,privilegio,ativo,leitor,ultimaParte,ultimaPresidencia,
                ultimaOracaoInicial,ultimoTesouros,ultimoJoias,ultimaPresidenciaSalaB,ultimoNossaVidaEMinisterio,
                ultimoEstudoBiblico,ultimaLeituraEB,ultimaOracaoFinal});
            localStorage.removeItem('@Designa:publicador_id');
        }
        else {        
            
            await api.post('publicadores', {nome,telefone,privilegio,ativo,leitor,ultimaParte,ultimaPresidencia,
                ultimaOracaoInicial,ultimoTesouros,ultimoJoias,ultimaPresidenciaSalaB,ultimoNossaVidaEMinisterio,
                ultimoEstudoBiblico,ultimaLeituraEB,ultimaOracaoFinal});
        }
        this.props.history.push('/dashboard');
    }
  render() {
    return (
    <div>
        <Sidebar></Sidebar>
        <Container>
            <Form onSubmit={this.handleSubmit}>
                <Container className="mt-3">
                    <Form.Group>
                        <Row className="justify-content-end text-center align-center">
                            <Button variant="success" type='submit'>Salvar</Button>
                        </Row>
                    </Form.Group>
                </Container>
                <Container className="border">                
                <Form.Group as={Row}>
                    <Form.Label column xs={2} sm={2} md={1} >Nome:</Form.Label>
                    <Col xs={10} sm={8} md={8} className="justify-content-start text-left align-left">
                        <Form.Control type='text' name="nome" placeholder="Nome" value={this.state.nome} onChange={this.handleInputChange}/>
                    </Col>
                    <Col bsPrefix="col-sm-1 d-none d-sm-block" >
                        <ToggleButtonGroup name="ativoCheckbox" value={this.state.ativoCheckbox} onChange={this.handleAtivoChange} type="checkbox">
                            <ToggleButton variant="light" value={true}>Ativo</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column  xs={2} sm={2} md={1}>Celular:</Form.Label>
                    <Col xs={6} sm={4} md={3} >
                        <MaskedFormControl name="celular" value={this.state.celular} onChange={this.handleInputChange} type='tel' placeholder="Celular" mask='(11)11111-1111' />
                    </Col>
                    <Col bsPrefix="col-xs-2 d-block d-sm-none">
                        <ToggleButtonGroup  name="ativoCheckbox" value={this.state.ativoCheckbox} onChange={this.handleAtivoChange} type="checkbox">
                            <ToggleButton variant="light" value={true}>Ativo</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col bsPrefix="col-md-5 d-none d-md-block">
                        <ToggleButtonGroup name="privilegioRadio" value={this.state.privilegioRadio} onChange={this.handlePrivilegioChange} type="radio">
                            <ToggleButton variant="light" value={1}>Ancião</ToggleButton>
                            <ToggleButton variant="light" value={2}>Servo</ToggleButton>
                            <ToggleButton variant="light" value={3}>Publicador</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col bsPrefix="col-md-1 d-none d-md-block" className="justify-content-right text-right align-right">
                        <ToggleButtonGroup name="leitorCheckbox" value={this.state.leitorCheckbox} onChange={this.handleLeitorChange} type="checkbox" >
                            <ToggleButton variant="light" value={true}>Leitor</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Row className="justify-content-around text-center align-center">
                        <Col bsPrefix="col-xs-7 d-md-none  d-lg-none d-xl-none">
                            <ToggleButtonGroup name="privilegioRadio" value={this.state.privilegioRadio} onChange={this.handlePrivilegioChange} type="radio">
                                <ToggleButton variant="light" value={1}>Ancião</ToggleButton>
                                <ToggleButton variant="light" value={2}>Servo</ToggleButton>
                                <ToggleButton variant="light" value={3}>Publicador</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                        <Col bsPrefix="col-xs-2 d-md-none d-lg-none d-xl-none">
                            <ToggleButtonGroup  name="leitorCheckbox" value={this.state.leitorCheckbox} onChange={this.handleLeitorChange} type="checkbox">
                                <ToggleButton variant="light" value={true}>Leitor</ToggleButton>
                            </ToggleButtonGroup>
                        </Col>
                    </Row>
                </Form.Group>
                </Container>
                <Container className="border ">
                    <Form.Group>
                            <Row  className="justify-content-center text-center align-center bg-secondary text-white">
                                <Col>
                                    <Form.Label>Ultimas Partes:</Form.Label>   
                                </Col>
                            </Row>
                    </Form.Group>
                    <Form.Group>
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} lg={2}>
                                <Form.Label>Ultima Parte:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} lg={3}>                            
                                <InputGroup>
                                    <FormControl name="ultimaParte" value={this.state.ultimaParte} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                            <Col bsPrefix="col-lg-2 d-none d-lg-block">
                                <Form.Label>Presidencia:</Form.Label>   
                            </Col>
                            <Col bsPrefix="col-lg-3 d-none d-lg-block">                            
                            <InputGroup>
                                <FormControl name="ultimaPresidencia" value={this.state.ultimaPresidencia} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} className="d-lg-none">
                                <Form.Label>Presidencia:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} className="d-lg-none">                            
                            <InputGroup>
                                <FormControl name="ultimaPresidencia" value={this.state.ultimaPresidencia} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} lg={2}>
                                <Form.Label>Oração Inicial:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} lg={3}>                            
                            <InputGroup>
                                <FormControl name="ultimaOracaoInicial" value={this.state.ultimaOracaoInicial} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                            <Col bsPrefix="col-lg-2 d-none d-lg-block">
                                <Form.Label>Tesouros:</Form.Label>   
                            </Col>
                            <Col bsPrefix="col-lg-3 d-none d-lg-block">                            
                            <InputGroup>
                                <FormControl name="ultimoTesouros" value={this.state.ultimoTesouros} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} className="d-lg-none">
                                <Form.Label>Tesouros:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} className="d-lg-none">                            
                            <InputGroup>
                                <FormControl name="ultimoTesouros" value={this.state.ultimoTesouros} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} lg={2}>
                                <Form.Label>Joias:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} lg={3}>                            
                            <InputGroup>
                                <FormControl name="ultimoJoias" value={this.state.ultimoJoias} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                            <Col bsPrefix="col-lg-2 d-none d-lg-block">
                                <Form.Label>Pres. SalaB:</Form.Label>   
                            </Col>
                            <Col bsPrefix="col-lg-3 d-none d-lg-block">                            
                            <InputGroup>
                                <FormControl name="ultimaPresidenciaSalaB" value={this.state.ultimaPresidenciaSalaB} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} className="d-lg-none">
                                <Form.Label>Pres. SalaB:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} className="d-lg-none">                            
                            <InputGroup>
                                <FormControl name="ultimaPresidenciaSalaB" value={this.state.ultimaPresidenciaSalaB} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} lg={2}>
                                <Form.Label>Vida e Ministério:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} lg={3}>                            
                            <InputGroup>
                                <FormControl name="ultimoNossaVidaEMinisterio" value={this.state.ultimoNossaVidaEMinisterio} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                            <Col bsPrefix="col-lg-2 d-none d-lg-block">
                                <Form.Label>Estudo Biblico:</Form.Label>   
                            </Col>
                            <Col bsPrefix="col-lg-3 d-none d-lg-block">                            
                            <InputGroup>
                                <FormControl name="ultimoEstudoBiblico" value={this.state.ultimoEstudoBiblico} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} className="d-lg-none">
                                <Form.Label>Estudo Bíblico:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} className="d-lg-none">                            
                            <InputGroup>
                                <FormControl name="ultimoEstudoBiblico" value={this.state.ultimoEstudoBiblico} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} lg={2}>
                                <Form.Label>Leitura Estudo:</Form.Label>   
                            </Col>
                            <Col xs={8} sm={6} md={4} lg={3}>                            
                            <InputGroup>
                                <FormControl name="ultimaLeituraEB" value={this.state.ultimaLeituraEB} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                            <Col bsPrefix="col-lg-2 d-none d-lg-block">
                                <Form.Label>Oração Final</Form.Label>
                            </Col>
                            <Col bsPrefix="col-lg-3 d-none d-lg-block">                            
                            <InputGroup>
                                <FormControl name="ultimaOracaoFinal" value={this.state.ultimaOracaoFinal} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                        <Row className="justify-content-center text-right align-center">
                            <Col xs={4} sm={4} md={3} className="d-lg-none">
                                <Form.Label>Oração Final</Form.Label>
                            </Col>
                            <Col xs={8} sm={6} md={4} className="d-lg-none">                            
                            <InputGroup>
                                <FormControl name="ultimaOracaoFinal" value={this.state.ultimaOracaoFinal} onChange={this.handleInputChange} type='date'  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
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
                </Container>
                <Container >
                    <Form.Group>
                        <Row className="justify-content-center text-center align-center">
                            <Button type='submit' variant="success">Salvar</Button>
                        </Row>
                    </Form.Group>
                </Container>
            </Form>
        </Container>    
    </div>
    )
  }
}
