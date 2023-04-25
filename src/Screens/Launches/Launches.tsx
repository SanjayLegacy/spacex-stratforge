import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import { useLaunchHook } from "../../Hooks/launchHooks";
import { LaunchModel } from "../../Models/launch.model";
import useDebounce from "../../Utils/debounce";
import LaunchCard from "./LaunchCard";

function Launches() {
    const { launchArray, isLaunchLoading } = useLaunchHook({ id: "" });
    const [search, setSearch] = useState('');
    const [filteredArray, setFilteredArray] = useState<LaunchModel[]>([]);

    useDebounce(() => {
        if (launchArray) {
            setFilteredArray(
                launchArray.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
            );
        }
    }, [launchArray, search], 800);

    const handleSearch = (e: any) => setSearch(e.target.value);

    useEffect(() => {
        if (!isLaunchLoading && launchArray) {
            setFilteredArray(launchArray)
        }
    }, [isLaunchLoading, launchArray]);

    if (isLaunchLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col md:px-20 xs:px-8 sm:px-8 w-full h-full gap-y-4">
            <div className="flex justify-end px-4">
                <input
                    type="text"
                    spellCheck="false"
                    placeholder="Search a Launch's Name"
                    value={search || ''}
                    onChange={handleSearch}
                    className="leading-5 px-4 text-sm relative w-[15rem] rounded-lg p-input text-gray-700 md:text-base placeholder:text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent border border-gray-300 h-12"
                />
            </div>
            <div className="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:gap-x-8 sm:gap-x-4 xs:gap-x-4 md:gap-y-8 sm:gap-y-4 xs:gap-y-3 p-4">
                {filteredArray?.map((data: LaunchModel, index: number) => <LaunchCard key={index} launch={data} />)}
            </div>
        </div>
    )
}

export default Launches;