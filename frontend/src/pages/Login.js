import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import designalogo from '../img/logo.png';
import './Login.css';

export default class Login extends Component {
    state = {
        username: '',
    };
    handleInputChange = (e) =>{
        this.setState({username: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        const {username} = this.state;

        if (!username.length) return;

        localStorage.setItem('@Designa:username',username)

        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <Container classname="">
                <Row className="justify-content-center text-center">
                    <Col xs={10} sm={6} md={4} className="centraliza">
                        <Image src={designalogo} alt='Designa' fluid/>
                        <form onSubmit={this.handleSubmit} classname="">
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Control type="username" placeholder="Usuario" value={this.state.username} onChange={this.handleInputChange}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Entrar
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}