import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4500/api/v1/` }),
  endpoints: (builders) => ({
    signinUser: builders.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "login",
          method: "post",
          body,
        };
      },
    }),
    signupUser: builders.mutation({
      query: (body: { name: string; email: string; password: string }) => {
        return {
          url: "register",
          method: "post",
          body,
        };
      },
    }),
    sendEmail: builders.mutation({
      query: (body: { email: string }) => {
        return {
          url: "password/forgot",
          method: "post",
          body,
        };
      },
    }),
    resetPassword: builders.mutation({
      query: (body: { token: string; password: string }) => {
        return {
          url: `/password/reset/`,
          method: "put",
          body,
        };
      },
    }),
  }),
});

export const {
  useSigninUserMutation,
  useSignupUserMutation,
  useSendEmailMutation,
  useResetPasswordMutation,
} = authApi;
