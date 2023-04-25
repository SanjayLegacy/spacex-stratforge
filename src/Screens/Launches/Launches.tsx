import Loader from "../../Components/Loader";
import { useLaunchHook } from "../../Hooks/launchHooks";
import { LaunchModel } from "../../Models/launch.model";
import LaunchCard from "./LaunchCard";

function Launches() {
    const { launchArray, isLaunchLoading } = useLaunchHook({ id: "" });

    if (isLaunchLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col md:px-20 xs:px-8 sm:px-8 w-full h-full">
            <div className="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:gap-x-8 sm:gap-x-4 xs:gap-x-4 md:gap-y-8 sm:gap-y-4 xs:gap-y-3 p-4">
                {launchArray?.map((data: LaunchModel, index: number) => <LaunchCard key={index} launch={data} />)}
            </div>
        </div>
    )
}

export default Launches;