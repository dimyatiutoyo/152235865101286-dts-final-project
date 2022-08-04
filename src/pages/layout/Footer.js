import { Box, Container, Paper, Typography } from "@mui/material";

function Footer() {
  return (
    <Paper square sx={{
      bottom: 0,
      width: '100%',
      position: 'fixed',
      padding: '1rem',
    }}>
      <Typography align='center'>Created by <strong>Dimyati Utoyo</strong>, API: <a href="https://github.com/tomorisakura/unofficial-masakapahariini-api">Masak Apa Hari Ini Unofficial</a></Typography>
    </Paper>
  );
}

export default Footer;