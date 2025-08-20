import { cardIcons } from "../../service/dashboardService";

const Card = ({ data }) => {
    const Icon = cardIcons[data.icon];
    return (
        <>
            <div className="flex gap-2 items-center">
                <Icon className="w-[.9em] h-auto inline-block text-gray-500" /> <span className="text-xs text-gray-500 font-normal">{data.title}</span>
            </div>
            <div className="text-3xl font-medium mt-2 text-primary-color">
                {data.quantity}
            </div>
        </>
    )
}
export default Card;