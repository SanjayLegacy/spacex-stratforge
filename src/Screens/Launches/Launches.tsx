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
        <div className="flex flex-col px-20 w-full h-full">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 p-4">
                {launchArray?.map((data: LaunchModel, index: number) => <LaunchCard key={index} launch={data} />)}
            </div>
        </div>
    )
}

export default Launches;