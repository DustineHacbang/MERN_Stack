import Create from "./views/Create";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashbaord from "./views/Dashbaord";
import Details from "./views/Details";
import Update from "./views/Update";

function App() {

  return (
    <BrowserRouter>
      <div>
        
        <Switch>

          <Route exact path="/" >
            <Create />
          </Route>


          <Route exact path="/dashboard">
            <Dashbaord />
          </Route>

          <Route exact path="/products/:id">
            <Details />
          </Route>

          <Route exact path="/products/:id/edit">
            <Update />
          </Route>


        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;