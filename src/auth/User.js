import axios from "axios";

export const userData = {
    profile: "https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullName: "Abhishek Rai",
    email: "acb@gmail.com",
}

export const loginRequest = async (formData) => {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/login", formData);
        return response;
    } catch (error) {
        console.error("error in login");
        throw error;
    }
}

export const signupRequest = async (data) => {
    const response = await axios.post("http://localhost:8080/api/auth/signup", data);
    return response;
}

export const requestLogout = async () => {
    const response = await axios.get("http://localhost:8080/api/auth/logout");
}