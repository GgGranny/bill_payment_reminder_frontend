import { NavLink } from "react-router";
import Button from "./auth-button/Button";
import "../styles/navbarStyles.css"
import { useState } from "react";
import { BsBorderWidth } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
    }

    const handleToggleBtn = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }
    const iconsStyle = {
        width: "1.5em",
        height: "1.5em"
    }
    return (
        <nav className="w-screen">
            <div className="flex justify-between items-center w-[90%] mx-auto my-1">
                <div className="logo-container">
                    <p className="text-primary-color font-bold text-xl">Billo</p>
                </div>
                <div className="navlink-container flex gap-6">
                    <ul className={`nav-links absolute ${isOpen ? "top-[7%]" : "top-[-100%]"} left-0 w-full flex flex-col items-center gap-6 p-6 bg-space-cadet md:static md:flex-row md:min-h-fit md:p-1 md:bg-transparent`}>
                        <li><NavLink className={({ isActive, isPending }) =>
                            isActive ? "nav-link isActive" : "nav-link"
                        } to="/#" >Support</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => {
                                return isActive ? "nav-link isActive" : "nav-link"
                            }} to="/#" >features</NavLink>
                        </li>
                        <li>
                            <NavLink end className={({ isActive }) =>
                                isActive ? "nav-link isActive" : "nav-link"
                            } to="/#" >About</NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center gap-6">
                        <Button
                            onClick={handleClick}
                            className="px-4 py-1 border focus:bg-primary-color focus:outline-2 focus:outline-primary-color hover:bg-[#2f33ae] text-snow bg-primary-color font-semibold rounded-sm "
                        >Login</Button>
                        {!isOpen ?
                            <BsBorderWidth onClick={handleToggleBtn} style={iconsStyle} className="md:hidden" name="menu" /> :
                            <IoClose onClick={handleToggleBtn} style={iconsStyle} className="md:hidden" id="close" />}
                    </div>
                </div>
            </div >
        </nav>
    )
}

export default Navbar;