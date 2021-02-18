import { AppBar, Toolbar, MenuItem } from "@material-ui/core/";

import { useHistory } from "react-router-dom";

const Menu = ({ isAuth, setIsAuth }) => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const handleCloseApplication = () => {
    localStorage.clear();
    setIsAuth(false);
    sendTo("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isAuth ? (
          <>
            <MenuItem onClick={() => sendTo("/home")}>Home</MenuItem>
            <MenuItem onClick={handleCloseApplication}>Sair</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={() => sendTo("/")}>Login</MenuItem>
            <MenuItem onClick={() => sendTo("/signup")}>Registro</MenuItem>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
