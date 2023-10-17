import { apiSlice } from '../../../core/api/apiSlice';
import { CreateOrderType } from './apiTypes/getOrderSliceType';

const OrderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query<CreateOrderType, string>({
      query: (body) => {
        return {
          url: `order/${body}`,
        };
      },
      //   forceRefetch({ currentArg, previousArg }) {
      //     return currentArg !== previousArg;
      //   },
    }),
  }),
});

export const { useGetOrderQuery } = OrderApi;
