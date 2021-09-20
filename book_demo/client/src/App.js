import Create from "./views/Create";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from "./views/Dashboard";

function App() {



  return (
    <BrowserRouter>
    <fieldset>
      <legend> App.js</legend>

        <Switch>

          <Route exact path="/">
            <Create/>
          </Route>

          <Route exact path ="/dashboard">
            <Dashboard/>
          </Route>

        </Switch>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;
