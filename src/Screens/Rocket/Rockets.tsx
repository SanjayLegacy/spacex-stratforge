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
        <div className="flex flex-col md:px-20 xs:px-8 w-full h-full">
            <div className="grid md:grid-cols-2 xs:grid-cols-1 md:gap-x-8 xs:gap-x-4 md:gap-y-8 xs:gap-y-4 md:p-4 xs:p-2">
                {rocketArray?.map((data: RocketModel, index: number) => <RocketCard key={index} rocket={data} />)}
            </div>
        </div>
    )
}

export default Rockets;