import { useNavigate } from "react-router-dom";
import { RocketModel } from "../../Models/rocket.model";

function RocketCard({ rocket }: { rocket: RocketModel }) {
    const navigate = useNavigate();

    return (
        <div
            className="relative min-h-fit min-w-fit overflow-hidden justify-between items-center gap-x-6 rounded-lg transition ease-in-out hover:scale-105 duration-200 text-white">
            <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#060101a9] bg-fixed opacity-0 transition duration-300 ease-in-out flex flex-col justify-center items-center text-white hover:opacity-100 gap-y-2">
                <div className="font-medium md:text-3xl xs:text-lg">
                    {rocket.name}
                </div>
                <div className="font-medium md:text-xl xs:text-lg">
                    {rocket.first_flight}
                </div>
                <button onClick={() => navigate(`/rockets/${rocket.id}`)} type='button' className="px-4 py-2 border border-white md:text-xl xs:text-lg rounded-lg hover:bg-white hover:text-black">Learn More...</button>
            </div>
            <img src={rocket.flickr_images[0]} loading="lazy" alt={require('../../Assets/rocket_placeholder.png')} className="object-cover rounded-lg h-full w-full" />
        </div>
    )
}

export default RocketCard;