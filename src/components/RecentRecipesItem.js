import { Box, Container, Typography } from "@mui/material";
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import './RecentRecipesItem.css';

import { Link } from 'react-router-dom';
function RecentRecipesItem({ data, height = '150px', detail = true }) {
  return (
    <Link to={`/resep/${data.key}`} style={{ textDecoration: 'none' }}>
      <div style={{

        color: 'white',
        backgroundColor: 'grey',
        height: height,
        backgroundImage: `url(${data.thumb})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '10px',
        overflow: 'hidden',
      }} >
        <div style={{
          height: '100%',
          background: 'linear-gradient(19deg, rgba(0,0,0,1) 0%, rgba(28,28,192,0.03918662191439071) 88%)',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'end',
          position: 'relative',
        }}>

          <Box sx={{
            display: 'flex',
            marginRight: '14px',
            position: 'absolute',
            right: '0',
            top: '15px',
            backgroundColor: '#e65100b0',
            padding: '5px 8px',
            borderRadius: '20px',
          }}>
            <QueryBuilderRoundedIcon sx={{ marginRight: '3px', fontSize: '20px' }} />
            <Typography fontSize='14px'>
              {data.times}
            </Typography>
          </Box>

          <div style={{
            paddingBottom: 20,
            // width: '50%',
          }}>
            {detail && <Container sx={{
              display: 'flex'
            }}>
              <Typography className='detail-pill' fontSize={12}>
                <AutoFixHighRoundedIcon sx={{ marginRight: '3px' }} fontSize='small' />
                {data.dificulty}
              </Typography>
              <Typography className='detail-pill' fontSize={12}>
                <LocalDiningRoundedIcon sx={{ marginRight: '3px' }} fontSize='small' />
                {data.portion}
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
      </div>
    </Link>
  );
}

export default RecentRecipesItem;