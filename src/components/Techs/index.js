import { Box, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalTech from "../Modal";

// providers
import { useUser } from "../../provider/user";
//----------------------------------------------------------

//----------------------------------------------------------
const Techs = ({ tech }) => {
  const { onDeleteTech } = useUser();

  const onDelete = async () => {
    onDeleteTech(tech.id);
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
        <ModalTech tech={tech} />
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
