import Techs from "../Techs";
import { Box, Container, Typography, IconButton } from "@material-ui/core";
import ModalTech from "../Modal";
//---------------------------------------------------------------------

//---------------------------------------------------------------------
const Profile = ({ user, onChange }) => {
  return (
    <Container>
      <Box m={3} mx="auto" width={1 / 2} textAlign="left">
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
            <Typography variant="body2" color="textPrimary">
              {user.name}
            </Typography>
          </Box>
          <Box my={0.9}>
            <Typography variant="subtitle2" color="primary">
              Módulo atual
            </Typography>
            <Typography variant="body2" color="textPrimary">
              {user.course_module}
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" color="primary">
              Contato
            </Typography>
            <Typography variant="body2" color="textPrimary">
              {user.contact}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box m={3} mx="auto" width={1 / 2} textAlign="left">
        <Box>
          <Typography variant="h5" color="primary">
            Sobre
          </Typography>
        </Box>
        <Box bgcolor="grey.200" p={1.5} boxShadow={1}>
          <Typography variant="body2" color="textPrimary">
            {user.bio}
          </Typography>
        </Box>
      </Box>
      <Box m={3} mx="auto" width={1 / 2} textAlign="left">
        <Box display="flex" alignItems="center">
          <Box>
            <Typography variant="h5" color="primary">
              Tecnologias
            </Typography>
          </Box>
          <Box mx={1.5}>
            <ModalTech create={true} onChange={onChange} />
          </Box>
        </Box>
        <Box bgcolor="grey.200" p={1.5} boxShadow={1}>
          {user.techs?.map((tech, index) => (
            <Techs key={index} techData={tech} onChange={onChange} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
