import { useGetRocketByIdQuery, useGetRocketQuery } from "../Services/rocketApi"

export const useRocketHook = ({ id }: { id?: string }) => {
    const { data: rocketArray, isLoading: isRocketLoading } = useGetRocketQuery();
    const { data: rocketData, isLoading: isRocketDataLoading } = useGetRocketByIdQuery(id ? id : "", { skip: !id });

    return {
        rocketArray, isRocketLoading, rocketData, isRocketDataLoading
    }
}