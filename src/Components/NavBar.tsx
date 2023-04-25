import { Outlet } from "react-router-dom";
import NavBarSection from "./NavBarSection";

export default function NavBar() {

    return (
        <div className="flex flex-col h-screen w-screen">
            <section>
                <NavBarSection />
            </section>
            <section className="w-full h-full p-4 mb-4 overflow-y-auto no-scrollbar">
                <Outlet />
            </section>
        </div>
    )
}