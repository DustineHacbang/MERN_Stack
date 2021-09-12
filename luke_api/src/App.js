import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Form from "./Components/Form";
import PeopleComp from "./Components/PeopleComp";
import PlanetComp from "./Components/PlanetComp";

function App() {
  return (
    <BrowserRouter>
      <h1>Luke API-walker</h1>
      <Form />
      <Switch>
        <Route path="/people/:id">
          <PeopleComp />
        </Route>
        <Route path="/planets/:id">
          <PlanetComp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;