// react
import { useState } from "react";

// material ui
import { Box, Modal, IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import CreateIcon from "@material-ui/icons/Create";
import AddBoxIcon from "@material-ui/icons/AddBox";

// components
import Profile from "../Profile";
import ChangeTech from "../ChangeTech";
import CreateTech from "../CreateTech";
//--------------------------------------------

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
        <Profile user={user} close={handleClose} />
      </Modal>
    </Box>
  );
};

export default UserDetail;
