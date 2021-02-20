import { useState, useEffect } from "react";
import API from "../../services";
import { useHistory } from "react-router-dom";
import Profile from "../../components/Profile";
//----------------------------------------------

//----------------------------------------------
const Home = ({ setIsAuth }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return;
    }
    setIsAuth(true);
    return JSON.parse(localToken);
  });

  if (!token) {
    history.push("/signup");
  }

  useEffect(() => {
    if (token) {
      API.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response);
          setUser(response.data);

          if (change) {
            setChange(false);
          }
        })
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line
  }, [change]);

  const onChange = () => {
    setChange(true);
  };

  return <Profile user={user} onChange={onChange} />;
};

export default Home;
