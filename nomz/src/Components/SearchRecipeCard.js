import React from "react";
import { Button, Col, Image, Row, Badge } from 'react-bootstrap';

class SearchRecipeCard extends React.Component {

    state = {
        kitchen_id: 1,
        name: this.props.recipe.name,
        image: this.props.recipe.image,
        source: this.props.recipe.source,
        url: this.props.recipe.url,
        ingredientLines: this.props.recipe.ingredientLines,
        ingredients: this.props.recipe.ingredients,
        inLibrary: false,
        recipeLibrary: this.props.recipeLibrary
    }

    // savedLibrary = (recipe) => {
    //     this.state.recipeLibrary.map((savedRecipe) => {
    //         if (savedRecipe.url === recipe.url) {
    //             this.setState({
    //                 inLibrary: true
    //             })
    //         }
    //         else {this.setState({
    //             inLibrary: false
    //         })}
    //     })
    // }

    handleSubmit = (evt) => {
        evt.preventDefault()
        
        let itemToBackEnd = {
            kitchen_id: this.state.kitchen_id,
            name: this.state.name,
            image: this.state.image,
            source: this.state.source,
            url: this.state.url,
            ingredientLines: this.state.ingredientLines,
            ingredients: this.state.ingredients
        }
        fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(itemToBackEnd)
        })
        .then(res => res.json())
        .then ((newRecipe) => {
            console.log(newRecipe)
        })
    }
    
    render() {
        let {name, image, source, url} = this.props.recipe
        // this.savedLibrary(this.props.recipe)
        // console.log(this.state.inLibrary)
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
                    <div>
                        {this.state.inLibrary ? <Badge variant="success">Saved in Your Library!</Badge> : "" }
                    </div> 
                    <Button variant="outline-secondary" size="sm" className="grocery-list-button"
                    href={url}
                    target="_blank" >
                    Instructions
                    </Button>{" "}
                    {/* {this.state.inLibrary ? <p>In Library</p> : <p>Not In Library</p>} */}
                    <Button variant="outline-primary" size="sm" className="grocery-list-button"
                    onClick={this.handleSubmit} >
                        Add to Library
                        {/* {this.state.inLibrary ? "View in Library" : "Add to Library"} */}
                    </Button>{" "}
                </Col>
            </Row>      
        )
    }
}

// this.state.inLibrary ? <Button “View in library”> : <Button “Add to Library></Button>

// {this.state.inLibrary ? “View in Library” : “Add to Recipe Library”}


export default SearchRecipeCard;