import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const ProfileUpload = ({ onUploadSuccess }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    // Load existing profile from localStorage on mount
    useEffect(() => {
        const savedProfile = localStorage.getItem("PROFILE");
        if (savedProfile) setProfile(savedProfile);
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            setError("Please select a valid image file.");
            return;
        }

        setSelectedFile(file);
        setError("");
    };

    const handleUpload = () => {
        if (!selectedFile) {
            setError("Please select a file first.");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            setProfile(base64String);
            localStorage.setItem("PROFILE", base64String); // store locally
            if (onUploadSuccess) onUploadSuccess(base64String);
            navigate("/layout/dashboard");
            setUploading(false);
        };
        setUploading(true);
        reader.readAsDataURL(selectedFile);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Profile Preview */}
            <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300">
                {profile ? (
                    <img
                        src={profile}
                        alt="User profile"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500">
                        No Image
                    </div>
                )}
            </div>

            {/* File input */}
            <input type="file" accept="image/*" onChange={handleFileChange} />

            {/* Upload button */}
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={handleUpload}
                disabled={uploading}
            >
                {uploading ? "Uploading..." : "Upload Profile"}
            </button>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default ProfileUpload;
