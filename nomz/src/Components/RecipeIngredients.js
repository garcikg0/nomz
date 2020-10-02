import React from "react";
import { ListGroup, Button } from 'react-bootstrap';


class RecipeIngredients extends React.Component {

    state = {
        ingredMatch: this.props.ingredient.ingredMatch
    }
    
    // handleMatch = (evt) => {

    // }

    

    render() {
        console.log(this.state.ingredMatch)
        let ingredCheck = this.props.kitchenIngredients.map((kitchenIngred) => {
            if (this.props.ingredient.text.toLowerCase().includes(kitchenIngred.name.toLowerCase())) {
                return <ListGroup.Item>
                    {kitchenIngred.name} 
                    </ListGroup.Item>
                }
            })

        // let ingredMatch = this.state.ingredMatch.map((ingredObj) => {
        //     return <ListGroup.Item>
        //         {ingredObj.name} is Available in Your Kitchen's {ingredObj.storage}
        //     </ListGroup.Item>
        // })

        // let ingredMatch = () => {
        //     return<ListGroup.Item>
        //         {this.state.ingredMatch.name} is Available in Your Kitchen's {this.state.ingredMatch.storage}!
        //     </ListGroup.Item>
        // }

            
        return(
            <ListGroup variant="flush">
                {ingredCheck}
            </ListGroup>
        )
    }
}

export default RecipeIngredients;

// (this.state.ingredMatch) {
//     return <ListGroup.Item>
//         {this.state.ingredMatch.name} is Available in Your Kitchen's {this.state.ingredMatch.storage}!
//     </ListGroup.Item>
// } else 