import { NavLink } from "react-router";
import { sidebarIcons, icons } from "../service/sidebarIcons";
import { TbSquareToggle } from "react-icons/tb";


const Sidebar = () => {
    console.log(icons);
    return (
        <div className=" h-full">
            <div className="w-full h-full m-auto">
                <div className="flex justify-between items-center w-[90%] mx-auto ">
                    <h1 className="text-xl font-semibold text-primary-color font-[Open Sans] ">Billo</h1>
                    <TbSquareToggle className="w-[1.5em] h-[1.5em] text-primary-color" />
                </div>
                {sidebarIcons.map((item, index) =>
                (
                    <div key={index} className="flex w-[90%] mx-auto flex-col gap-y-4 mt-6">
                        <div>
                            <p className="text-sm text-gray-600">{item.label}</p>
                        </div>
                        {item.links.map((link, i) => {
                            const Icon = icons[link.icon]
                            if (!Icon) {
                                console.error("no Icon found");
                                return null;
                            }
                            return (
                                <div key={i}>
                                    <NavLink to={link.path} className="flex justify-start items-center gap-2 text-gray-700 text-sm hover:bg-[#A1A4FF] rounded px-4 py-2">
                                        <Icon className="w-[1.2em] h-auto" /><span>{link.name}</span>
                                    </NavLink>
                                </div>
                            )
                        }
                        )}
                    </div>
                )
                )}
            </div >
        </div >
    );
}

export default Sidebar;