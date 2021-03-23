// react

// react hook form
import { useForm, Controller } from "react-hook-form";

// material ui
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

// styles
import { useModalStyles } from "../../styles/makeStyles";

// providers
import { useUser } from "../../provider/user";

//--------------------------------------------
const CreateTech = ({ close }) => {
  const classes = useModalStyles();
  const { onCreateTech } = useUser();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    onCreateTech(data);

    close();
  };

  return (
    <Box className={classes.paper}>
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
          <Box>
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
