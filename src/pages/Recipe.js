import { Card, CardContent, CircularProgress, Paper, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import apiClient from "../config/apiClient";
import Layout from "./layout/Layout";
import AutoFixHighTwoToneIcon from '@mui/icons-material/AutoFixHighTwoTone';
import LocalDiningTwoToneIcon from '@mui/icons-material/LocalDiningTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import './Recipe.css';

function Recipe() {
  const navParams = useParams();
  const { data, error } = useSWR('/api/recipe/' + navParams.key, async (url) => {
    const response = await apiClient.get(url);
    return response.data.results;
  });

  if (!data) {
    return (
      <Layout>
        <Typography align='center'><CircularProgress size={14} sx={{
          color: 'black'
        }} /> Loading...</Typography>
      </Layout>
    )
  }
  return (
    <Layout>
      <Box sx={{
        height: {
          lg: '500px',
          md: '400px',
          sm: '300px',
          xs: '200px'
        },
        marginBottom: '20px',
        borderRadius: '30px',
        background: `url(${data.thumb})`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
      }}>
      </Box>
      <Typography variant="h3" sx={{
        marginBottom: '10px'
      }}>
        {data.title}
      </Typography>
      <Box sx={{
        display: 'flex',
      }}>
        <Typography className="description-attribute">
          <AutoFixHighTwoToneIcon sx={{ marginRight: '3px' }} fontSize='medium' />
          {data.dificulty}
        </Typography>
        <Typography className='description-attribute'>
          <LocalDiningTwoToneIcon sx={{ marginRight: '3px' }} fontSize='medium' />
          {data.servings}
        </Typography>
        <Typography className='description-attribute'>
          <AccessTimeTwoToneIcon sx={{ marginRight: '3px' }} fontSize='medium' />
          {data.times}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{
        marginTop: '30px'
      }}>
        {data.desc}
      </Typography>

      <Typography fontSize={18} fontWeight='bold' sx={{
        marginTop: '20px',
        marginBottom: '10px',
      }}>
        Bahan yang Dibutuhkan:
      </Typography>
      <Grid container spacing={2}>
        {
          data.needItem.map((item, index) => {
            return (
              <Grid item lg={3} md={3} sm={6} xs={12} key={index}>
                <Box elevation={0} sx={{
                  backgroundColor: '#96969634',
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
    </Layout>
  );
}

export default Recipe;