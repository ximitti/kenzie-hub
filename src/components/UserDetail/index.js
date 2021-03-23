// react
import { useState } from "react";

// material ui
import { Box, Modal, IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

// components
import ModalProfile from "../UserModal";

// -------------------------------------------
const UserDetail = ({ user }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box>
        <IconButton onClick={handleOpen} araia-label="edit">
          <InfoIcon fontSize="small" />
        </IconButton>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <ModalProfile user={user} close={handleClose} />
      </Modal>
    </Box>
  );
};

export default UserDetail;
