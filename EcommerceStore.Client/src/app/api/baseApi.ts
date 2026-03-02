import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice.ts";
import { toast } from "react-toastify";
import { router } from "../models/routes/Routes.tsx";

const customBaseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5203/api",
});

// const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
type ErrorResponse = string | { title: string } | { errors: string[] };

export const baseQueryWithErrorHandling = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  api.dispatch(startLoading());
  // await sleep();
  const result = await customBaseQuery(args, api, extraOptions);
  api.dispatch(stopLoading());
  if (result.error) {
    const originalStatus =
      result.error.status === "PARSING_ERROR" && result.error.originalStatus
        ? result.error.originalStatus
        : result.error.status;
        console.log(result);
    const responseData = result.error.data as ErrorResponse;
    // const respData = result.error;
    switch (originalStatus) {
      case 400:
        if (typeof responseData === "string")
          toast.error(responseData as string);
        else if ("errors" in responseData) {
          toast.error("Validation error");
        }
        else toast.error(responseData.title);
        break;
      case 401:
        if (typeof responseData === "object" && "title" in responseData)
          toast.error(responseData.title);
        break;
      case 404:
        if (typeof responseData === "object" && "title" in responseData)
          router.navigate('/not-found', {state: {error: responseData}});  
        break;
      case 500:
        if (typeof responseData === "object")
          router.navigate('/server-error', {state: {error: responseData}});  
      
        break;

      default:
        break;
    }
  }
  return result;
};
