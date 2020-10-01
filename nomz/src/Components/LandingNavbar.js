import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class LandingNavbar extends React.Component {
    render () {
        return(
            <Container fluid>
            <Navbar expand="lg" bg="light">
              <Navbar.Brand className="navHeader">Nomz</Navbar.Brand>
              <Nav className="container-fluid">
                <Nav.Item className="ml-auto">
                  <Nav.Link>
                    <Link to="/home">
                    <Button variant="success" size="sm">Log In</Button>{' '}
                    </Link>
                    <Button variant="primary" size="sm">Sign Up</Button>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
            </Container> 
        )
    }
}

export default LandingNavbar;