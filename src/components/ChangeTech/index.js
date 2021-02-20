import API from "../../services";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useForm, Controller} from "react-hook-form"
import { Box, Button, InputLabel, Select, MenuItem, FormControl, Typography } from "@material-ui/core";
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
  }
}));
//--------------------------------------------
const ChangeTech = ({ onChange, close, tech }) => {
  const classes = useStyles();
  const [ modalStyle ] = useState(getModalStyle);
  const [ token, setToken ] = useState({})
  const { handleSubmit,control } = useForm()

  useEffect(() => {

    setToken(() => {
      const localToken = localStorage.getItem("token") || "";
      if (!localToken) {
        return;
      }
      return JSON.parse(localToken);
    })

    // eslint-disable-next-line
  }, [])

  const onSubmit = async (data) => {
    const response = await API.put(`/users/techs/${tech.id}`, data,
      {headers: { Authorization: `Bearer ${token}` },
      }).catch((e) => {console.log(e)})

    if (response) {
      await onChange();
      close();
    }
  }

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
            <InputLabel id="status-label">
              Experiência
            </InputLabel>
            <Controller
              name="status"
              control={control}
              as={
                <Select labelId="status-label" id="status" label="Experiência">
                  <MenuItem value="">
                    ---
                  </MenuItem>
                  <MenuItem value="Iniciante">
                    Iniciante
                  </MenuItem>
                  <MenuItem value="Intermediário">
                    Intermediário
                  </MenuItem>
                  <MenuItem value="Avançado">
                    Avançado
                  </MenuItem>
                </Select>
              }/>
          </FormControl>
          <Box m={1.5}>
            <Button variant="contained" color="primary" type="submit">Alterar</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ChangeTech;
