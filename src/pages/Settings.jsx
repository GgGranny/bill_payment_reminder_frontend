import { useState, useEffect } from "react";

const Settings = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("bg-gray-900", "text-white");
            document.body.classList.remove("bg-white", "text-black");
        } else {
            document.body.classList.add("bg-white", "text-black");
            document.body.classList.remove("bg-gray-900", "text-white");
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="flex items-center gap-4">
                <label className="font-medium">Dark Mode</label>
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleToggle}
                    className="w-6 h-6 cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Settings;
