import Card from "../components/templates/Card";
import Layout from "./Layout";
import { cardData } from "../service/dashboardService";
import Chart from "../components/templates/Chart";


const Dashboard = () => {
    return (
        <div className="w-[97%] mx-auto mt-3">
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
            <div>
                <div>
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;