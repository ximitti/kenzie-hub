// react
import { useEffect } from "react";

// react router dom
import { useHistory } from "react-router-dom";

// components
import Profile from "../../components/Profile";

// provider
import { useUser } from "../../provider/user";
import { useAuth } from "../../provider/authentication";
//----------------------------------------------

//----------------------------------------------
const Home = () => {
  const { isAuth } = useAuth();
  const history = useHistory();
  const { user, getUserData } = useUser();

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  if (!isAuth) {
    history.push("/signup");
  }

  return <Profile user={user} home />;
};

export default Home;
