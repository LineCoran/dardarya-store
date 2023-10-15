import { apiSlice } from '../apiSlice';

const OrderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<any, any>({
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
