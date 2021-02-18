import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";

const Routes = ({ setIsAuth }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route path="/home">
        <Home setIsAuth={setIsAuth} />
      </Route>
    </Switch>
  );
};

export default Routes;
