import { useState } from "react";
import Button from "../components/auth-button/Button";
import { addNewBill } from "../api/Bill";
import { useNavigate } from "react-router";

const Form = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        dueDate: "",
        category: "Electricity",
        status: "pending",
        amount: 0
    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data, [name]: value
        })
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        addNewBill(data)
            .then((response) => {
                if (response.status === 201) {
                    navigate("/layout/dashboard");
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }
    return (
        <div className=" h-full felx justify-center items-center">
            <div className="w-[97%] mx-auto mt-3">
                <form className="w-[60%] mx-auto ">
                    <div className="">
                        <h1 className="text-xl font-semibold">Add New Bill</h1>
                    </div>
                    {/** Name of the bill */}
                    <div className="flex items-center justify-between mt-6 ">
                        <label htmlFor="billName" aria-label="billName" className="text-sm text-gray-600 font-normal">Name</label>
                        <input onChange={handleChange} value={data.name} type="text" id="billName" name="name" className="bg-gray-200 rounded-sm w-[80%] ml-4 py-2 px-2 focus:outline-2 text-sm focus:outline-primary-color" placeholder="bill name here" />
                    </div>
                    {/** Category of the bill */}
                    <div className="flex items-center mt-6 justify-between ">
                        <label htmlFor="caegory" aria-label="category" className="text-sm text-gray-600 font-normal">Category</label>
                        <select onChange={handleChange} value={data.category} name="category" id="category" className="w-[80%] bg-gray-200 py-2 px-2 text-sm rounded-sm">
                            <option value="Electricity">Electricity</option>
                            <option value="Water">Water</option>
                            <option value="Utility">Utility</option>
                            <option value="Internet">Wifi</option>
                        </select>
                    </div>
                    {/** Due Date */}
                    <div className="flex items-center justify-between mt-6 ">
                        <label htmlFor="dueDate" aria-label="dueDate" className="text-sm text-gray-600 font-noraml">Due Date</label>
                        <input onChange={handleChange} vlaue={data.dueDate} type="date" id="dueDate" name="dueDate" className="bg-gray-200 rounded-sm w- w-[80%] ml-4 py-2 px-2 focus:outline-2  focus:outline-primary-color text-sm" />
                    </div>
                    {/** Amount */}
                    <div className="flex items-center justify-between mt-6 ">
                        <label htmlFor="amount" aria-label="amount" className="text-sm text-gray-600 font-noraml">Amount</label>
                        <input onChange={handleChange} value={data.amount} type="text" id="amount" name="amount" className="bg-gray-200 rounded-sm w- w-[80%] ml-4 py-2 px-2 focus:outline-2  focus:outline-primary-color text-sm" placeholder="Rs." />
                    </div>
                    {/* * Fine to pay
                    <div className="flex items-center justify-between mt-6 ">
                        <label htmlFor="fineAmount" aria-label="fineAmount" className="text-sm text-gray-600 font-noraml">Fine Amount</label>
                        <input type="text" id="fineAmount" name="fineAmount" className="bg-gray-200 rounded-sm w- w-[80%] ml-4 py-2 px-2 focus:outline-2  focus:outline-primary-color text-sm" placeholder="Rs." />
                    </div> */}
                    <div className="flex justify-center mt-10">
                        <Button className="bg-primary-color px-4 py-1 rounded text-sm font-medium text-snow hover:cursor-pointer hover:bg-[#4044B9] w-[8rem]" onClick={handelSubmit}>Add</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;