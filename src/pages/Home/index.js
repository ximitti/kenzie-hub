import { useState, useEffect } from "react";
import API from "../../services";
import { useHistory } from "react-router-dom";
import Profile from "../../components/Profile";
//----------------------------------------------
const Home = ({ setIsAuth }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return;
    }
    setIsAuth(true);
    return JSON.parse(localToken);
  });

  useEffect(() => {
    if (token) {
      API.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response);
          setUser(response.data);
        })
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line
  }, []);

  if (!token) {
    console.log(token);
    history.push("/signup");
  }

  return <Profile user={user} />;
};

export default Home;
