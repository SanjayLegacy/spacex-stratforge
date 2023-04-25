import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import { useRocketHook } from "../../Hooks/rocketHooks";
import { RocketModel } from "../../Models/rocket.model";
import useDebounce from "../../Utils/debounce";
import RocketCard from "./RocketCard";

function Rockets() {
    const { rocketArray, isRocketLoading } = useRocketHook({ id: undefined });
    const [search, setSearch] = useState('');
    const [filteredArray, setFilteredArray] = useState<RocketModel[]>([]);

    useDebounce(() => {
        if (rocketArray) {
            setFilteredArray(
                rocketArray.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
            );
        }
    }, [rocketArray, search], 800);

    const handleSearch = (e: any) => setSearch(e.target.value);

    useEffect(() => {
        if (!isRocketLoading && rocketArray) {
            setFilteredArray(rocketArray)
        }
    }, [isRocketLoading, rocketArray]);

    if (isRocketLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col md:px-20 xs:px-8 w-full h-full gap-y-4">
            <div className="flex justify-end px-4">
                <input
                    type="text"
                    spellCheck="false"
                    placeholder="Search a Rocket's Name"
                    value={search || ''}
                    onChange={handleSearch}
                    className="leading-5 px-4 text-sm relative w-[15rem] rounded-lg p-input text-gray-700 md:text-base placeholder:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent border border-gray-300 h-12"
                />
            </div>
            <div className="grid md:grid-cols-2 xs:grid-cols-1 md:gap-x-8 xs:gap-x-4 md:gap-y-8 xs:gap-y-4 md:p-4 xs:p-2">
                {filteredArray?.map((data: RocketModel, index: number) => <RocketCard key={index} rocket={data} />)}
            </div>
        </div>
    )
}

export default Rockets;