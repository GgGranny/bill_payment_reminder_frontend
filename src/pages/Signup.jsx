import heroImage from "../assets/heroImages/hero-image.png";
import Form from "../components/Form";

const Signup = () => {
    return (
        <div className="login-form-container h-screen max-w-[1500px]">
            <div className="flex items-center justify-center h-full w-[90%] mx-auto ">
                <div className="relative h-full flex-2 overflow-hidden shrink-0 hidden md:block">
                    <div className="shape">
                    </div>
                    <div className="h-full w-[90%]">
                        <img src={heroImage} alt="" className="absolute top-30 left-25 object-cover h-[80%] w-[80%]" />
                    </div>
                </div>
                <div className="flex-2 h-full w-full">
                    <Form page={"signup"} />
                </div>
            </div>
        </div>
    )
}

export default Signup;