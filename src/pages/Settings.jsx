import { useEffect, useState } from "react";

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold mb-6">⚙️ Settings</h1>

            <div className="flex items-center gap-3">
                <span>Light</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={darkMode}
                        onChange={toggleTheme}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full relative">
                        <div
                            className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition-transform ${darkMode ? "translate-x-5" : ""
                                }`}
                        ></div>
                    </div>
                </label>
                <span>Dark</span>
            </div>
        </div>
    );
};

export default Settings;