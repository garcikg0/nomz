import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class HomeNavbar extends React.Component {
    render () {
        return(
            
        <Navbar expand="lg" bg="light">
            <div className="nav-layout">
                <Navbar.Brand href="/home">Nomz</Navbar.Brand>
                <Nav>
                    <Nav.Item className="ml-auto">
                        <Nav className="button-spacing">
                            <Link to="/myrecipes">
                            <Button variant="outline-success">My Recipes</Button>{'   '}
                            </Link>
                            <Link to="/groceries">
                            <Button variant="outline-success">Grocery list</Button>{'   '}
                            </Link>
                            <Button variant="outline-danger">Log Out</Button>
                        </Nav>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
        
    )
}
}

export default HomeNavbar;