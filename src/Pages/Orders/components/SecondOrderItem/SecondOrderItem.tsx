import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { OrderItemType } from '../../api/apiTypes/orderSliceType';

type OrderItemPropsType = {
  order: OrderItemType;
};

export const SecondOrderItem = ({ order }: OrderItemPropsType) => {
  return <div style={{ height: 400, width: '100%' }} />;
};
