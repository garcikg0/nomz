import React from "react";
import HomeNavBar from "./HomeNavBar"
import { Container } from 'react-bootstrap';

class SearchRecipe extends React.Component {

    state = {
        searchTerm: "",
        recipeSearchResults: []
    }

    render() {
        return(<>
            <div >
            <HomeNavBar />
        </div> 
        <Container fluid="md" className="homepage2">
        <div className="grocery-grid">

        </div>
        </Container>
        </>)
    }
}

export default SearchRecipe;