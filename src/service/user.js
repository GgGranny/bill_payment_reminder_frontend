import axios from "axios";

export const getUserById = async () => {
    const id = localStorage.getItem("USER_ID");
    const response = await axios.get(`http://localhost:8080/api/user/${id}`);
    return response;
}