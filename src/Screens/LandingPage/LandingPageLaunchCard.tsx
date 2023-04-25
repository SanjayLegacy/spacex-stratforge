import { LaunchModel } from "../../Models/launch.model";

function LandingPageLaunchCard({ data, title }: { data: LaunchModel, title: string }) {
    return (
        <div
            className="relative h-screen w-full overflow-hidden justify-between items-center gap-x-6 rounded-lg text-white">
            <div
                className="absolute left-5 top-[35rem] h-full w-full overflow-hidden bg-fixed flex flex-col items-start gap-y-2">
                <div className="font-medium text-2xl">
                    {title}
                </div>
                <div className="font-medium text-8xl uppercase">
                    {data.name}
                </div>
                <button type='button' className="px-4 py-2 border border-white text-xl rounded-lg hover:bg-white hover:text-black">
                    <a target="_blank" rel="noreferrer" href={data?.links.wikipedia}>Read More...</a>
                </button>
            </div>
            {data.links.flickr.original[0] ?
                <img src={data.links.flickr.original[0]} alt="" className="object-center rounded-lg h-full w-full" />
                : <img src={require('../../Assets/rocket_placeholder.png')} alt="" className="object-center m-auto h-h-1/2" />}
        </div>
    );
}

export default LandingPageLaunchCard;