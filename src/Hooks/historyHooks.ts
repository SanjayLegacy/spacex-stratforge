import { useGetHistoryQuery } from "../Services/historyApi"

export const useHistoryHook = () => {
    const { data: historyArray, isLoading: isHistoryLoading } = useGetHistoryQuery();

    return {
        historyArray, isHistoryLoading
    }
}