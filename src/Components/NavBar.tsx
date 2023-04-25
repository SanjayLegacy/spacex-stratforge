import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const activeStyle = {
        navLink: "cursor-pointer font-semibold px-6 py-2 text-white",
        active: "cursor-pointer font-semibold rounded-lg px-6 py-2 text-black bg-white",
    }

    return (
        <div className="flex flex-col h-screen w-screen">
            <section className={`w-full flex flex-row items-center justify-between px-12 py-4`}>
                <img className="w-60 cursor-pointer" src={require("../Assets/SpaceX_Logo_White.png")} alt='SpaceX' onClick={() => navigate('/')} />
                <div className="gap-x-20 flex flex-row">
                    <NavLink to={`/rockets`} className={(navData) => navData.isActive ? activeStyle.active : activeStyle.navLink}>ROCKETS</NavLink>
                    <NavLink to={`/history`} className={(navData) => navData.isActive ? activeStyle.active : activeStyle.navLink}>HISTORY</NavLink>
                    <NavLink to={`/launches`} className={(navData) => navData.isActive ? activeStyle.active : activeStyle.navLink}>LAUNCHES</NavLink>
                </div>
            </section>
            <section className="w-full h-full p-4 mb-4 overflow-y-auto no-scrollbar">
                <Outlet />
            </section>
        </div>
    )
}