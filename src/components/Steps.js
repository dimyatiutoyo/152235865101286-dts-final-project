import { Box, Typography } from "@mui/material";

function Steps({ data }) {
  return (
    <>
      <Typography fontSize={18} fontWeight='bold' sx={{
        marginTop: '20px',
        marginBottom: '10px',
      }}>
        Langkah-langkah:
      </Typography>
      <Box>
        {
          data.map((item, index) => {
            return (
              <Typography>{item}</Typography>
            )
          })
        }
      </Box>
    </>
  );
}

export default Steps;