// react

// react hook form
import { useForm, Controller } from "react-hook-form";

// material ui
import {
  Box,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@material-ui/core";

// styles
import { useModalStyles } from "../../styles/makeStyles";

// providers
import { useUser } from "../../provider/user";

//--------------------------------------------
const ChangeTech = ({ close, tech }) => {
  const classes = useModalStyles();
  const { onChangeTech } = useUser();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    onChangeTech(data, tech.id);

    close();
  };

  return (
    <Box className={classes.paper}>
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
          <Box>
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
