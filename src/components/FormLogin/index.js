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

// providers
import { useAuth } from "../../provider/authentication";

// ---------------------------------------------
const errorRequired = "Campo obrigatório";
const schema = yup.object().shape({
  email: yup.string().email().required(errorRequired),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .required(errorRequired),
});

// ---------------------------------------
const FormLogin = () => {
  const { setToken, setIsAuth } = useAuth();
  const [errorLogin, setErrorLogin] = useState({});
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onLogin = async (data) => {
    try {
      const response = await API.post("/sessions/", data);

      setToken(response.data.token);
      setIsAuth(true);

      localStorage.clear();
      localStorage.setItem("token", JSON.stringify(response.data.token));
      errorLogin.isAxiosError && setErrorLogin({});

      reset();
      history.push("/home");
    } catch (error) {
      setErrorLogin(error);
    }
  };

  return (
    <Container>
      <Box>
        <Typography variant="h4" color="primary">
          Login
        </Typography>
      </Box>
      <Box>
        {errorLogin.isAxiosError && (
          <Typography color="error">E-mail ou senha incorretos</Typography>
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
        <Box m={1.5}>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default FormLogin;
