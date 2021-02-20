import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
//--------------------------------------------
const getModalStyle = () => {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
//--------------------------------------------
const ChangeTech = ({ onChange, tech }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <Box style={modalStyle} className={classes.paper}>
      <h4>Alterar status</h4>
      <Box>
        <Button>Alterar</Button>
      </Box>
    </Box>
  );
};

export default ChangeTech;
