import { Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Layout from "./layout/Layout";
import useSWR from "swr";
import apiClient from "../config/apiClient";
import { Box } from "@mui/system";
import ExploreItem from "../components/ExploreItem";

function Search() {
  const params = useParams();
  const { data, error } = useSWR(`/api/search?q=${params.title}`, async (url) => {
    const response = await apiClient.get(url);
    return response.data.results;
  })

  if (!data) {
    return (
      <Layout>
        <Typography align='center'><CircularProgress size={14} sx={{
          color: 'black'
        }} /> Mencari resep "{params.title}"...</Typography>
      </Layout>
    )
  };
  if (error) return 'Error';

  return (
    <Layout>
      <Typography fontSize={36} align={'center'} fontWeight='bold' sx={{ marginBottom: '15px', marginTop: '30px' }}>
        Cari resep "{params.title}"
      </Typography>
      <Grid container spacing={2}>
        {
          data.map((recipe, index) => {
            return (
              <ExploreItem recipe={recipe} key={index} />
            )
          })
        }
      </Grid>
    </Layout>
  );
}

export default Search;