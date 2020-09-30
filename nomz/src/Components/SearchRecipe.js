import React from "react";
import HomeNavBar from "./HomeNavBar"
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchRecipeCard from "./SearchRecipeCard"

const edamamURL = "https://api.edamam.com/search?q="
const apiKeys = "&app_id=0b82cc58&app_key=261ccdef93fe9904029ee5ff77011f79"
const resultAmount = "&from=0&to=20"

class SearchRecipe extends React.Component {

    state = {
        searchTerm: "",
        recipeSearchResults: [],
        recipeLibrary: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/recipes")
        .then(r => r.json())
        .then((recipeArr) => {
            this.setState({
                recipeLibrary: recipeArr
            })
        })
    }

    handleSearch = (evt) => {
        evt.preventDefault()
        let searchTerm = this.state.searchTerm
        fetch(`${edamamURL}${searchTerm}${apiKeys}${resultAmount}`)
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

    handleSearchTerm = (evt) => {
        let searchTyped = evt.target.value
        let urlSearchTerm = searchTyped.split(' ').join('+')
        this.setState({
            searchTerm: urlSearchTerm
        })
    }

    render() {
        console.log(this.state.searchTerm)
        let searchResultArr = this.state.recipeSearchResults.map((recipe) => {
            return <SearchRecipeCard 
            key={recipe.id}
            recipe={recipe}
            recipeLibrary={this.state.recipeLibrary}
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
                onChange={this.handleSearchTerm}
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