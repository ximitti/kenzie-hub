// react
import { createContext, useContext, useEffect, useState } from "react";

// axios
import API from "../../services";

// endpoints
import { getAllUsers } from "../../services/endpoints";

// -------------------------------------------------
// criar context
const UserListContext = createContext();

// -------------------------------------------------
export const UserListProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [nextPage, setNextPage] = useState(2);

  useEffect(() => {
    getList(page);
    // eslint-disable-next-line
  }, []);

  const getNextPage = () => {
    if (userList.length > 0) {
      getList(nextPage);

      setPrevPage(prevPage + 1);
      setPage(nextPage);
      setNextPage(nextPage + 1);
    }
  };

  const getPrevPage = () => {
    if (prevPage > 0) {
      getList(prevPage);

      setNextPage(nextPage - 1);
      setPage(prevPage);
      setPrevPage(prevPage - 1);
    }
  };

  const getList = async (page) => {
    try {
      const response = await API.get(getAllUsers(page));

      setUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserListContext.Provider
      value={{
        userList,
        setUserList,
        page,
        setPage,
        prevPage,
        setPrevPage,
        nextPage,
        setNextPage,
        getNextPage,
        getPrevPage,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};

// cria o hook
export const useUserList = () => useContext(UserListContext);
