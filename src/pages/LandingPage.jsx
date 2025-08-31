import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <div className="navbar-container">
                <Navbar />
            </div>

            {/* Hero Section */}
            <div className="hero-container min-h-[400px] max-h-full md:h-[400px]">
                <Hero />
            </div>

            {/* Features Section */}
            <section className="py-16 px-6 md:px-12 bg-gray-100 flex flex-col gap-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Our Features</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-semibold mb-3">🚀 Fast & Reliable</h3>
                        <p className="text-gray-600">Experience blazing speed and reliability for your daily tasks.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-semibold mb-3">🔒 Secure</h3>
                        <p className="text-gray-600">Your data is encrypted and handled with top security standards.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-2xl p-6 text-center">
                        <h3 className="text-xl font-semibold mb-3">⚡ Easy to Use</h3>
                        <p className="text-gray-600">Simple interface designed to make your experience smooth.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    We are committed to providing the best service tailored to your needs.
                    Our platform is built with modern technology, ensuring speed, security,
                    and ease of use. Whether you’re new or experienced, we’ve got you covered.
                </p>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6 mt-auto">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
