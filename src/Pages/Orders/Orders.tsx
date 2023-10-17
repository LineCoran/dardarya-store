import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useGetOrdersQuery } from './api/orderSlice/orderSlice';
import { OrderList } from './components/OrderList/OrderList';

export const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery({});

  return (
    <Grid container item xs>
      {data ? <OrderList orders={data} /> : <h1>Loading</h1>}
    </Grid>
  );
};
