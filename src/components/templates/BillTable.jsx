const BillTable = ({ allBills }) => {
    return (
        <div className=" w-full overflow-x-auto">
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
                    {allBills.map((data, index) => {
                        return (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border border-gray-300 text-center">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-4 py-2 border border-gray-300 text-xs font-normal">{data.name}</td>
                                <td className="px-4 py-2 border border-gray-300 text-xs font-normal">{data.dueDate}</td>
                                <td className="px-4 py-2 border border-gray-300 text-xs font-normal">{data.category}</td>
                                <td className="px-4 py-2 border border-gray-300 text-xs font-normal">{data.amount}</td>
                                <td className="px-4 py-2 border border-gray-300 text-xs font-normal text-red-500">{data.status}</td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div>


    )
}
export default BillTable;