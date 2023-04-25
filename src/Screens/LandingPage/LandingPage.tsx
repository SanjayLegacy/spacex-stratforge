import Loader from "../../Components/Loader";
import { useLaunchHook } from "../../Hooks/launchHooks";
import LandingPageLaunchCard from "./LandingPageLaunchCard";

function LandingPage() {
    const { launchArray, isLaunchLoading } = useLaunchHook({ id: '' });

    if (isLaunchLoading) {
        return <Loader />
    }

    return (
        <div className="flex flex-col md:px-20 sm:px-8 w-full h-full">
            <div className="grid grid-cols-1 gap-y-8 p-4">
                {launchArray && <LandingPageLaunchCard data={launchArray[12]} title="RECENT LAUNCH" />}
                {launchArray && <LandingPageLaunchCard data={launchArray[13]} title="NEXT LAUNCH" />}
                {launchArray && <LandingPageLaunchCard data={launchArray[14]} title="UPCOMING LAUNCH" />}
                {launchArray && <LandingPageLaunchCard data={launchArray[15]} title="PAST LAUNCH" />}
            </div>
        </div>
    )
}

export default LandingPage;