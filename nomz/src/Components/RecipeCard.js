import React from "react";
import { Button, Col, Image, Row, Collapse } from 'react-bootstrap';
import RecipeIngredients from "./RecipeIngredients"

class RecipeCard extends React.Component {

    state = {
        open: false
    }

    handleClick = (evt) => {
        evt.preventDefault()
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let {name, image, source, url} = this.props.recipe
        let recipeIngredients = this.props.recipe.ingredients.map((ingred) => {
            return <tr className="recipe-row">
                <td className="recipe-cell">{ingred.text}</td>
                <td className="recipe-cell"> 
                    <RecipeIngredients 
                    ingredient={ingred}
                    kitchenIngredients={this.props.kitchenIngredients}
                    />
                </td>
            </tr>
        })

        return(<>
            <Row className="recipe-box">
                <Col className="recipe-search-img-col" md={3}>
                    <Image src={image} rounded className="recipe-search-img"/>
                </Col>
                <Col className="recipe-search-img-col" md={3}>
                    {name}
                    <br></br>
                    From: {source}
                </Col>
                <Col md={6}>
                    <Button variant="outline-secondary" size="sm" className="grocery-list-button"
                    href={url}
                    target="_blank" >
                    Instructions
                    </Button>{" "}
                    <Button variant="outline-primary" size="sm" className="grocery-list-button"
                    onClick={this.handleClick} >
                        Ingredients
                    </Button>{" "}
                </Col>
                <Collapse in={this.state.open}>
                    <div className="recipe-collapse">
                        <table className="recipe-table">
                            <tr >
                                <th className="recipe-cell">
                                    Ingredients From Recipe
                                </th>
                                <th className="recipe-cell">
                                    Ingredient(s) in your Kitchen
                                </th>
                            </tr>
                            {recipeIngredients}
                        </table>
                    </div>
                </Collapse>     
            </Row>
             
        </>)
    }
}

export default RecipeCard;