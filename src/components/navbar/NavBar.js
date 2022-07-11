
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="home">ZSS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar