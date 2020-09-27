import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./LandingPage";
import MainContainer from "./MainContainer";
import KitchenContainer from "./KitchenContainer";
import GroceryList from "./GroceryListContainer";
import SearchRecipe from "./SearchRecipe"


class App extends React.Component {

  render() {
    
    return(
        <Switch>
          <Route path="/home" exact>
            <MainContainer />
          </Route>
          <Route path="/kitchen" exact>
            <KitchenContainer />
          </Route>
          <Route path="/groceries" exact>
            <GroceryList />
          </Route>
          <Route path="/searchrecipe" exact>
            <SearchRecipe />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
    );
  }
}

export default App;


