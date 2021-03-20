import { Box, AppBar, Toolbar, MenuItem, Typography } from "@material-ui/core/";
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
  const { isAuth, setIsAuth } = useAuth();
  const classes = useStyles();
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
