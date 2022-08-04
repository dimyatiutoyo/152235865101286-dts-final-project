import { Box, Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import apiClient from "../config/apiClient";
import useSWR from "swr";
import { useState } from "react";
import Layout from "./layout/Layout";

function RecipeByCategory() {
  const params = useParams();

  const [page, setPage] = useState(1);

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
              <Grid item xs={12} lg={4} md={4} sm={4} key={index}>
                <Link to={`resep/${recipe.key}`} style={{
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
                        }
                      }}>
                        <Typography fontWeight={'bold'} sx={{ color: 'white', fontSize: 'inherit' }}>{recipe.title}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            )
          })
        }
      </Grid>
    </Layout>
  );
}

export default RecipeByCategory;