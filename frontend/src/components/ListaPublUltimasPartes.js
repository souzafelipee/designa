import React, { Component } from 'react';
export default class ListaPublUltimasPartes extends Component {
    /*{handleClick = (e) =>{
        console.log('clicked:');
        console.log(this.props.publicador._id);        
        console.log(this.props.publicador.nome);
        console.log(this.props.publicador.telefone);
        localStorage.setItem('@Designa:publicador_id',this.props.publicador._id)
        this.props.history.push('/publicadores');
    }*/
    render() {
        return (
            <tr /*onClick={this.handleClick}*/>
                <td>{this.props.publicador.nome}</td>
                <td>{this.props.publicador.ultimaParte}</td>
                <td>{this.props.publicador.ultimaPresidencia}</td>
            </tr>
        )
    }
}