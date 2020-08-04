import React, { Component } from 'react';
export default class ListaPublDesignacao extends Component {
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