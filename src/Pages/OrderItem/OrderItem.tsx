import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetOrderQuery } from './api/getOrderSlice';
import { Loader } from '../../Components/Loader/Loader';

export const OrderItem = () => {
  const { id = '' } = useParams<{ id: string }>();

  const { data } = useGetOrderQuery(id);

  if (!data) return <Loader />;
  const { createdat, link, img, cost, weight, description } = data[0];
  return data && data ? (
    <Grid container direction={'column'} sx={{ color: '#000' }}>
      <Grid item direction={'column'} columnGap={2} alignItems={'center'} xs container>
        <Grid item container direction={'row'} alignItems={'center'} columnGap={1} xs>
          <img src={img} width={'100%'} height={'100%'} alt={''} />
        </Grid>
        <Grid item xs direction={'column'} rowGap={1.5} container>
          <Typography>{`Ссылка: ${link}`}</Typography>
          <Typography>{`Описание: ${description}`}</Typography>
          <Typography>{`Цена: ${cost}`}</Typography>
          <Typography>{`Вес: ${weight}`}</Typography>
          <Typography>{`Дата: ${createdat}`}</Typography>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <h1>Loaoding</h1>
  );
};
