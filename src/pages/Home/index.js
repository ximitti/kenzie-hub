// react router dom
import { useHistory } from "react-router-dom";

// components
import Profile from "../../components/Profile";

// provider
import { useAuth } from "../../provider/authentication";
//----------------------------------------------

//----------------------------------------------
const Home = () => {
  const { isAuth } = useAuth();
  const history = useHistory();

  if (!isAuth) {
    history.push("/signup");
  }

  return <Profile />;
};

export default Home;
