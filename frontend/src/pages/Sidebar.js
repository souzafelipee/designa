import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import designalogo from '../img/logo.png';

export default class Sidebar extends Component {
  render() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/dashboard">
          <img
            alt=""
            src={designalogo}
            width="100"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">          
          <Nav className="mr-auto flex-column-sm">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/publicadoresBar">Publicadores</Nav.Link>
            <Nav.Link href="/designacoes">Designacoes</Nav.Link>
          </Nav>
        </Navbar.Collapse>        
       </Navbar>
    )
  }
}
