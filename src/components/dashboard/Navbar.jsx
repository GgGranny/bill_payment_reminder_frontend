import { CiUser } from "react-icons/ci";
import profileImg from "../../assets/heroImages/hero-image.png";
import Button from "../auth-button/Button";
import { FaSearch } from "react-icons/fa";
import { userData } from "../../auth/User";
const Navbar = () => {
    return (
        <div className="w-[97%] mx-auto flex justify-between items-center mt-2 mb-2">
            <form className=" flex flex-row">
                <input type="text" placeholder="search here.." name="searchValue" id="searchField" className="bg-gray-100 rounded px-4 py-1 " />
                <Button className="bg-transparent w-10 flex justify-center items-center ml-[-40px] rounded-tr-sm hover:cursor-pointer">
                    <FaSearch className="text-gray-400" />
                </Button>
            </form>
            <div className="flex items-center gap-2">
                <div className="h-[30px] w-[30px] rounded-full border border-blue-500 overflow-hidden">
                    <img src={userData.profile} alt="" className="h-full w-auto object-cover aspect-[1/1]" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm text-space-cadet font-medium">{userData.fullName}</p>
                    <p className="text-xs font-normal text-gray-500">{userData.email}</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar;