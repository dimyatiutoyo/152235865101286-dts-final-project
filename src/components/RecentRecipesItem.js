import { Box, Container, Typography } from "@mui/material";
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import './RecentRecipesItem.css';

import { Link } from 'react-router-dom';
import { Favorite, FavoriteBorder } from "@mui/icons-material";
function RecentRecipesItem({ data, height = '150px', detail = true }) {
  return (
    <div style={{

      backgroundColor: 'grey',
      height: height,
      backgroundImage: `url(${data.thumb})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
    }} >
      <Box sx={{
        display: 'flex',
        marginRight: '14px',
        position: 'absolute',
        right: '0',
        top: '15px',
        alignItems: 'center',
        color: 'white',
      }}>
        <Box sx={{
          display: 'flex',
          backgroundColor: '#e65100b0',
          padding: '5px 8px',
          borderRadius: '20px',
          marginRight: '10px'
        }}>
          <QueryBuilderRoundedIcon sx={{ marginRight: '3px', fontSize: '20px' }} />
          <Typography fontSize='14px'>
            {data.times}
          </Typography>
        </Box>
        <FavoriteBorder onClick={() => alert('aaaa')} sx={{
          marginRight: '3px',
          fontSize: '20px',
          transition: 'all 0.15s ease-in-out',
          '&:hover': {
            cursor: 'pointer',
            color: 'red',
            fontSize: '24px',
          }
        }} />
      </Box>

      <Link to={`/resep/${data.key}`} style={{ textDecoration: 'none' }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(19deg, rgba(0,0,0,1) 0%, rgba(28,28,192,0.03918662191439071) 88%)',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'end',
        }}>
          <div style={{
            paddingBottom: 20,
            color: 'white',
          }}>
            {detail && <Container sx={{
              display: 'flex'
            }}>
              <Typography className='detail-pill' fontSize={12}>
                <AutoFixHighRoundedIcon sx={{ marginRight: '3px' }} fontSize='small' />
                {data.difficulty}
              </Typography>
              <Typography className='detail-pill' fontSize={12}>
                <LocalDiningRoundedIcon sx={{ marginRight: '3px' }} fontSize='small' />
                {data.serving}
              </Typography>
            </Container>
            }
            <Container style={{
              fontSize: 28,
              fontWeight: 'bold',
              marginBottom: '10px',
            }}>

              {data.title}


            </Container>

          </div>
        </div>
      </Link>
    </div>
  );
}

export default RecentRecipesItem;