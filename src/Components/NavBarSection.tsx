import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function NavBarSection() {
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState(false);

    const activeStyle = {
        navLink: "cursor-pointer font-semibold px-6 py-2 text-white",
        active: "cursor-pointer font-semibold rounded-lg px-6 py-2 text-black bg-white",
    }

    return (
        <nav className="w-full">
            <div className="justify-between md:px-12 mx-auto md:items-center md:flex sm:px-8 xs:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-4 md:block">
                        <img className="w-60 cursor-pointer" src={require("../Assets/SpaceX_Logo_White.png")} alt='SpaceX' onClick={() => { setNavbar(false); navigate('/'); }} />
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="white"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <NavLink onClick={() => setNavbar(false)} to={`/rockets`} className={(navData) => navData.isActive ? activeStyle.active : activeStyle.navLink}>ROCKETS</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <NavLink onClick={() => setNavbar(false)} to={`/history`} className={(navData) => navData.isActive ? activeStyle.active : activeStyle.navLink}>HISTORY</NavLink>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <NavLink onClick={() => setNavbar(false)} to={`/launches`} className={(navData) => navData.isActive ? activeStyle.active : activeStyle.navLink}>LAUNCHES</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
