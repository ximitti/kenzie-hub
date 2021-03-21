// react
import { createContext, useContext, useState } from "react";

// axios
import API from "../../services";

// endpoints
import {
  bearer,
  getUser,
  postCreateTech,
  delTech,
  putTech,
} from "../../services/endpoints";

// providers
import { useAuth } from "../authentication";
// -----------------------------------------------------
// criar o context
const UserContext = createContext();

// -----------------------------------------------------
export const UserProvider = ({ children }) => {
  const { token } = useAuth();
  const [user, setUser] = useState({});

  const getUserData = async () => {
    try {
      const response = await API.get(getUser(), bearer(token));

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateTech = async (data) => {
    try {
      await API.post(postCreateTech, data, bearer(token));

      getUserData();
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteTech = async (techId) => {
    try {
      await API.delete(delTech(techId), bearer(token));

      getUserData();
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeTech = async (data, techId) => {
    try {
      await API.put(putTech(techId), data, bearer(token));

      getUserData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getUserData,
        onDeleteTech,
        onChangeTech,
        onCreateTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// cria o hook
export const useUser = () => useContext(UserContext);
