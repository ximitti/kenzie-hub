import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route path="/home"></Route>
    </Switch>
  );
};

export default Routes;
