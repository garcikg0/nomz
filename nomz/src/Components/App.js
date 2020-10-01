import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./LandingPage";
import MainContainer from "./MainContainer";
import KitchenContainer from "./KitchenContainer";
import GroceryList from "./GroceryListContainer";
import SearchRecipe from "./SearchRecipe";
import MyRecipesContainer from "./MyRecipesContainer"


class App extends React.Component {

  state = {
    recipeLibrary: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/recipes")
    .then(res => res.json())
    .then((recipeArr) => {
        this.setState({
            recipeLibrary: recipeArr
        })
      })
  }

  render() {
    return(
        <Switch>
          <Route path="/kitchen" exact>
            <KitchenContainer />
          </Route>
          <Route path="/groceries" exact>
            <GroceryList />
          </Route>
          <Route path="/searchrecipe" exact>
            <SearchRecipe />
          </Route>
          <Route path="/myrecipes" exact>
            <MyRecipesContainer 
            recipeLibrary={this.state.recipeLibrary}
            />
          </Route>
          <Route path="/home" exact>
            <MainContainer />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
        </Switch>
    );
  }
}

export default App;


