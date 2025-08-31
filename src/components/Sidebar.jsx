import { NavLink } from "react-router";
import { sidebarIcons, icons } from "../service/sidebarIcons";
import { TbSquareToggle } from "react-icons/tb";


const Sidebar = () => {
    console.log(icons);
    return (
        <div className=" h-full">
            <div className="w-full h-full m-auto">
                <div className="flex md:justify-between justify-center items-center w-[90%] mx-auto border">
                    <h1 className="text-xl font-semibold text-primary-color font-[Open Sans] md:block hidden">Billo</h1>
                    <TbSquareToggle className="w-[1.5em] h-[1.5em] text-primary-color" />
                </div>
                {sidebarIcons.map((item, index) =>
                (
                    <div key={index} className="flex w-[90%] mx-auto flex-col gap-y-4 mt-6">
                        <div>
                            <p className="text-sm text-gray-600 md:block hidden">{item.label}</p>
                        </div>
                        {item.links.map((link, i) => {
                            const Icon = icons[link.icon]
                            if (!Icon) {
                                console.error("no Icon found");
                                return null;
                            }
                            return (
                                <div key={i}>
                                    <NavLink to={link.path} className="flex md:justify-start justify-center items-center gap-2 text-gray-700 text-sm hover:bg-[#A1A4FF] rounded px-4 py-2">
                                        <Icon className="w-[1.2em] h-auto max-w-[1.2em] min-w-[1.2em]" /><span className="md:block hidden">{link.name}</span>
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