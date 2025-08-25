import Card from "../components/templates/Card";
import Layout from "./Layout";
import { cardData } from "../service/dashboardService";
import Chart from "../components/templates/Chart";
import Calender from "../components/templates/Calender";
import Button from "../components/auth-button/Button";
import BillTable from "../components/templates/BillTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllBills } from "../api/Bill";

const Dashboard = () => {
    const navigate = useNavigate();
    const [allBills, setAllBills] = useState([]);

    useEffect(() => {
        getAllBills()
            .then((data) => {
                setAllBills(data.data);
            })
            .catch(error => console.error(error));
    }, [])

    const handleAddBill = () => {
        navigate("/layout/add");
        console.log("clicked ");
    }
    return (
        <div className="w-[97%] h-screen mx-auto mt-3 ">
            <h1 className="text-2xl font-semibold text-space-cadet mb-6">Dashboard</h1>
            <div className="flex justify-around">
                {cardData.map((data, index) => {
                    return (
                        <div key={index} className="shadow w-[50%] mr-10 rounded p-1">
                            <Card data={data} />
                        </div>
                    )
                })}
            </div>
            <div className="flex gap-2 w-[96%] h-[300px] mt-6">
                <div className="flex-2 h-full">
                    <Chart />
                </div>
                <div className="flex-1 h-full">
                    <Calender />
                </div>
            </div>

            {/*Add bill bustton*/}
            <div className="flex justify-between items-center mt-7 w-[97%]">
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
                <BillTable allBills={allBills} />
            </div>

        </div >
    )
}

export default Dashboard;