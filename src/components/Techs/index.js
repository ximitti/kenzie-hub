import { useState } from "react";
import API from "../../services";
import { Box, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ModalTech from "../Modal";
//----------------------------------------------------------

//----------------------------------------------------------
const Techs = ({ techData, onChange }) => {
  const [tech, setTech] = useState(techData);
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return;
    }
    console.log(localToken);
    return JSON.parse(localToken);
  });

  const onUpdate = async () => {
    // const response = await API.put(`/users/techs/${tech.id}`).catch((e) =>
    //   console.log(e)
    // );
    // console.log("Alterou!", response);
  };

  const onDelete = async () => {
    console.log(token);
    const response = await API.delete(`/users/techs/${tech.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((e) => console.log(e));
    console.log(response ? "Deletou!" : "erro!");
    onChange();
  };

  return (
    <Box display="flex" alignItems="center">
      <Box flexGrow={3}>
        <Typography color="textPrimary">{tech.title}</Typography>
      </Box>
      <Box mx={2}>
        <Typography color="textPrimary">{tech.status}</Typography>
      </Box>
      <Box>
        <ModalTech create={false} tech={tech} onChange={onChange} />
      </Box>
      <Box>
        <IconButton onClick={onDelete} araia-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Techs;
