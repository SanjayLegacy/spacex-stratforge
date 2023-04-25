import Loader from "../../Components/Loader";
import { useRocketHook } from "../../Hooks/rocketHooks";
import { RocketModel } from "../../Models/rocket.model";
import RocketCard from "./RocketCard";

function Rockets() {
    const { rocketArray, isRocketLoading } = useRocketHook({ id: undefined });

    if (isRocketLoading) {
        return <Loader />;
    }

    return (
        <div className="flex flex-col px-20 w-full h-full">
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 p-4">
                {rocketArray?.map((data: RocketModel, index: number) => <RocketCard key={index} rocket={data} />)}
            </div>
        </div>
    )
}

export default Rockets;