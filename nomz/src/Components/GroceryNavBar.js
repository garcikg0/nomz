import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class GroceryNavBar extends React.Component {
    render () {
        return(
            <Container fluid>
                <Navbar expand="lg" bg="light">
                    <Navbar.Brand href="/home">Nomz</Navbar.Brand>
                    <Nav className="container-fluid">
                        <Nav.Item className="ml-auto">
                            <Nav.Link>
                                <Link to="/myrecipes" exact>
                                <Button variant="outline-success">My Recipes</Button>{'   '}
                                </Link>
                                <Link to="/searchrecipe" exact>
                                <Button variant="outline-success">Find a Recipe</Button>{'   '}
                                </Link>
                                <Button variant="outline-danger">Log Out</Button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </Container> 
        )
    }
}

export default GroceryNavBar;