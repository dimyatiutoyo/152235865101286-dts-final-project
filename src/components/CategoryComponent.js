import { Backdrop, Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import apiClient from "../config/apiClient";
import CategoryItemComponent from "./CategoryItemComponent";

function CategoryComponent() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await apiClient.get("/api/category/recipes");
      setRecipes(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      setIsError(true);
      setError(error.response?.data?.message ?? 'Kesalahan saat mengambil data');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {
        isLoading
          ? <CircularProgress sx={{ color: 'black' }} />
          : <Grid container spacing={1}>
            {
              recipes.map((recipe, index) => {
                if (index < 9) {
                  return (
                    <CategoryItemComponent elevation={0} key={index} keyTag={recipe.key}>{recipe.category}</CategoryItemComponent>
                  )
                }
              })
            }
          </Grid>
      }
    </Box>
  );
}

export default CategoryComponent;