import React from 'react';
import { Grid } from '@mui/material';
import { OrderItemType } from '../../api/apiTypes/orderSliceType';
import { OrderItem } from '../OrderItem/OrderItem';

type OrderListPropsType = {
  orders: OrderItemType[];
};

export const OrderList = ({ orders }: OrderListPropsType) => {
  return (
    <Grid
      container
      sx={{ background: 'rgba(0, 0, 0, 0.1)', height: 'max-content', overflow: 'scroll' }}
      paddingY={4}
      paddingX={1}
      rowGap={1}
      item
      xs
      direction={'column'}
    >
      {orders.length > 0 ? (
        orders.map((order) => {
          return <OrderItem key={order.id} order={order} />;
        })
      ) : (
        <h1>Заказов нет</h1>
      )}
    </Grid>
  );
};
