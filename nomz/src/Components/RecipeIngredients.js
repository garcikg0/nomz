import React from "react";
import { ListGroup, Button } from 'react-bootstrap';


class RecipeIngredients extends React.Component {

    state = {
        ingredMatch: ""
    }

//    ingredCheck = (recipeIngred) => {
    
//     }   

    render() {
        console.log(this.props.kitchenIngredients)
        console.log(this.props.ingredient)
        let ingredCheck = this.props.kitchenIngredients.map((kitchenIngred) => {
            if (this.props.ingredient.toLowerCase().includes(kitchenIngred.name.toLowerCase())) {
                return <ListGroup.Item>
                    {kitchenIngred.name}
                    <Button variant="success">Match</Button>
                    <Button variant="danger">Not a Match</Button>
                    </ListGroup.Item>
                }
            })

        
        return(
            <ListGroup variant="flush">
                {ingredCheck}
            </ListGroup>
        )
    }
}

export default RecipeIngredients;