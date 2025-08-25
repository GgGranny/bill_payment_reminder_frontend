import axios from "axios"

export const getAllBills = async () => {
    const id = localStorage.getItem("USER_ID");
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/api/bills/getAllBills/${id}`, { withCredentials: true })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject("something wrong in getAllBills: ", error)
            })
    })
}

export const addNewBill = async (data) => {
    try {
        const response = await axios.post("http://localhost:8080/api/bills/addBill", { withCredentials: true }, data);
        return response;
    } catch (error) {
        console.error("something wrong in add bills: ", error);
        throw error;
    }
}

export const countOverDueBills = async () => {
    const response = await getAllBills();
    let count = 0;
    response.data.map((data) => {
        if (data.status === "OVERDUE") {
            count++;
        }
    });
    return count;
}

export const countPaidBills = async () => {
    const response = await getAllBills();
    let count = 0;
    response.data.map((data) => {
        if (data.status === "PAID") {
            count++;
        }
    });
    return count;
}

export const countUpcomingBills = async () => {
    const response = await getAllBills();
    let count = 0;
    response.data.map((data) => {
        if (data.status === "UPCOMING") {
            count++;
        }
    });
    return count;
}

export const countTotalBills = async () => {
    const response = await getAllBills();
    return response.data.length;
}