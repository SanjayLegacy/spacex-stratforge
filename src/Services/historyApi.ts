import { allApis } from "./allApi";
import { HistoryModel } from "../Models/history.model";

export const historyApi = allApis.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getHistory: builder.query<HistoryModel[], void>({
            query: () => "history",
            providesTags: ["History"],
        })
    }),
});

export const { useGetHistoryQuery } = historyApi;