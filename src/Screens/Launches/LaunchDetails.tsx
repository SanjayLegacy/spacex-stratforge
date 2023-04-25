import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import { dateFormat } from "../../Utils/format";
import { useLaunchHook } from "../../Hooks/launchHooks";

function LaunchDetails() {
    const { id } = useParams();
    const { launchData, isLaunchDataLoading } = useLaunchHook({ id });

    if (isLaunchDataLoading) {
        return <Loader />;
    }

    return (
        <div className="h-full w-full md:px-20 xs:px-8">
            <div className="font-medium text-transparent text-8xl xs:text-6xl sm:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {launchData?.name}
            </div>
            <div className="flex flex-col text-white mt-4 mb-4 font-semibold gap-y-4">
                <div className="text-justify">{launchData?.details}</div>
                <div>Launch Date: {dateFormat(launchData?.date_local)}</div>
                <div>Flight {launchData?.flight_number}</div>
                <div>
                    {launchData?.links.wikipedia && <a target="_blank" rel="noreferrer" className="mt-8 font-mono" href={launchData?.links.wikipedia}>Read More...</a>}
                </div>
            </div>
            <div className="flex md:flex-row xs:flex-col sm:flex-col items-center justify-around">
                {launchData?.links?.webcast && <iframe
                    width="600"
                    height="400"
                    style={{ paddingLeft: '32px', paddingRight: '32px' }}
                    src={launchData?.links?.webcast?.includes('watch?v=') ? launchData?.links?.webcast?.replace("watch?v=", "embed/") : 'https://www.youtube.com/embed/' + launchData?.links?.youtube_id}
                    title={launchData?.name}
                    frameBorder="0"
                    allowFullScreen
                />}
                <img alt="" src={launchData?.links.patch.small} />
            </div>
            {launchData?.links.flickr.original?.length ? <>
                <div className="mt-12 mb-3 font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600 uppercase">
                    GALLERY
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4">
                    {launchData?.links.flickr.original?.map((image, index) => (
                        <div key={index} className="flex w-full h-full flex-wrap transition ease-in-out hover:scale-105 duration-200">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt=""
                                    className="block h-full w-full rounded-lg object-cover object-center"
                                    src={image} />
                            </div>
                        </div>
                    ))}
                </div>
            </> : <></>}
        </div>
    );
}

export default LaunchDetails;