// react
import { useState } from "react";

// react hook form
import { useForm, Controller } from "react-hook-form";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@material-ui/core";

// providers
import { useUser } from "../../provider/user";
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
    border: "2px solid #3f51b6",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    minWidth: 250,
  },
}));
//--------------------------------------------
const ChangeTech = ({ close, tech }) => {
  const classes = useStyles();
  const { onChangeTech } = useUser();
  const [modalStyle] = useState(getModalStyle);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    onChangeTech(data, tech.id);

    close();
  };

  return (
    <Box style={modalStyle} className={classes.paper}>
      <Typography variant="h5">Alterar experiência</Typography>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            className={classes.formControl}
            variant="outlined"
            margin="normal"
            size="small"
          >
            <InputLabel id="status-label">Experiência</InputLabel>
            <Controller
              name="status"
              control={control}
              as={
                <Select labelId="status-label" id="status" label="Experiência">
                  <MenuItem value="">---</MenuItem>
                  <MenuItem value="Iniciante">Iniciante</MenuItem>
                  <MenuItem value="Intermediário">Intermediário</MenuItem>
                  <MenuItem value="Avançado">Avançado</MenuItem>
                </Select>
              }
            />
          </FormControl>
          <Box m={1.5}>
            <Button variant="contained" color="primary" type="submit">
              Alterar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ChangeTech;
