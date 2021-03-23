// material ui
import { Box, Container, Typography, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

// styles
import { useProfileStyles } from "../../styles/makeStyles";
// components
import Techs from "../Techs";
import ModalTech from "../Modal";
//---------------------------------------------------------------------

//---------------------------------------------------------------------
const Profile = ({ user, home = false, close = false }) => {
  const classes = useProfileStyles();

  return (
    <Container className={classes.root}>
      <>
        {close && (
          <div style={{ position: "relative", padding: "0.3rem" }}>
            <IconButton
              onClick={close}
              style={{ position: "absolute", right: "0" }}
            >
              <CancelIcon />
            </IconButton>
          </div>
        )}
      </>
      <Box className={classes.perfilStyles}>
        <Box>
          <Typography variant="h5" color="primary">
            Perfil
          </Typography>
        </Box>
        <Box bgcolor="grey.200" p={1.5} boxShadow={1}>
          <Box>
            <Typography variant="subtitle2" color="primary">
              Nome
            </Typography>
            <Typography
              className={classes.textStyles}
              variant="body2"
              color="textPrimary"
            >
              {user.name}
            </Typography>
          </Box>
          <Box my={0.9}>
            <Typography variant="subtitle2" color="primary">
              Módulo atual
            </Typography>
            <Typography
              className={classes.textStyles}
              variant="body2"
              color="textPrimary"
            >
              {user.course_module}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" color="primary">
              Contato
            </Typography>
            <Typography
              className={classes.textStyles}
              variant="body2"
              color="textPrimary"
            >
              {user.contact}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.perfilStyles}>
        <Box>
          <Typography variant="h5" color="primary">
            Sobre
          </Typography>
        </Box>
        <Box bgcolor="grey.200" p={1.5} boxShadow={1}>
          <Typography
            className={classes.textStyles}
            variant="body2"
            color="textPrimary"
          >
            {user.bio}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.perfilStyles}>
        <Box display="flex" alignItems="center">
          <Box>
            <Typography variant="h5" color="primary">
              Tecnologias
            </Typography>
          </Box>
          {home && (
            <Box mx={1.5}>
              <ModalTech create />
            </Box>
          )}
        </Box>
        <Box bgcolor="grey.200" p={1.5} boxShadow={1}>
          {user.techs?.map((tech, index) => (
            <Techs key={index} tech={tech} home={home} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
