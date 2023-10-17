import React from 'react';
import { Grid, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import format from 'date-fns/format';
import { OrderItemType } from '../../api/apiTypes/orderSliceType';

type OrderListPropsType = {
  orders: OrderItemType[];
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'cost', headerName: 'Цена', type: 'number', width: 130 },
  { field: 'weight', headerName: 'Вес', type: 'number', width: 130 },
  {
    field: 'link',
    headerName: 'Ссылка',
    width: 200,
  },
  {
    field: 'createdat',
    headerName: 'Дата заказа',
    width: 200,
    valueGetter: (params) => format(new Date(params.row.createdat), 'dd-MM-yyyy'),
    sortable: false,
  },
  { field: 'description', headerName: 'Описание', sortable: false, width: 500 },
];

export const OrderList = ({ orders }: OrderListPropsType) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{ height: 'max-content', overflow: 'scroll' }}
      rowGap={1}
      item
      xs
      direction={'column'}
    >
      {orders.length > 0 ? (
        <Box sx={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={[...orders]}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
            onRowClick={(params) => navigate(`${params.id}`)}
          />
        </Box>
      ) : (
        <h1>Заказов нет</h1>
      )}
    </Grid>
  );
};
