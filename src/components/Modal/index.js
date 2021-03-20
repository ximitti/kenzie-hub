import { useState } from "react";
import { Box, Modal, IconButton } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ChangeTech from "../ChangeTech";
import CreateTech from "../CreateTech";
//--------------------------------------------

// -------------------------------------------
const ModalTech = ({ create = false, tech }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {create ? (
        <Box>
          <IconButton onClick={handleOpen} araia-label="edit">
            <AddBoxIcon fontSize="small" />
          </IconButton>
        </Box>
      ) : (
        <Box>
          <IconButton onClick={handleOpen} araia-label="edit">
            <CreateIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
      <Modal open={open} onClose={handleClose}>
        {create ? (
          <CreateTech close={handleClose} />
        ) : (
          <ChangeTech close={handleClose} tech={tech} />
        )}
      </Modal>
    </Box>
  );
};

export default ModalTech;
