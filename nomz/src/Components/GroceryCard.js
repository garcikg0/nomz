import React from "react";
// import { Route, Switch } from 'react-router-dom';
import { Button, Col, Image, Row } from 'react-bootstrap';

class GroceryCard extends React.Component {

    handleAddToKitchen = (evt) => {
        evt.preventDefault()
        let itemtoBackEnd = {
            status: "Available"
        }
        fetch(`http://localhost:3000/ingredients/${this.props.ingredient.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(itemtoBackEnd)
        })
        .then(res => res.json())
        .then((editedIngred) => 
        this.props.updateGroceryList(editedIngred))
    }

    handleRemove = (evt) => {
        evt.preventDefault()
        let itemtoBackEnd = {
            status: "None"
        }
        fetch(`http://localhost:3000/ingredients/${this.props.ingredient.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(itemtoBackEnd)
        })
        .then(res => res.json())
        .then((editedIngred) => 
        this.props.updateGroceryList(editedIngred))
    }
    
    render() {
        let {name, image} = this.props.ingredient
        return(
            <Row className="grocery-box">
                <Col md={3}>
                    <Image src={image} rounded className="grocery-img"/>
                </Col>
                <Col md={3}>
                    {name}
                </Col>
                    <Col md={6}>
                    <Button variant="outline-primary" size="sm" className="grocery-list-button" onClick={this.handleAddToKitchen} >
                    Add to Kitchen
                    </Button>{" "}
                    <Button variant="outline-danger" size="sm" className="grocery-list-button" onClick={this.handleRemove} >
                    Remove
                    </Button>{" "}
                </Col>
            </Row>      
        )
    }
}

export default GroceryCard;