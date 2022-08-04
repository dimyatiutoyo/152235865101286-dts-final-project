import { AutoFixHighRounded, LocalDiningRounded } from "@mui/icons-material";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './ExploreItem.css';

function ExploreItem({ recipe, children }) {
  return (
    <Grid item xs={12} lg={4} md={4} sm={4}>
      <Link to={`/resep/${recipe.key}`} style={{
        textDecoration: 'none'
      }}>
        <Card sx={{
          borderRadius: '10px',
        }}>
          <CardContent sx={{
            backgroundImage: `url(${recipe.thumb})`,
            backgroundSize: 'cover',
            height: '200px',
            padding: '0',
          }}>
            <Box sx={{
              background: `linear-gradient(19deg, rgba(0,0,0,0.6) 0%, rgba(72,72,83,0) 50%)`,
              padding: '10px',
              height: '102%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              transition: "background 0.3s, font-size 0.3s",
              '&:hover': {
                background: `rgba(0,0,0,0.6)`,
                fontSize: '1.2rem',
                "& .detailAttribute": {
                  display: 'flex'
                }
              }
            }}>
              <Box className='detailAttribute' sx={{
                display: 'none',
              }}>
                <Typography className='detail-pill' fontSize={12}>
                  <AutoFixHighRounded sx={{ marginRight: '3px' }} fontSize='small' />
                  {recipe?.difficulty}
                </Typography>
                <Typography className='detail-pill' fontSize={12}>
                  <LocalDiningRounded sx={{ marginRight: '3px' }} fontSize='small' />
                  {recipe?.serving}
                </Typography>
              </Box>
              <Typography fontWeight={'bold'} sx={{ color: 'white', fontSize: 'inherit' }}>{recipe.title}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default ExploreItem;