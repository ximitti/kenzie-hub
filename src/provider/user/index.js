// react
import { createContext, useContext, useState } from "react";

// API
import API from "../../services";

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
      const response = await API.get("/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateTech = async (data) => {
    try {
      await API.post(`/users/techs/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      getUserData();
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteTech = async (techId) => {
    try {
      await API.delete(`/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      getUserData();
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeTech = async (data, techId) => {
    try {
      await API.put(`/users/techs/${techId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

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

export const useUser = () => useContext(UserContext);
