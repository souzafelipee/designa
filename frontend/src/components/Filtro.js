import React, { Component } from 'react';
//import FiltroPresidente from '../components/FiltroPresidente';
import { ToggleButton,ToggleButtonGroup} from 'react-bootstrap';
export default class Filtro extends Component {
    state = {
        designacao: ''
    };
    componentDidMount() {        
        var designacaoAux = localStorage.getItem('@Designa:designacao');
        this.setState({designacao: designacaoAux});
    }
    /*handlePrivilegioChange = (e) =>{
        this.setState({privilegioRadio: e})
        localStorage.setItem('@Designa:selPubFiltro',e);
    }*/
    render() {
        if (this.state.designacao==='Presidente') {
            return (
            <ToggleButtonGroup name="privilegioRadio" value={this.props.privilegioRadio} onChange={this.props.handlePrivilegioChange} type="checkbox">
                <ToggleButton variant="info" value={'anciao'}>Ancião</ToggleButton>
                <ToggleButton variant="info" value={'servo'}>Servo</ToggleButton>
            </ToggleButtonGroup>
            );
        }
        return (<h1>Erro!</h1>);
        
    }
}