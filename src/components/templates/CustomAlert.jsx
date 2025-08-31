// CustomAlert.jsx
import React from "react";

const CustomAlert = ({ message, type }) => {
    if (!message) return null;

    const baseClass =
        "fixed top-[60px] right-10 z-50 w-[250px] p-3 rounded-md shadow-md text-sm font-medium transition-all duration-300";

    const typeClass = {
        success: "bg-green-100 text-green-700 border border-green-400",
        error: "bg-red-100 text-red-700 border border-red-400",
        info: "bg-blue-100 text-blue-700 border border-blue-400",
        warning: "bg-yellow-100 text-yellow-700 border border-yellow-400",
    };

    return <div className={`${baseClass} ${typeClass[type] || typeClass.info}`}>{message}</div>;
};

export default CustomAlert;
