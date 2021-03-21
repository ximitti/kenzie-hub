// react router dom
import { Switch, Route } from "react-router-dom";

// pages
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import UserList from "../pages/UserList";
import NotFound from "../pages/NotFound";

// --------------------------------
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/userlist">
        <UserList />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
