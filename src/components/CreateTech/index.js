// react
import { useState } from "react";

// react hook form
import { useForm, Controller } from "react-hook-form";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  TextField,
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
const CreateTech = ({ close }) => {
  const classes = useStyles();
  const { onCreateTech } = useUser();
  const [modalStyle] = useState(getModalStyle);
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    onCreateTech(data);

    close();
  };

  return (
    <Box style={modalStyle} className={classes.paper}>
      <Typography variant="h5">Incluir experiência</Typography>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <FormControl className={classes.formControl} margin="normal">
              <TextField
                name="title"
                label="Tecnologia"
                variant="outlined"
                size="small"
                inputRef={register}
              />
            </FormControl>
          </Box>
          <Box>
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
                  <Select
                    labelId="status-label"
                    id="status"
                    label="Experiência"
                  >
                    <MenuItem value="">---</MenuItem>
                    <MenuItem value="Iniciante">Iniciante</MenuItem>
                    <MenuItem value="Intermediário">Intermediário</MenuItem>
                    <MenuItem value="Avançado">Avançado</MenuItem>
                  </Select>
                }
              />
            </FormControl>
          </Box>
          <Box m={1.5}>
            <Button variant="contained" color="primary" type="submit">
              Incluir
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateTech;
