import { Box, Grid } from "@mui/material";
import React from "react";
import ProductsList from "../Products/ProductsList";

const ProductsPage = () => {
  return (
    <Box>
      <Grid sx={{height: "100vh"}} container spacing={2}>
          <ProductsList />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
