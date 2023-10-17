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
      //   forceRefetch({ currentArg, previousArg }) {
      //     return currentArg !== previousArg;
      //   },
    }),
  }),
});

export const { useGetOrdersQuery } = OrderApi;
