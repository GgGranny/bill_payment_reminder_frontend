import axios from "axios";

export const getALlNotifications = () => {
    const id = localStorage.getItem("USER_ID");
    const response = axios.get(`http://localhost:8080/api/bills/getAllNotifications/${id}`);
    return response;
}


export const calualateDate = (date) => {
    const today = new Date();
    const givenDate = new Date(date);
    return today.toDateString() === givenDate.toDateString();
}

export const markAsRead = () => {
    const id = localStorage.getItem("USER_ID");
    const response = axios.get(`http://localhost:8080/api/bills/markNotifications/${id}`, { withCredentials: true });
    return response;
}
