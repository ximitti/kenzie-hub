import { makeStyles } from "@material-ui/core";

export const useMenuStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    height: "56px",
  },
  menuMobile: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuDesktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      minWidth: "165px",
    },
  },
  menuTitle: {
    flexGrow: "1",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingRight: "150px",
    },
  },
}));

export const useProfileStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    maxWidth: "300px",
    width: "100%",
    padding: "1rem",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "800px",
    },
  },
  perfilStyles: {
    width: "100%",
    margin: "1rem auto",
    textAlign: "left",
  },
}));

export const useTechStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: "0.5rem 0 0.5rem 0",
  },
}));

export const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 280,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #1480fb",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  formControl: {
    minWidth: 250,
    width: "100%",
  },
}));

export const useUserModalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #1480fb",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));
