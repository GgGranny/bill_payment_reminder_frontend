import Card from "../components/templates/Card";
import Layout from "./Layout";
import { cardData } from "../service/dashboardService";
import Chart from "../components/templates/Chart";
import Calender from "../components/templates/Calender";
import Button from "../components/auth-button/Button";


const Dashboard = () => {
    return (
        <div className="w-[97%] h-screen mx-auto mt-3 border">
            <h1 className="text-2xl font-semibold text-space-cadet">Dashboard</h1>
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

            <div className="flex justify-between items-center mt-6 w-[97%] ">
                <div className="text-sm">
                    <h1 className="text-primary-color font-normal">Your Bills</h1>
                    <p className="text-xs leading-8 text-gray-500">Manage and track all your upcoming payments</p>
                </div>
                <div>
                    <Button className="bg-primary-color font-semibold px-4 py-2 text-white rounded hover:bg-blue-700 hover:cursor-pointer" >
                        + Add New Bill
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Dashboard;