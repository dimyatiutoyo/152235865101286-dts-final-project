import { CircularProgress, Grid, Typography } from "@mui/material";
import apiClient from "../config/apiClient";
import useSWR from "swr";
import { useState } from "react";
import ExploreItem from "./ExploreItem";

function Explore() {

  const [page, setPage] = useState(1);

  const { data, error } = useSWR(`/api/recipes/${page}`, async (url) => {
    const response = await apiClient.get(url);
    return response.data.results;
  })

  if (!data) {
    return (
      <>
        <Typography fontSize={36} align={'center'} fontWeight='bold' sx={{ marginBottom: '15px', marginTop: '30px' }}>
          Resep Terbaru
        </Typography>
        <Typography align='center'><CircularProgress size={14} sx={{
          color: 'black'
        }} /> Loading...</Typography>
      </>
    )
  };
  if (error) return 'Error';

  return (
    <>
      <Typography fontSize={36} align={'center'} fontWeight='bold' sx={{ marginBottom: '15px', marginTop: '30px' }}>
        Resep Terbaru
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
    </>
  );
}

export default Explore;