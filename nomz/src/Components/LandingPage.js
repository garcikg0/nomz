import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import LandingNavbar from "./LandingNavbar";

class LandingPage extends React.Component {

    render() {
        return(
            <>
            <div>
              <LandingNavbar />
            </div>
            <div>
              <Container fluid>
              <Jumbotron>
                <h1>Welcome to Nomz!</h1>
                <p>Here is where I will put more content</p>
                <p>
                  <Button variant="primary">Sign up</Button>
                </p>
              </Jumbotron>
              </Container>
            </div>
            </> 
        )
    }
}

export default LandingPage;