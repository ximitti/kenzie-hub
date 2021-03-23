// react
import { useState } from "react";

// react router dom
import { useHistory } from "react-router-dom";

// react hook form + resolver
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// axios
import API from "../../services";

// material ui
import { Box, TextField, Button, Typography } from "@material-ui/core";

// providers
import { useAuth } from "../../provider/authentication";

// schema
import { schemaLogin } from "../../services/formValidations";

// endpoint
import { postSignIn } from "../../services/endpoints";

// styles
import { useFormStyles } from "../../styles/makeStyles";

// ---------------------------------------
const FormLogin = () => {
  const classes = useFormStyles();
  const { setToken, setIsAuth } = useAuth();
  const [errorLogin, setErrorLogin] = useState({});
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const onLogin = async (data) => {
    try {
      const response = await API.post(postSignIn(), data);

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
    <div>
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
        <TextField
          className={classes.inputStyles}
          variant="outlined"
          label="E-mail cadastrado"
          type="email"
          name="email"
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          className={classes.inputStyles}
          variant="outlined"
          label="Senha"
          type="password"
          name="password"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          className={classes.buttonStyles}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
