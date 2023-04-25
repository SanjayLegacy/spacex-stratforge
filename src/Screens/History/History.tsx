import HistoryCard from "./HistoryCard";
import Loader from "../../Components/Loader";
import { useHistoryHook } from "../../Hooks/historyHooks";
import { HistoryModel } from "../../Models/history.model";

function History() {
    const { historyArray, isHistoryLoading } = useHistoryHook();

    if (isHistoryLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col md:px-20 sm:px-8 xs:px-8 w-full h-full">
            <div className="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 xs:gap-y-2 sm:gap-y-2 w-full">
                <div className="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:gap-x-3 sm:gap-y-2 xs:gap-y-2">
                    {historyArray?.map((data: HistoryModel, index: number) => <HistoryCard key={index} history={data} />)}
                </div>
                <div className="flex flex-row items-start justify-center">
                    <img alt="" src={require("../../Assets/spacex-rocket.png")} className="bg-cover h-[90rem] object-center mx-auto" />
                </div>
            </div>
        </div>
    )
}

export default History;