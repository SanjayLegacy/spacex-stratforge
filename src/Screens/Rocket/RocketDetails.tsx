import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import { useRocketHook } from "../../Hooks/rocketHooks";
import { formatNumbers } from "../../Utils/format";

function RocketDetails() {
    const { id } = useParams();
    const { rocketData, isRocketDataLoading } = useRocketHook({ id });

    if (isRocketDataLoading) {
        return <Loader />;
    }

    return (
        <div className="h-full w-full px-20">
            <div className="font-medium text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {rocketData?.name}
            </div>
            <div className="flex flex-col text-white mt-4 mb-4 pl-4 font-semibold gap-y-4">
                <div>{rocketData?.description}</div>
                <div>First Flight: {rocketData?.first_flight}</div>
                <div>
                    {rocketData?.wikipedia && <a target="_blank" rel="noreferrer" className="mt-8 font-mono" href={rocketData?.wikipedia}>Read More...</a>}
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div>
                    <div className="mt-10 mb-6 font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600">
                        Overview
                    </div>
                    <div className="flex flex-col pl-4 text-white">
                        <div className="grid grid-cols-2 gap-y-4">
                            <>
                                <div>HEIGHT</div>
                                <div>{rocketData?.height.meters} m / {rocketData?.height.feet} ft</div>
                            </>
                            <>
                                <div>DIAMETER</div>
                                <div>{rocketData?.diameter.meters} m / {rocketData?.diameter.feet} ft</div>
                            </>
                            <>
                                <div>MASS</div>
                                <div>{formatNumbers(rocketData?.mass.kg)} kg / {formatNumbers(rocketData?.mass.lb)} lb</div>
                            </>
                            {React.Children.toArray(rocketData?.payload_weights?.map((payLoad) =>
                                <>
                                    <div className="uppercase">PAYLOAD TO {payLoad.id}</div>
                                    <div>{rocketData?.diameter.meters} m / {rocketData?.diameter.feet} ft</div>
                                </>))}
                        </div>
                    </div>
                    <div className="mt-12 mb-6 font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600">
                        FIRST STAGE
                    </div>
                    <div className="flex flex-col pl-4 text-white">
                        <div className="grid grid-cols-2 gap-y-4">
                            <>
                                <div>ENGINES</div>
                                <div>{rocketData?.first_stage.engines}</div>
                            </>
                            <>
                                <div>THRUST AT SEA LEVEL</div>
                                <div>{formatNumbers(rocketData?.first_stage.thrust_sea_level.kN)} kN / {formatNumbers(rocketData?.first_stage.thrust_sea_level.lbf)} lbf</div>
                            </>
                            <>
                                <div>THRUST IN VACUUM</div>
                                <div>{formatNumbers(rocketData?.first_stage.thrust_vacuum.kN)} kN / {formatNumbers(rocketData?.first_stage.thrust_vacuum.lbf)} lbf</div>
                            </>
                            <>
                                <div>LANDING LEGS</div>
                                <div>{rocketData?.landing_legs.number}</div>
                            </>
                            <>
                                <div>LANDING LEGS MATERIAL</div>
                                <div className="capitalize">{rocketData?.landing_legs.material ?? '-'}</div>
                            </>
                        </div>
                    </div>
                    <div className="mt-12 mb-6 font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600">
                        SECOND STAGE
                    </div>
                    <div className="flex flex-col pl-4 text-white">
                        <div className="grid grid-cols-2 gap-y-4">
                            <>
                                <div>ENGINES</div>
                                <div>{rocketData?.second_stage.engines} vacuum</div>
                            </>
                            <>
                                <div>BURN TIME</div>
                                <div>{rocketData?.second_stage.burn_time_sec} sec</div>
                            </>
                            <>
                                <div>THRUST</div>
                                <div>{formatNumbers(rocketData?.second_stage.thrust.kN)} kN / {formatNumbers(rocketData?.second_stage.thrust.lbf)} lbf</div>
                            </>
                            <>
                                <div>FUEL</div>
                                <div>{rocketData?.second_stage.fuel_amount_tons} tons</div>
                            </>
                        </div>
                    </div>
                    <div className="mt-12 mb-6 font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600">
                        PAYLOAD
                    </div>
                    <div className="flex flex-col pl-4 text-white">
                        <div className="grid grid-cols-2 gap-y-4">
                            <>
                                <div>HEIGHT</div>
                                <div>{rocketData?.second_stage.payloads.composite_fairing.height.meters ?? '-'} m / {rocketData?.second_stage.payloads.composite_fairing.height.feet ?? '-'} ft</div>
                            </>
                            <>
                                <div>DIAMETER</div>
                                <div>{rocketData?.second_stage.payloads.composite_fairing.diameter.meters ?? '-'} m / {rocketData?.second_stage.payloads.composite_fairing.diameter.feet ?? '-'} ft</div>
                            </>
                        </div>
                    </div>
                    <div className="mt-12 mb-3 font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600 uppercase">
                        ENGINE - {rocketData?.engines.type}
                    </div>
                    <div className="mt-4 mb-3 font-medium text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600 uppercase">
                        SEA LEVEL
                    </div>
                    <div className="flex flex-col pl-4 text-white">
                        <div className="grid grid-cols-2 gap-y-4">
                            <>
                                <div>PROPELLANT</div>
                                <div className="capitalize">{rocketData?.engines.propellant_1} / {rocketData?.engines.propellant_2}</div>
                            </>
                            <>
                                <div>THRUST</div>
                                <div>{formatNumbers(rocketData?.engines.thrust_sea_level.kN)} kN / {formatNumbers(rocketData?.engines.thrust_sea_level.lbf)} lbf</div>
                            </>
                        </div>
                    </div>
                    <div className="mt-4 mb-3 font-medium text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600 uppercase">
                        VACUUM
                    </div>
                    <div className="flex flex-col pl-4 text-white">
                        <div className="grid grid-cols-2 gap-y-4">
                            <>
                                <div>PROPELLANT</div>
                                <div className="capitalize">{rocketData?.engines.propellant_1} / {rocketData?.engines.propellant_2}</div>
                            </>
                            <>
                                <div>THRUST</div>
                                <div>{formatNumbers(rocketData?.engines.thrust_vacuum.kN)} kN / {formatNumbers(rocketData?.engines.thrust_vacuum.lbf)} lbf</div>
                            </>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt="" src={require("../../Assets/spacex.png")} className="bg-cover h-[90rem] object-center mx-auto" />
                </div>
            </div>
            <div className="mt-12 mb-3 font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-200 to-pink-600 uppercase">
                GALLERY
            </div>
            <div className="grid grid-cols-3 p-2 pl-4 rounded-lg gap-4">
                {rocketData?.flickr_images.map((image, index) => (
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
        </div>
    )
}

export default RocketDetails;