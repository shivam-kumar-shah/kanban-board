import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getAllBoards: builder.query({
      query: () => "",
      transformResponse: () => {},
    }),
  }),
});

export const { getAllBoards } = apiSlice.endpoints;
export const { reducer } = apiSlice;
