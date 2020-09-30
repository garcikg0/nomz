import React from "react";
import HomeNavBar from "./HomeNavBar";
import RecipeCard from "./RecipeCard";
import { Container } from 'react-bootstrap';

class MyRecipesContainer extends React.Component {

    state = {
        recipeLibrary: this.props.recipeLibrary,
        kitchenIngredients: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/ingredients")
        .then(res => res.json())
        .then((ingredArr) => {
            this.setState({
                kitchenIngredients: ingredArr
            })
        })
    }

  
    
    render() {
        let recipeArr = this.state.recipeLibrary.map((recipe) => {
            return <RecipeCard 
            key={recipe.id}
            recipe={recipe}
            kitchenIngredients={this.state.kitchenIngredients}
            />
        })
        return(<>
        <div>
            <HomeNavBar />
        </div>
        <Container fluid="md" className="homepage2">
        <div className="grocery-grid">
            {recipeArr}
        </div>
        </Container>
        </>)
    }
}

export default MyRecipesContainer;