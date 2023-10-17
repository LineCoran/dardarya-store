import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import { OrderItemType } from '../../api/apiTypes/orderSliceType';

type OrderItemPropsType = {
  order: OrderItemType;
};
export const OrderItem = ({ order }: OrderItemPropsType) => {
  return (
    <Grid container direction={'column'} sx={{ color: '#000' }}>
      <Grid item direction={'row'} columnGap={2} alignItems={'center'} xs container>
        <Grid item container direction={'row'} alignItems={'center'} columnGap={1} xs>
          <Typography variant={'h3'}>{order.id}</Typography>
          <img src={order.img} width={200} height={200} alt={''} />
        </Grid>
        <Grid item xs direction={'column'} rowGap={1.5} container>
          <Typography>{`Ссылка: ${order.link}`}</Typography>
          <Typography>{`Описание: ${order.description}`}</Typography>
          <Typography>{`Цена: ${order.cost}`}</Typography>
          <Typography>{`Вес: ${order.weight}`}</Typography>
        </Grid>
      </Grid>
      <Divider orientation={'horizontal'} sx={{ height: '10px' }} />
    </Grid>
  );
};
