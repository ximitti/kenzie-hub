import {
  Box,
  AppBar,
  Toolbar,
  MenuItem,
  Typography,
  Divider,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

// provider
import { useAuth } from "../../provider/authentication";
//----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
//----------------------------------------------------------------------
const Menu = () => {
  const { isAuth, setIsAuth, setToken } = useAuth();
  const classes = useStyles();
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const handleCloseApplication = () => {
    localStorage.clear();
    setToken(null);
    setIsAuth(false);
    sendTo("/");
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="flex-start" minWidth="165px">
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
            <Divider orientation="vertical" flexItem />
            <MenuItem onClick={() => sendTo("/userlist")}>
              Lista de usuários
            </MenuItem>
          </Box>
          <Box flexGrow={1} pr="150px">
            <Typography variant="h6">KENZIE HUB</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
