import { useNavigate } from "react-router";
import { deleteBill, getAllBills } from "../api/Bill";
import Button from "../components/auth-button/Button";
import BillTable from "../components/templates/BillTable";
import { useState, useEffect } from "react";


const Tables = () => {
    const navigate = useNavigate();
    const [allBills, setAllBills] = useState([]);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    useEffect(() => {
        getAllBills()
            .then((data) => {
                console.log("hello");
                setAllBills(data.data);
            })
            .catch(error => console.error(error));
    }, [])

    const handleAddBill = () => {
        navigate("/layout/add");
        console.log("clicked ");
    }

    const handleDelete = (billId) => {
        deleteBill(billId)
            .then((response) => {
                setAlertMessage("Bill deleted Successfully");
                setAlertType("success");
                setAllBills((prev) => prev.filter((bill) => bill.id !== billId));
            })
            .catch((error) => {
                setAlertMessage("Bill delete failed");
                setAlertMessage("error");
                console.error(error);
            })
            .finally(() => {
                setTimeout(() => {
                    setAlertMessage("");
                    setAlertType("");
                }, 2000); // show alert for 2 seconds
            });
    }
    return (
        <div className="w-[97%] mx-auto">
            {/*Add bill bustton*/}
            <div className="flex  justify-between items-center mt-7 w-[97%]">
                <div className="text-sm">
                    <h1 className="text-primary-color font-normal">Your Bills</h1>
                    <p className="text-xs leading-8 text-gray-500">Manage and track all your upcoming payments</p>
                </div>
                <div>
                    <Button className="bg-primary-color font-semibold px-4 py-2 text-white rounded hover:bg-blue-700 hover:cursor-pointer" onClick={handleAddBill} >
                        + Add New Bill
                    </Button>
                </div>
            </div>

            {/*Table*/}
            <div className="w-[97%] h-fit">
                <BillTable allBills={allBills} handleDelete={handleDelete} alertMessage={alertMessage} alertType={alertType} />
            </div>

        </div>
    )
}

export default Tables;