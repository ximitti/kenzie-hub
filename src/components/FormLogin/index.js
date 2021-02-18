import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import API from "../../services";

import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

const errorRequired = "Campo obrigatório";
const schema = yup.object().shape({
  email: yup.string().email().required(errorRequired),
  password: yup.string().required(errorRequired),
});

const FormLogin = (props) => {
  const [errorLogin, setErrorLogin] = useState({});
  const { history } = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onLogin = (data) => {
    API.post("/sessions", data)
      .then((response) => {
        sessionStorage.clear();
        sessionStorage.setItem("token", JSON.stringify(response.data.token));
        errorLogin.isAxiosError && setErrorLogin({});
        reset();
        history.push("/signup");
      })
      .catch((err) => {
        setErrorLogin(err);
      });
  };

  return (
    <Container>
      <Box>
        <Typography variant="h4">Login</Typography>
      </Box>
      <Box>
        {errorLogin.isAxiosError && (
          <Typography>E-mail ou senha incorretos</Typography>
        )}
      </Box>
      <form onSubmit={handleSubmit(onLogin)}>
        <Box>
          <TextField
            margin="normal"
            variant="outlined"
            label="E-mail cadastrado"
            type="email"
            name="email"
            size="small"
            inputRef={register}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>
        <Box>
          <TextField
            margin="normal"
            variant="outlined"
            label="Senha"
            type="password"
            name="password"
            size="small"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>
        <Box>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default FormLogin;
