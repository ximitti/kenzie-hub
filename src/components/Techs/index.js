import { useState, useEffect } from "react";
import API from "../../services";
import { Box, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalTech from "../Modal";
//----------------------------------------------------------

//----------------------------------------------------------
const Techs = ({ techData, onChange }) => {
  const [tech] = useState(techData);
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return;
    }
    return JSON.parse(localToken);
  })

  useEffect(() => {

    console.log("Token no comp Tech ", token)

  // eslint-disable-next-line
  }, [tech])

  const onDelete = async () => {
    const response = await API.delete(`/users/techs/${tech.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).catch((e) => console.log(e));

    if (response) {
      await onChange();
    }
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
