import { useEffect, useRef, useState } from "react";
import Button from "../auth-button/Button";
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdNotifications } from "react-icons/md";
import Notification from "../templates/Notification";
import { getALlNotifications, markAsRead } from "../../api/Notifications";
import { useNavigate } from "react-router";
import axios from "axios";

const Navbar = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [allNotifications, setAllNotifications] = useState([]);
    const notificationRef = useRef(null);
    const navigate = useNavigate();

    const [showProfile, setShowProfile] = useState(false);
    const profileRef = useRef(null);

    const [notificationsRead, setNotificationsRead] = useState(false);
    useEffect(() => {
        let hasRead = false;
        getALlNotifications()
            .then((response) => {
                response.data.map((d) => {
                    if (d.read === false) {
                        hasRead = true;
                    }
                })
                setNotificationsRead(hasRead);
            })
            .catch((error) => {
                console.error(error);
            })
    })
    const handleShowNotification = () => {
        setShowNotification((prev) => !prev); // toggle instead of only true
        getALlNotifications()
            .then((response) => {
                setAllNotifications(response.data);
                return markAsRead()
            })
            .then((response) => {
                setNotificationsRead(true);
                console.log(response)
            })
            .catch(() => {
                console.error(error);
            })
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setShowNotification(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleProfileOpen = () => {
        setShowProfile((prev) => !prev);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await axios.get("http://localhost:8080/api/auth/logout")
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem("EMAIL");
                    localStorage.removeItem("FULL_NAME");
                    localStorage.removeItem("USERID");
                    localStorage.removeItem("PROFILE");
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="w-[97%] mx-auto flex justify-between items-center mt-2 mb-2">
            {/* Search */}
            <form className="flex flex-row">
                <input
                    type="text"
                    placeholder="search here.."
                    name="searchValue"
                    id="searchField"
                    className="bg-gray-100 rounded px-4 py-1 text-sm"
                />
                <Button className="bg-transparent w-10 flex justify-center items-center ml-[-40px] rounded-tr-sm hover:cursor-pointer">
                    <FaSearch className="text-gray-400" />
                </Button>
            </form>

            {/* Right side */}
            <div className="flex items-center gap-2">
                {/* Notification */}
                <div
                    className="flex items-center justify-center relative h-[30px] w-[30px] z-10"
                    ref={notificationRef}
                >
                    <Button
                        className="flex justify-center items-center aspect-[1/1] rounded-full w-full h-full relative hover:cursor-pointer focus:border focus:border-primary-color"
                        onClick={handleShowNotification}
                    >
                        {notificationsRead && (
                            <div className="bg-red-600 outline-2 outline-white w-[7px] h-[7px] rounded absolute right-0 top-0"></div>
                        )}
                        <MdNotifications className="w-full h-full text-gray-700" />
                    </Button>

                    {showNotification && (
                        <div className="fixed top-15 right-[15%] shadow w-[350px] rounded-2xl h-fit bg-white">
                            <div className="bg-primary-color text-white text-sm px-2 py-2">
                                Notification
                            </div>
                            <div>
                                <Notification data={allNotifications} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div ref={profileRef} className="relative">
                    <div
                        className="h-10 w-10 rounded-full overflow-hidden cursor-pointer border border-gray-300"
                        onClick={handleProfileOpen}
                    >
                        {localStorage.getItem("PROFILE") ? (
                            <img
                                src={localStorage.getItem("PROFILE")}
                                alt="User profile"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <IoPersonOutline className="h-full w-full text-gray-500" />
                        )}
                    </div>

                    {showProfile && (
                        <div className="absolute top-12 right-0 bg-white rounded-lg shadow-lg w-40 flex flex-col divide-y divide-gray-200 overflow-hidden z-50">
                            <button className="px-4 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200" onClick={() => navigate("/layout/profileUpload")}>
                                Change Profile
                            </button>
                            <button className="px-4 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>

                {/* User Info */}
                <div className="flex flex-col">
                    <p className="text-sm text-space-cadet font-medium">
                        {localStorage.getItem("FULL_NAME")}
                    </p>
                    <p className="text-xs font-normal text-gray-500">
                        {localStorage.getItem("EMAIL")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
