import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useGetOrdersQuery } from '../../core/api/orderSlice/orderSlice';

export const Orders = () => {
  const { data, isLoading } = useGetOrdersQuery({});

  const [id, setId] = useState<null | number>(null);

  useEffect(() => {
    if (!isLoading) setId(data[0].id);
  }, [isLoading]);
  return (
    <Grid container item xs direction={'column'}>
      <h1 style={{ color: 'black' }}>{id}</h1>
    </Grid>
  );
};
