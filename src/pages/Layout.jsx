import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";

const Layout = () => {
    const naviagte = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("EMAIL")) {
            naviagte("/login");
        }
    }, [])
    return (
        <div className="h-screen w-full flex">
            <div className="w-[20%] bg-gray-50">
                <Sidebar />
            </div>
            <div className="w-[80%]">
                <div className="w-full">
                    <Navbar />
                </div>
                <div className="overflow-auto h-[90vh]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout;