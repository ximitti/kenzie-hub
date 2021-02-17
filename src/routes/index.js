import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/signup"></Route>
      <Route path="/home"></Route>
    </Switch>
  );
};

export default Routes;
