import React from "react";
import HomeNavBar from "./HomeNavBar"
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchRecipeCard from "./SearchRecipeCard"

class SearchRecipe extends React.Component {

    state = {
        searchTerm: "",
        recipeSearchResults: []
    }

    handleSearch = (evt) => {
        evt.preventDefault()
        fetch("https://api.edamam.com/search?q=carrot+ginger+dressing+bon+appetit&app_id=0b82cc58&app_key=261ccdef93fe9904029ee5ff77011f79")
        .then(res => res.json())
        .then((searchResultArr) => {
            let resultArr = []
            searchResultArr.hits.map((recipeData) => {
                let resultObj = {
                    name: recipeData.recipe.label,
                    image: recipeData.recipe.image,
                    source: recipeData.recipe.source,
                    url: recipeData.recipe.url,
                    ingredientLines: recipeData.recipe.ingredientLines,
                    ingredients: recipeData.recipe.ingredients
                }
                resultArr.push(resultObj)
                return resultArr 
                })

            this.setState({
                recipeSearchResults: resultArr
            })
        })
    }

    render() {
        console.log(this.state.recipeSearchResults)
        let searchResultArr = this.state.recipeSearchResults.map((recipe) => {
            return <SearchRecipeCard 
            key={recipe.id}
            recipe={recipe}
            />
        })

        return(<>
            <div >
            <HomeNavBar />
        </div> 
        <Container fluid="md" className="homepage2">
            <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Search for a Recipe"
                aria-label="Search for a Recipe"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <Button variant="secondary" onClick={this.handleSearch}>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            </div>
        <div className="grocery-grid">
            {searchResultArr}
        </div>
        </Container>
        </>)
    }
}

export default SearchRecipe;