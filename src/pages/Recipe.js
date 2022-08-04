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
import Ingredient from "../components/Ingredient";
import NeededItems from "../components/NeededItems";
import Steps from "../components/Steps";

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
      {data.thumb != null && <Box sx={{
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
      </Box>}

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

      <NeededItems data={data.needItem} />
      <Ingredient data={data.ingredient} />
      <Steps data={data.step} />
    </Layout>
  );
}

export default Recipe;