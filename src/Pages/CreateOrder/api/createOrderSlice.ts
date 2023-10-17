import { apiSlice } from '../../../core/api/apiSlice';
import { CreateOrderType } from './apiTypes/createOrderSliceType';

const OrderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<any, CreateOrderType>({
      query: (body) => {
        return {
          method: 'POST',
          url: 'order',
          body,
        };
      },
      //   forceRefetch({ currentArg, previousArg }) {
      //     return currentArg !== previousArg;
      //   },
    }),
  }),
});

export const { useCreateOrderMutation } = OrderApi;
