import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CategoryItemComponent({ children, keyTag, elevation }) {
  return (
    <Grid item xs={12} lg={4} md={4} sm={4}>
      <Card elevation={elevation} sx={{
        // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 13px 27px -5px, rgba(0, 0, 0, 0.1) 0px 8px 16px -8px',
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        backgroundColor: 'grey',
        height: '120px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 0.3,
        '&:hover': {
          backgroundColor: '#ffdac6',
          // color: 'white',
        }
      }}>
        <Link to={`/resep/${keyTag}`} style={{
          textDecoration: 'none',
          color: 'inherit',
        }}>
          <CardContent sx={{
            height: '100%',
          }}>
            <Typography align="center" fontWeight={'bold'}>
              {children}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid >
  );
}

export default CategoryItemComponent;