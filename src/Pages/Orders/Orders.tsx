import { Grid } from '@mui/material';
import { useGetOrdersQuery } from './api/orderSlice/orderSlice';
import { OrderList } from './components/OrderList/OrderList';
import { Loader } from '../../Components/Loader/Loader';

export const Orders = () => {
  const { data } = useGetOrdersQuery({});

  return (
    <Grid container item xs>
      {data ? <OrderList orders={data} /> : <Loader />}
    </Grid>
  );
};
