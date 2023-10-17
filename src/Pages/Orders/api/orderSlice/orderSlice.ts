import { apiSlice } from '../../../../core/api/apiSlice';
import { OrderItemType } from '../apiTypes/orderSliceType';

const OrderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<OrderItemType[], any>({
      query: () => {
        return {
          url: 'orders',
        };
      },
      providesTags: ['Order'],
    }),
  }),
});

export const { useGetOrdersQuery } = OrderApi;
