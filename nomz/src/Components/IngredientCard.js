import React from "react";
// import { Route, Switch } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import EditIngredForm from './EditIngredForm';


const ingredientAPI = "http://localhost:3000/ingredients/"

class IngredientCard extends React.Component {
    
    hanleDeleteClick = (evt) => {
        fetch(`${ingredientAPI}${this.props.ingredient.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        this.props.updatedIngredients(this.props.ingredient)
    }

    handleRunningLow = (evt) => {
        evt.preventDefault()
        let itemtoBackEnd = {
            status: "Low"
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
        this.props.runningLowButton(editedIngred))
    }
    
    render() {
        let {storage, name, image, status} = this.props.ingredient
        return(
            <Card className="ingredient-box">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <hr></hr>
                            Status: {status}
                            <hr></hr>
                            Stored in the {storage}
                            <hr></hr>
                        </Card.Text>
                        <EditIngredForm 
                        key={this.props.ingredient.id}
                        ingredient={this.props.ingredient}
                        editedIngredients={this.props.editedIngredients}
                        />
                        <Button variant="outline-warning" size="sm" block onClick={this.handleRunningLow}>
                        Running Low
                        </Button>
                        <Button variant="outline-danger" size="sm" block onClick={this.hanleDeleteClick} >
                        Remove
                        </Button>
                </Card.Body>  
            </Card>
        )
    }
}

export default IngredientCard;