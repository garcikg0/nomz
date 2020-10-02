import React from "react";
// import { Route, Switch } from 'react-router-dom';
import HomeNavBar from "./HomeNavBar";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import IngredientCard from "./IngredientCard";
import AddIngredForm from "./AddIngredForm"

class KitchenContainer extends React.Component {

    state = {
        ingredients: []
      }
  
      componentDidMount(){
          fetch("http://localhost:3000/ingredients")
          .then(r => r.json())
          .then((ingredientArr) => {
              let ingredients = ingredientArr.filter((ingred) => {
                  return (
                      ingred.status.includes("Available") ||
                      ingred.status.includes("Low")
                  )
              })
              this.setState({
                  ingredients: ingredients
              })
          })
      }

      addIngredient = (newIngred) => {
          let arrOfIngreds = [newIngred, ...this.state.ingredients]
          this.setState({
              ingredients: arrOfIngreds
            })
        }

      updatedIngredients = (ingred) => {
          let updatedIngredState = this.state.ingredients.filter(object => object.id !== ingred.id)
          this.setState({
              ingredients: updatedIngredState
          })
      }

     editedIngredients = (editedIngred) => {
        const elementsIndex = this.state.ingredients.findIndex(element => element.id === editedIngred.id)
        let newArray = [...this.state.ingredients]
        newArray[elementsIndex] = {...newArray[elementsIndex], storage: editedIngred.storage, name: editedIngred.name, image: editedIngred.image, status: editedIngred.status, notes: editedIngred.notes}
        this.setState({
            ingredients: newArray
        })
     }

     runningLowButton = (editedIngred) => {
        const elementsIndex = this.state.ingredients.findIndex(element => element.id === editedIngred.id)
        let newArray = [...this.state.ingredients]
        newArray[elementsIndex] = {...newArray[elementsIndex], status: "Low"}
        this.setState({
            ingredients: newArray
        })
     }
        

    render() {
        
        let currentIngredArr = this.state.ingredients

        let arrayOfIngredients = this.state.ingredients.map((ingred) => {
            return <IngredientCard 
            key={ingred.id}
            ingredient={ingred}
            updatedIngredients={this.updatedIngredients}
            currentIngredArr={currentIngredArr}
            editedIngredients={this.editedIngredients}
            runningLowButton={this.runningLowButton}
            />
        })

        

        return(
        <>
        <div>
            <HomeNavBar />
        </div>
        {/* <div className="subnav">
            <div className="subnav-container">  
                <div className="subnav-search">
                    <h3>Search:</h3>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="subnav-filter">
                    <h3>Filter:</h3>
                    <Button variant ="outline-info" className="filter-button">All</Button>
                    <Button variant ="outline-info" className="filter-button">Fridge</Button>
                    <Button variant ="outline-info" className="filter-button">Freezer</Button>
                    <Button variant ="outline-info" className="filter-button">Pantry</Button>
                </div>
            </div>
        </div> */}
        
        <AddIngredForm addIngredient={this.addIngredient} />
        
        <div className="kitchen-ingred-container">
            <div className="grid">
                {arrayOfIngredients}
            </div>
        </div>
       
        
        </>
        )
    }
}

export default KitchenContainer;