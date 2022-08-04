import { CircularProgress, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import apiClient from "../config/apiClient";
import useSWR from "swr";
import Layout from "./layout/Layout";
import ExploreItem from "../components/ExploreItem";

function RecipesByCategory() {
  const params = useParams();

  const { data, error } = useSWR(`/api/category/recipes/${params.key}`, async (url) => {
    const response = await apiClient.get(url);
    return response.data.results;
  })

  if (!data) {
    return (
      <Layout>
        <Typography align='center'><CircularProgress size={14} sx={{
          color: 'black'
        }} /> Loading...</Typography>
      </Layout>
    )
  };
  if (error) return 'Error';

  return (
    <Layout>
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

export default RecipesByCategory;