// react
import { useState } from "react";

// react router dom
import { useHistory } from "react-router-dom";

// react hook form + resolvers
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// axios
import API from "../../services";

// helpers
import { ModulesText } from "./helper";

// material ui
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  makeStyles,
} from "@material-ui/core";

// endpoints
import { postSignUp } from "../../services/endpoints";

// schema
import { schemaRegister } from "../../services/formValidations";

//--------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 350,
  },
  colorPrimary: {
    color: "yellow",
  },
  textPrimary: {
    backgroundColor: "yellow",
  },
}));

//--------------------------------------------------------
const FormSignup = () => {
  const [errorSignup, setErrorSignup] = useState({});
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const onSignup = async (data) => {
    try {
      await API.post(postSignUp, data);

      reset();
      history.push("/");
    } catch (error) {
      setErrorSignup(error);
    }
  };

  //------------------------------------------------------
  return (
    <Container>
      <Box>
        <Typography variant="h4" color="primary">
          Registro
        </Typography>
      </Box>
      <Box>
        {errorSignup.response?.data && (
          <Typography color="error">
            {errorSignup.response?.data.message}
          </Typography>
        )}
      </Box>
      <Box>
        <form onSubmit={handleSubmit(onSignup)}>
          <Box>
            <FormControl className={classes.formControl} margin="normal">
              <TextField
                name="name"
                label="Nome"
                variant="outlined"
                size="small"
                inputRef={register}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className={classes.formControl} margin="normal">
              <TextField
                name="email"
                type="email"
                label="E-mail"
                variant="outlined"
                size="small"
                inputRef={register}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className={classes.formControl} margin="normal">
              <TextField
                name="password"
                type="password"
                label="Senha"
                variant="outlined"
                size="small"
                inputRef={register}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className={classes.formControl} margin="normal">
              <TextField
                multiline
                name="bio"
                label="Biografia"
                variant="outlined"
                size="small"
                inputRef={register}
                error={!!errors.bio}
                helperText={errors.bio?.message}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className={classes.formControl} margin="normal">
              <TextField
                name="contact"
                label="Contato"
                variant="outlined"
                size="small"
                inputRef={register}
                error={!!errors.contact}
                helperText={errors.contact?.message}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl
              className={classes.formControl}
              variant="outlined"
              margin="normal"
              size="small"
              error={!!errors.course_module}
            >
              <InputLabel id="modulo-label">Módulo</InputLabel>
              <Controller
                name="course_module"
                control={control}
                as={
                  <Select labelId="modulo-label" id="modulo" label="Módulo">
                    {ModulesText.map((module, index) => (
                      <MenuItem key={index} value={module[0]}>
                        {module[1]}
                      </MenuItem>
                    ))}
                  </Select>
                }
              />
            </FormControl>
          </Box>
          <Box m={1.5}>
            <Button variant="contained" color="primary" type="submit">
              Cadastrar
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default FormSignup;
