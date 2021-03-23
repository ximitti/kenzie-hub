// material ui
import { Box, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

// components
import ModalTech from "../Modal";

// styles
import { useTechStyles } from "../../styles/makeStyles";

// providers
import { useUser } from "../../provider/user";
//----------------------------------------------------------

//----------------------------------------------------------
const Techs = ({ tech, home = false }) => {
  const classes = useTechStyles();
  const { onDeleteTech } = useUser();

  const onDelete = async () => {
    onDeleteTech(tech.id);
  };

  return (
    <Box className={classes.root}>
      <Box flexGrow={3}>
        <Typography color="textPrimary">{tech.title}</Typography>
      </Box>
      <Box mx={2}>
        <Typography color="textPrimary">{tech.status}</Typography>
      </Box>
      {home && (
        <>
          <Box>
            <ModalTech tech={tech} />
          </Box>
          <Box>
            <IconButton onClick={onDelete} araia-label="delete">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Techs;
