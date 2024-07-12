import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
})

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi