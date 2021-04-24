import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  React from "react"
import Game from "./pages/Game"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/game' component={Game} />
      </Switch>
    </BrowserRouter>
    //<Game />
  );
}


export default App;
