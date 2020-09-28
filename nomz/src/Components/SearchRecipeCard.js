import React from "react";
import { Button, Col, Image, Row } from 'react-bootstrap';

class SearchRecipeCard extends React.Component {

    render() {
        let {name, image, source} = this.props.recipe
        return(
            <Row className="grocery-box">
                <Col className="recipe-search-img-col" md={3}>
                    <Image src={image} rounded className="recipe-search-img"/>
                </Col>
                <Col className="recipe-search-img-col" md={3}>
                    {name}
                    <br></br>
                    From: {source}
                </Col>
                    <Col md={6}>
                    <Button variant="outline-secondary" size="sm" className="grocery-list-button" >
                    Instructions
                    </Button>{" "}
                    <Button variant="outline-primary" size="sm" className="grocery-list-button" >
                    Add to My Recipe Library
                    </Button>{" "}
                </Col>
            </Row>      
        )
    }
}

export default SearchRecipeCard;