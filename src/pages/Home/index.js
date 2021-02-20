import API from "../../services";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Profile from "../../components/Profile";
//----------------------------------------------

//----------------------------------------------
const Home = ({ setIsAuth }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [change, setChange] = useState(false);
  const [token] = useState(() => {
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
      getUserData();
    }
    // eslint-disable-next-line
  }, [change]);

  const getUserData = async () => {

    const response = await API.get("/profile", {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((e) => console.log(e));

    if (response) {
      await setUser(response.data);

      if (change) {
        console.log("onChange no Home")
        await setChange(false);
      }

    }
  }

  const onChange = async () => {
    setChange(true);
  };

  return <Profile user={user} onChange={onChange} />;
};

export default Home;
