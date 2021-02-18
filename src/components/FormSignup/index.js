import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API from "../../services";
import { ModulesText } from "./helper";
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

//--------------------------------------------------------

const errorRequired = "Campo obrigatório";
const schema = yup.object().shape({
  email: yup.string().required(errorRequired),
  password: yup.string().required(errorRequired),
  name: yup.string().required(errorRequired),
  bio: yup.string().required(errorRequired),
  contact: yup.string().required(errorRequired),
  course_module: yup.string().required(errorRequired),
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 350,
  },
}));

const FormSignup = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSignup = (data) => {
    console.log("submit funcionando: ", data);
  };

  return (
    <Container>
      <Box>
        <Typography variant="h4">Registro</Typography>
      </Box>
      <Box>
        <Typography>Mensagem de erro</Typography>
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
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl className={classes.formControl} margin="normal">
              <TextField
                select
                id="course_module"
                variant="outlined"
                label="Módulo"
                size="small"
                value={register.value}
                inputProps={{
                  inputRef: (ref) => {
                    if (!ref) {
                      return;
                    }
                    console.log("Entrando na registro do módulo: ", ref);
                    register({
                      name: "course_module",
                      value: ref.value,
                    });
                  },
                }}
              >
                {ModulesText.map((module, index) => (
                  <MenuItem key={index} value={module}>
                    {module}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Box>
          <Box>
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
