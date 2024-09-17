import { api } from "../index";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query({
      query: (params) => ({
        url: `/auth/profile`,
        params,
      }),
      providesTags: ["AuthApi"],
    }),
    signUp: build.mutation({
      query: ({ body }) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
      providesTags: ["AuthApi"],
    }),
    signIn: build.mutation({
      query: ({ body }) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      providesTags: ["AuthApi"],
    }),
    otpVerifyRequest: build.mutation({
      query: ({ body }) => ({
        url: "/auth/send-otp",
        method: "POST",
        body,
      }),
      providesTags: ["AuthApi"],
    }),
    resendOTP: build.mutation({
      query: ({ body }) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body,
      }),
      providesTags: ["AuthApi"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useSignUpMutation,
  useSignInMutation,
  useOtpVerifyRequestMutation,
  useResendOTPMutation,
} = authApi;
