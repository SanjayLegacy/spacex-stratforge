import { useGetLaunchByIdQuery, useGetLaunchesQuery } from "../Services/launchesApi";

export const useLaunchHook = ({ id }: { id?: string }) => {
    const { data: launchArray, isLoading: isLaunchLoading } = useGetLaunchesQuery();
    const { data: launchData, isLoading: isLaunchDataLoading } = useGetLaunchByIdQuery(id ? id : "", { skip: !id });

    return {
        launchArray, isLaunchLoading, launchData, isLaunchDataLoading
    }
}