import { Box, Grid, Typography } from "@mui/material";

function NeededItems({ data }) {
  return (
    <>
      <Typography fontSize={18} fontWeight='bold' sx={{
        marginTop: '20px',
        marginBottom: '10px',
      }}>
        Bahan yang Dibutuhkan:
      </Typography>
      <Grid container spacing={2}>
        {
          data.map((item, index) => {
            return (
              <Grid item lg={3} md={3} sm={6} xs={12} key={index}>
                <Box elevation={0} sx={{
                  border: '#96969634 2px solid',
                  borderRadius: '18px',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '10px'
                }}>
                  <Box>
                    <img src={item.thumb_item} alt="" />
                  </Box>
                  <Typography fontWeight={'bold'}>
                    {item.item_name}
                  </Typography>
                </Box>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  );
}

export default NeededItems;