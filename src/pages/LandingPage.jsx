import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const LandingPage = () => {
    return (
        <div>
            <div className="navbar-container">
                <Navbar />
            </div>
            <div className="hero-container min-h-[400px] max-h-full md:h-[400px]">
                <Hero />
            </div>
        </div>
    )
}

export default LandingPage;