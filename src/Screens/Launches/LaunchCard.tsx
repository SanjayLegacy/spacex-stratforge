import { useNavigate } from "react-router-dom";
import { dateFormat } from "../../Utils/format";
import { LaunchModel } from "../../Models/launch.model";

function LaunchCard({ launch }: { launch: LaunchModel }) {
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col relative h-[30rem] w-full overflow-hidden justify-between items-center gap-x-6 rounded-lg transition ease-in-out hover:scale-105 duration-200 text-white">
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#060101a9] bg-fixed opacity-0 transition duration-300 ease-in-out flex flex-col justify-center items-center text-white hover:opacity-100 gap-y-2">
                <div className="font-medium text-3xl">
                    {launch.name}
                </div>
                <div className="font-medium text-xl">
                    {dateFormat(launch.date_utc)}
                </div>
                <button onClick={() => navigate(`/launches/${launch.id}`)} type='button' className="px-4 py-2 border border-white text-xl rounded-lg hover:bg-white hover:text-black">Learn More...</button>
            </div>
            {launch.links.flickr.original[0] ?
                <img loading="lazy" src={launch.links.flickr.original[0]} alt="" className="object-center rounded-lg h-full w-full" />
                : <img loading="lazy" src={require('../../Assets/rocket_placeholder.png')} alt="" className="object-center m-auto h-80" />}
        </div>
    );
}

export default LaunchCard;