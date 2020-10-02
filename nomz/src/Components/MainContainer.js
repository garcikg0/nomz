import React from "react";
import { Container, Button, Row, Col } from 'react-bootstrap';
import HomeNavBar from "./HomeNavBar";
import { Link } from 'react-router-dom';

class MainContainer extends React.Component {

    render() {
        return(<>
            <div >
                <HomeNavBar />
            </div>
            <div>
            <Container fluid="md" className="homepage">
                <Row>
                    <Col>
                        <Link to="/kitchen">
                        <Button variant="secondary" size="lg" block>
                            My Kitchen
                        </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/myrecipes">
                        <Button variant="secondary" size="lg" block>
                            My Recipe Library
                        </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/searchrecipe">
                        <Button variant="secondary" size="lg" block>
                            Find a Recipe
                        </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            </div>

            </>
        )
    }
}

export default MainContainer;