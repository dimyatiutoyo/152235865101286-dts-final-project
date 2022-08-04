import { Box, Typography } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Layout from "./layout/Layout";

function Profil() {

  const [user] = useAuthState(auth);

  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box sx={{
          marginRight: '20px',

        }}>
          <img src={user?.photoURL} alt="" style={{
            borderRadius: '20px',
          }} />
        </Box>
        <Box>
          <Typography variant="h4">{user?.displayName}</Typography>
          <Typography variant="h6">{user?.email}</Typography>
        </Box>
      </Box>
    </Layout>
  );
}

export default Profil;