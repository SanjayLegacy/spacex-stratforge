import HistoryCard from "./HistoryCard";
import Loader from "../../Components/Loader";
import { useHistoryHook } from "../../Hooks/historyHooks";
import { HistoryModel } from "../../Models/history.model";
import { useEffect, useState } from "react";
import useDebounce from "../../Utils/debounce";

function History() {
    const { historyArray, isHistoryLoading } = useHistoryHook();
    const [search, setSearch] = useState('');
    const [filteredArray, setFilteredArray] = useState<HistoryModel[]>([]);

    useDebounce(() => {
        if (historyArray) {
            setFilteredArray(
                historyArray.filter((d) => d.title.toLowerCase().includes(search.toLowerCase()))
            );
        }
    }, [historyArray, search], 800);

    const handleSearch = (e: any) => setSearch(e.target.value);

    useEffect(() => {
        if (!isHistoryLoading && historyArray) {
            setFilteredArray(historyArray)
        }
    }, [isHistoryLoading, historyArray]);

    if (isHistoryLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col md:px-20 sm:px-8 xs:px-8 w-full h-full gap-y-4">
            <div className="flex justify-end px-4">
                <input
                    type="text"
                    spellCheck="false"
                    placeholder="Search a History Title"
                    value={search || ''}
                    onChange={handleSearch}
                    className="leading-5 px-4 text-sm relative w-[15rem] rounded-lg p-input text-gray-700 md:text-base placeholder:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent border border-gray-300 h-12"
                />
            </div>
            <div className="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 xs:gap-y-2 sm:gap-y-2 w-full">
                <div className="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:gap-x-3 sm:gap-y-2 xs:gap-y-2">
                    {filteredArray?.map((data: HistoryModel, index: number) => <HistoryCard key={index} history={data} />)}
                </div>
                <div className="flex flex-row items-start justify-center">
                    {!search ?
                        <img alt="" loading="lazy" src={require("../../Assets/spacex-rocket.png")} className="bg-cover h-[90rem] object-center mx-auto" />
                        : <img alt="" loading="lazy" src={require("../../Assets/astronaut.png")} className="bg-cover object-center mx-auto" />}
                </div>
            </div>
        </div>
    )
}

export default History;