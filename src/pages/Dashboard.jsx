import Card from "../components/templates/Card";
import { cardData } from "../service/dashboardService"; // keep this import
import Chart from "../components/templates/Chart";
import Calender from "../components/templates/Calender";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        // Wait until cardData is populated (assuming cardData is async-friendly)
        async function loadCards() {
            // If your service already returns promises, resolve them here
            const resolvedData = await Promise.all(
                cardData.map(async (item) => {
                    const quantity = typeof item.quantity === "function"
                        ? await item.quantity() // if quantity is a function returning a promise
                        : item.quantity;
                    return { ...item, quantity };
                })
            );
            setCards(resolvedData);
        }

        loadCards();
    }, []);

    return (
        <div className="w-[97%] h-screen mx-auto mt-3">
            <h1 className="text-2xl font-semibold text-space-cadet mb-6">Dashboard</h1>
            <div className="flex justify-around flex-row">
                {cards.map((data, index) => {
                    return (
                        <div key={index} className="shadow w-[50%] mr-10 rounded p-1">
                            <Card data={data} />
                        </div>
                    );
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
        </div>
    );
};

export default Dashboard;
