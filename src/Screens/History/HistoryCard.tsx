import { useState } from "react";
import { dateTimeFormat1 } from "../../Utils/format";
import { HistoryModel } from "../../Models/history.model";

function HistoryCard({ history }: { history: HistoryModel }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)} style={{ backdropFilter: 'blur(30px)' }}
                className="flex flex-col justify-between cursor-pointer p-3 overflow-hidden rounded-lg max-w-60 h-64 transition ease-in-out hover:scale-105 duration-200 bg-white text-white bg-opacity-20 hover:text-black hover:bg-white">
                <div className="font-medium text-xl">{history.title}</div>
                <div className="flex flex-col gap-y-4">
                    <div className="font-normal">Event Unix : {dateTimeFormat1(history.event_date_unix)}</div>
                    <div className="font-normal">Event UTC : {dateTimeFormat1(history.event_date_utc)}</div>
                </div>
            </div>

            {/* PopUp Modal */}
            {showModal ? (
                <>
                    <div className="xs:px-10 sm:px-12 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {history.title}
                                    </h3>
                                </div>
                                <div className="p-6 flex flex-col">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        {history.details}
                                    </p>
                                    <div>Event Unix : {dateTimeFormat1(history.event_date_unix)}</div>
                                    <div>Event UTC : {dateTimeFormat1(history.event_date_utc)}</div>
                                    {history.links.article && <a target="_blank" rel="noreferrer" className="mt-8 font-mono" href={history.links.article}>Learn More...</a>}
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : <></>}
        </>
    )
}

export default HistoryCard;