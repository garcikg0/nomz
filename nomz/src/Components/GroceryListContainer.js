import React from "react";
// import { Route, Switch } from 'react-router-dom';
import GroceryNavBar from "./GroceryNavBar";
import { Container } from 'react-bootstrap';
import GroceryCard from "./GroceryCard";

class GroceryListContainer extends React.Component {

    state = {
        grocerylist: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/ingredients")
        .then(r => r.json())
        .then((ingredientArr) => {
            let grocerylist = ingredientArr.filter((ingred) => {
                return ( 
                    ingred.status.includes("In Cart") ||
                    ingred.status.includes("Low")
                )
            })
            this.setState({
               grocerylist: grocerylist
           })
        })
    }

    updateGroceryList = (editedIngred) => {
        let updatedGroceryState = this.state.grocerylist.filter(object => object.id !== editedIngred.id)
        this.setState({
            grocerylist: updatedGroceryState
        })
    }

    render() {
        let arrayOfGroceries = this.state.grocerylist.map((ingred) => {
            return <GroceryCard 
            key={ingred.id}
            ingredient={ingred}
            updateGroceryList={this.updateGroceryList}
            />
        })
        
        return( <>
            <div>
            <GroceryNavBar />
            </div>
            <Container fluid="md" className="homepage2">
                <div className="grocery-grid">
                    {arrayOfGroceries}
                </div>
         </Container>
            
        </>)
    }
}

export default GroceryListContainer;