import React from 'react';
import { Grid } from '@mui/material';
import { useGetOrdersQuery } from '../../core/api/orderSlice/orderSlice';

export const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery({});
  return (
    <Grid container item xs direction={'column'}>
      {isLoading ? (
        <h1>Is loading</h1>
      ) : data && data.length ? (
        <ul>
          {data.map((item) => {
            <h1>{item.description}</h1>;
          })}
        </ul>
      ) : (
        <h1>Пустно</h1>
      )}
    </Grid>
  );
};
