import React, { useEffect, useState } from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import { useGetOrdersQuery } from './api/orderSlice/orderSlice';
import { OrderList } from './components/OrderList/OrderList';

export const Orders = () => {
  const { data } = useGetOrdersQuery({});

  return (
    <Grid container item xs>
      {data ? (
        <OrderList orders={data} />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Grid>
  );
};
