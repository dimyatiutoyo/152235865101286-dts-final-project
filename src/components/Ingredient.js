import { Box, Typography } from "@mui/material";

function Ingredient({ data }) {
  return (
    <>
      <Typography fontSize={18} fontWeight='bold' sx={{
        marginTop: '20px',
        marginBottom: '10px',
      }}>
        Komposisi:
      </Typography>
      <Box>
        {
          data.map((item, index) => {
            return (
              <Typography>{item}</Typography>
            );
          })
        }
      </Box>
    </>
  );
}

export default Ingredient;