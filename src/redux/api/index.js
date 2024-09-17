import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { logout } from '../slices/authSlice';

const baseQuery = async (args, api, extraOptions) => {
  const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "http://13.51.206.62:8000/api", // o'zgaradi
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("react-2-6-user-token")); // o'zgaradi
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  const result = await rawBaseQuery(args, api, extraOptions);
  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error("Unauthorized access - Redirecting to login...");
      // dispatch(logout())
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["AuthApi"], // o'zgaradi
  endpoints: () => ({}),
});
