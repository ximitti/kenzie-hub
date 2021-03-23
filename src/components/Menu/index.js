// react
import { useState } from "react";

// material
import {
  Box,
  AppBar,
  Toolbar,
  MenuItem,
  Typography,
  Divider,
  Menu,
} from "@material-ui/core/";
import { useMenuStyles } from "../../styles/makeStyles";
import MenuIcon from "@material-ui/icons/Menu";

// react router dom
import { useHistory } from "react-router-dom";

// provider
import { useAuth } from "../../provider/authentication";
//----------------------------------------------------------------------
//----------------------------------------------------------------------
const MenuBar = () => {
  const { isAuth, setIsAuth, setToken } = useAuth();
  const classes = useMenuStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sendTo = (path) => {
    handleClose();
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
      <AppBar position="fixed">
        <Toolbar>
          <Box className={classes.menuDesktop}>
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
          <Box className={classes.menuMobile}>
            <MenuIcon
              onClick={handleClick}
              aria-controls="simple-menu"
              aria-haspopup="true"
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {isAuth ? (
                <>
                  <MenuItem onClick={() => sendTo("/home")}>Home</MenuItem>
                  <MenuItem onClick={handleCloseApplication}>Sair</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={() => sendTo("/")}>Login</MenuItem>
                  <MenuItem onClick={() => sendTo("/signup")}>
                    Registro
                  </MenuItem>
                </>
              )}
              <MenuItem onClick={() => sendTo("/userlist")}>
                Lista de usuários
              </MenuItem>
            </Menu>
          </Box>
          <Box className={classes.menuTitle}>
            <Typography variant="h6">KENZIE HUB</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuBar;
