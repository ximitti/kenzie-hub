// react
import { createContext, useContext, useState } from "react";

// -----------------------------------
// cria o contexto
const AuthContext = createContext();

// -----------------------------------
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem("token")) || null
  );
  const [isAuth, setIsAuth] = useState(() => (token ? true : false));

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
