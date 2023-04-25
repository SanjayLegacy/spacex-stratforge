import { allApis } from "./allApi";
import { RocketModel } from "../Models/rocket.model";

export const rocketApi = allApis.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getRocket: builder.query<RocketModel[], void>({
            query: () => "rockets",
            providesTags: ["Rocket"],
        }),
        getRocketById: builder.query<RocketModel, any>({
            query: (id: string) => `rockets/${id}`,
            providesTags: ["Rocket"],
        }),
    }),
});

export const { useGetRocketQuery, useGetRocketByIdQuery } = rocketApi;