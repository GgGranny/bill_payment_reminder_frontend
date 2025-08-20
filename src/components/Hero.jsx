import heroImage from "../assets/heroImages/hero-image.png";
import Button from "./auth-button/Button";
import { FaArrowRight } from "react-icons/fa";


const Hero = () => {
    const handleGetStarted = () => {

    }
    return (
        <div className="hero-section flex flex-col bg-primary-color text-snow h-full w-[90%] mx-auto md:flex-row">
            <div className=" h-full w-full flex justify-center flex-3">
                <img className="object-cover h-full max-w-full min-w-[300px]" src={heroImage} alt="hero image" />
            </div>
            <div className="flex flex-col justify-center flex-auto pl-5">
                <h1 className="text-4xl text-wrap font-bold w-1/2">Ease Your Billing Payments</h1>
                <p className="font-normal text-lg leading-loose">Track your bills at every step of payment.</p>
                <div>
                    <Button className="bg-plum px-4 py-2 rounded-sm font-semibold flex justify-center items-center gap-4 hover:bg-[#B869C7] cursor-pointer" onClick={handleGetStarted}>
                        Get Started
                        <span><FaArrowRight /></span>
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Hero;