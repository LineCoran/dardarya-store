import {
  // BaseQueryFn,
  // FetchArgs,
  // FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react';
// import { authorize, deAuthorize } from '../../store/auth/actions';
// import { AuthStateType } from '../../store/auth/types';
// import { Auth } from '../constants/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://dardarya-server.vercel.app/',
  // prepareHeaders: (headers, { getState }) => {
  //   const { accessToken } = (getState() as IGlobalStoreState).auth;
  //   headers.set('Authorization', `Bearer ${accessToken}`);
  //   return headers;
  // },
});

// const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
//   args,
//   api,
//   extraOptions,
// ) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result.error && result?.error?.status === 401) {
//     const { accessToken, refreshToken } = (api.getState() as IGlobalStoreState).auth;
//     const body = {
//       accessToken,
//       refreshToken,
//     };
//     const reauthUrl = import.meta.env.VITE_API_URL_V1 + Auth.Token;
//     const reauthOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify(body),
//     };
//     const response = await fetch(reauthUrl, reauthOptions);
//     const refreshResult = await response.json();
//     if (refreshResult) {
//       api.dispatch(authorize(refreshResult as AuthStateType));
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(deAuthorize());
//     }
//   }
//   return result;
// };

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ['Orders'],
  baseQuery,
  endpoints: () => ({}),
});
