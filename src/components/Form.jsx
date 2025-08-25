import "../styles/loginForm.css";
import Button from "./auth-button/Button";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { loginRequest } from "../auth/User";
import { useState } from "react";

const Form = ({ page }) => {
    const location = useLocation();
    const isSignup = location.pathname === "/signup";
    const navigate = useNavigate();
    const [data, setData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handelChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        if (!isSignup) {
            loginRequest(data).then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("FULL_NAME", response.data.fullName);
                    localStorage.setItem("EMAIL", response.data.email);
                    localStorage.setItem("USER_ID", response.data.id);
                    localStorage.setItem("PROFILE", response.data.profile | null)
                    console.log(response);
                    navigate("/layout/dashboard");
                }
            })
                .catch((error) => {
                    console.error(error);
                });
        }

    }
    const handleGoogleAuth = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    }
    return (
        <div className="flex flex-col justify-center items-center h-full min-w-[375px]">
            <form className="w-[90%]  px-2 flex flex-col gap-y-2 md:w-[60%] " action="">
                <h1 className="text-xl text-center font-semibold">Create Your Free Account</h1>
                {isSignup && (
                    <div className="field-container mb-2 mt-3">
                        <label htmlFor="username">Full Name</label>
                        <input type="text" placeholder="Enter your Full Name here" name="fullName" id="full-name" className="data-field" onChange={handelChange} value={data.fullName} />
                    </div>
                )}
                <div className="field-container mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter your Email here" name="email" id="email" className="data-field" onChange={handelChange} value={data.email} />
                </div>
                <div className="field-container mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="text" placeholder="Enter your Password here" name="password" onChange={handelChange} value={data.password} />
                </div>
                <div className="login-btn-container flex justify-center">
                    <Button className="bg-primary-color text-snow px-4 py-2 rounded h-[40px] hover:cursor-pointer hover:bg-blue-700 focus:bg-blue-800 text-sm text-center" onClick={handleSubmitForm}>{page == "signup" ? "Creat Account" : "Login"}</Button>
                </div>
            </form>
            {isSignup ? (
                <div className="w-[90%] text-left mx-auto md:w-[60%]">
                    <span className="text-xs">Already have an account ? <NavLink to="/login" className="text-primary-color">Log in</NavLink></span>
                </div>
            ) : (
                <div className="w-[90%] text-left mx-auto md:w-[60%]">
                    <span className="text-xs">Don't have an account ? <NavLink to="/signup" className="text-primary-color">Register</NavLink></span>
                </div>
            )}
            <div className="w-[90%] text-center mx-auto md:w-[60%]">
                <span className="text-sm text-gray-400 ">-OR-</span>
            </div>
            <div className="w-[90%] md:w-[60%]">
                <Button onClick={handleGoogleAuth} className="w-full h-10 border rounded flex justify-center items-center text-snow gap-6 text-xs bg-space-cadet hover:bg-gray-800 hover:cursor-pointer">
                    <FcGoogle style={{
                        height: "1.8em",
                        width: "1.8em"
                    }} />
                    Sign up with Google
                </Button>
            </div>
        </div>
    )
}

export default Form;