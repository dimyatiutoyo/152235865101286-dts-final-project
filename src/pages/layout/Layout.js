import ResponsiveAppBar from "./ResponsiveAppBar";
import { Container, Paper } from '@mui/material';
import Footer from "./Footer";

function Layout({ children }) {
  return (

    <Paper elevation={0} square sx={{
      minHeight: '100vh',
    }}>
      <ResponsiveAppBar />
      <Container sx={{
        boxShadow: 0,
        marginTop: '2rem',
        marginBottom: '5rem',
      }}>
        {children}
      </Container>
      <Footer />
    </Paper>
  );
}

export default Layout;