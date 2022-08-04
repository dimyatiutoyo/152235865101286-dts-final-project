import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import apiClient from "../config/apiClient";
import useSWR from "swr";

function CategoryPillComponent() {
  const { data, swrError } = useSWR('/api/category/recipes', async (url) => {
    let response = await apiClient.get(url);
    return response.data.results;
  });

  if (!data) {
    return '';
  }
  if (swrError) {
    return <div>{swrError}</div>
  }
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }}>
      <Grid container spacing={1}>
        {data.map((category, index) => {
          return (
            <Grid item key={index}>
              <Link to={`resep/kategori/${category.key}`} style={{ textDecoration: 'none' }}>
                <Box sx={{
                  backgroundColor: "black",
                  marginRight: "10px",
                  padding: "4px 8px",
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '14px',
                  transition: 'all 0.2s ease-in-out',
                  "&:hover": {
                    backgroundColor: '#e65100',
                    padding: '4px 14px',
                    fontWeight: 'bold',
                  }
                }}>
                  {category.category}
                </Box>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default CategoryPillComponent;