import { billData } from "../utils/calender"

export const getBillData = (currentMonth, currentYear) => {
    return billData.map((data) => {
        const d = new Date(data.date);
        const month = d.getMonth();
        const year = d.getFullYear();
        if (currentMonth === month && currentYear === year) {
            return data;
        }
        return null;
    });
}

export const validateTheBills = (date, bData) => {
    if (!bData) return;
    if (bData.map((data) => data.date === date)) {
        return true;
    }
    else {
        false;
    }
}