import { makeStyles } from "@material-ui/core";

export const useMenuStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    height: "56px",
  },
  menuMobile: {
    display: "flex",
    minWidth: "30%",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuDesktop: {
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      minWidth: "45%",
    },
  },
  menuTitle: {
    flexGrow: "1",
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
  textStyles: {
    textOverflow: "ellipsis",
    overflow: "hidden",
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
  perfilStyles: {
    width: "100%",
    margin: "1rem auto",
    textAlign: "left",
  },
  textStyles: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));

export const useListStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    padding: "0.5rem",
    maxWidth: "320px",
    width: "100%",
    margin: "0 auto",

    [theme.breakpoints.up("sm")]: {
      maxWidth: "800px",
    },
  },
  pageStyles: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem auto",
  },
  arrowStyles: {
    "& :hover": {
      cursor: "pointer",
    },
  },
  listStyles: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "100%",
    maxWidth: "300px",
    padding: "0.5rem",
    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "800px",
    },
  },
  itemStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0.5rem 0",
    padding: "0 0.5rem",
  },
  nameStyles: {
    maxWidth: "200px",
    width: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500px",
    },
  },
}));

export const usePageLogin = makeStyles((theme) => ({
  root: {
    maxWidth: "300px",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    padding: "1.5rem  0.5rem",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "800px",
    },
  },
}));

export const useFormStyles = makeStyles((theme) => ({
  inputStyles: {
    maxWidth: "290px",
    width: "100%",
    margin: "0.5rem auto",
    textOverflow: "ellipsis",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500px",
    },
  },
  buttonStyles: {
    maxWidth: "290px",
    width: "100%",
    margin: "0.5rem auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "500px",
    },
  },
}));
