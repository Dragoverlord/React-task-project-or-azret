import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { useProducts } from '../contexts/ProductsContext';
import { useProduct } from './addProduct';

const ProductsList = () => {
    const {products,getProduct} = useProducts()

    return (
        <Grid className='Product field container wrapper'>
            {products.map((item)=>(
                <Box key={item.id}>
                    <ul>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <p>{item.category}</p>
                        <p>{item.details}</p>
                        <img width="200px"  src={item.UrlImg} alt="" />
                    </ul>
                </Box>
            ))}
        </Grid>
    );
};

export default ProductsList;