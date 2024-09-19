import { api } from "../index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: (params) => ({
        url: `/categories`,
        params,
      }),
      providesTags: ["ProductApi"],
    }),
    getCars: build.query({
      query: (params) => ({
        url: "/cars",
        params,
      }),
      providesTags: ["ProductApi"],
    }),
    getCar: build.query({
      query: ({ id }) => ({
        url: `/cars/${id}`,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCarsQuery, useGetCarQuery } =
  productApi;
