import { useState } from "react";
import { deleteBill, handleBillStatusChange } from "../../api/Bill";
import { useNavigate } from "react-router";
import Button from "../auth-button/Button";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { MdMore } from "react-icons/md";
import { Alert } from "antd";
import CustomAlert from "./CustomAlert";


const BillTable = ({ allBills, handleDelete, alertMessage, alertType }) => {
    const [statusData, setStatusData] = useState({});
    const navigate = useNavigate();
    // const [alertMessage, setAlertMessage] = useState("");
    // const [alertType, setAlertType] = useState("");

    const handleStatusChange = (id, e) => {
        const { value } = e.target;
        setStatusData((prev) => ({
            ...prev,
            [id]: value,
        }));
        handleBillStatusChange(id, { status: value })
            .then((response) => {
                console.log(response);
                location.reload();
            })
            .catch((error) => {
                console.error(error);
            })
    };

    // const handleDelete = (billId) => {
    //     deleteBill(billId)
    //         .then((response) => {
    //             setAlertMessage("Bill deleted Successfully");
    //             setAlertMessage("success");
    //         })
    //         .catch((error) => {
    //             setAlertMessage("Bill delete failed");
    //             setAlertMessage("error");
    //             console.error(error);
    //         })
    //         .finally(() => {
    //             setTimeout(() => {
    //                 setAlertMessage("");
    //                 setAlertType("");
    //             }, 2000); // show alert for 2 seconds
    //         });
    // }

    // Utility: return Tailwind classes based on status
    const getStatusClass = (status) => {
        switch (status) {
            case "PENDING":
                return "bg-yellow-100 text-yellow-700 border-yellow-400";
            case "PAID":
                return "bg-green-100 text-green-700 border-green-400";
            case "OVERDUE":
                return "bg-red-100 text-red-700 border-red-400";
            case "UPCOMING":
                return "bg-blue-100 text-blue-700 border-blue-400";
            default:
                return "bg-gray-100 text-gray-700 border-gray-300";
        }
    };

    return (
        <div className="w-full overflow-x-auto">
            {alertMessage && (
                <div className="absolute top-15 right-10">
                    <CustomAlert message={alertMessage} type={alertType} showIcon className="w-[250px] h-[50px]" />
                </div>
            )}
            <table className="w-full border-collapse table-auto text-sm">
                <thead className="bg-gray-100">
                    <tr className="text-xs text-gray-500 font-normal">
                        <th className="px-4 py-2 text-left">
                            <input type="checkbox" disabled />
                        </th>
                        <th className="px-4 py-2 font-normal">Bills</th>
                        <th className="px-4 py-2 font-normal">Due Date</th>
                        <th className="px-4 py-2 font-normal">Category</th>
                        <th className="px-4 py-2 font-normal">Amount</th>
                        <th className="px-4 py-2 font-normal">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {allBills && allBills.length > 0 ? (
                        allBills.map((data) => {
                            const currentStatus = statusData[data.id] || data.status;
                            return (
                                <tr key={data.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border border-gray-300 text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300 text-xs font-normal">
                                        {data.name}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300 text-xs font-normal">
                                        {data.dueDate}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300 text-xs font-normal">
                                        {data.category}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300 text-xs font-normal">
                                        {data.amount}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300 text-xs font-normal flex items-center gap-2">
                                        <select
                                            name="status"
                                            value={currentStatus}
                                            onChange={(e) => handleStatusChange(data.id, e)}
                                            className={`px-2 py-1 rounded-md border text-xs font-medium ${getStatusClass(
                                                currentStatus
                                            )}`}
                                        >
                                            <option value="PENDING">PENDING</option>
                                            <option value="PAID">PAID</option>
                                            <option value="OVERDUE">Over Due</option>
                                            <option value="UPCOMING">Up Coming</option>
                                        </select>
                                        <div className="flex gap-2">
                                            <button className="flex items-center justify-center p-2 rounded-md hover:bg-red-100 hover:text-red-700 transition-colors duration-200" onClick={() => handleDelete(data.id)}>
                                                <RiDeleteBin2Fill className="w-5 h-5 text-red-500 group-hover:text-red-700" />
                                            </button>

                                            {/* <Button className="flex items-center justify-center p-2 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200">
                                                <AiFillEdit className="w-5 h-5 text-blue-500" />
                                            </Button>

                                            <Button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200">
                                                <MdMore className="w-5 h-5 text-gray-500" />
                                            </Button> */}
                                        </div>

                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td
                                colSpan={6}
                                className="h-[20vh] w-full text-gray-600 text-xs text-center"
                            >
                                No Bills added.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BillTable;
