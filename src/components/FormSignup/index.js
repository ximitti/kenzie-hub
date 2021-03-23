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
  Box,
  TextField,
  Button,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";

// endpoints
import { postSignUp } from "../../services/endpoints";

// schema
import { schemaRegister } from "../../services/formValidations";

// styles
import { useFormStyles } from "../../styles/makeStyles";

//--------------------------------------------------------
const FormSignup = () => {
  const classes = useFormStyles();
  const [errorSignup, setErrorSignup] = useState({});
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
    <div>
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
          <TextField
            className={classes.inputStyles}
            margin="normal"
            name="name"
            label="Nome"
            variant="outlined"
            inputRef={register}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            className={classes.inputStyles}
            margin="normal"
            name="email"
            type="email"
            label="E-mail"
            variant="outlined"
            inputRef={register}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            className={classes.inputStyles}
            margin="normal"
            name="password"
            type="password"
            label="Senha"
            variant="outlined"
            inputRef={register}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            className={classes.inputStyles}
            margin="normal"
            multiline
            name="bio"
            label="Biografia"
            variant="outlined"
            inputRef={register}
            error={!!errors.bio}
            helperText={errors.bio?.message}
          />
          <TextField
            className={classes.inputStyles}
            margin="normal"
            name="contact"
            label="Contato"
            variant="outlined"
            inputRef={register}
            error={!!errors.contact}
            helperText={errors.contact?.message}
          />
          <Box>
            <FormControl
              className={classes.inputStyles}
              margin="normal"
              variant="outlined"
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
          <Button
            className={classes.buttonStyles}
            variant="contained"
            color="primary"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default FormSignup;
