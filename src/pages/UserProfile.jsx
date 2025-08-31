import { useEffect, useState } from "react";
import { getUserById } from "../service/user";
import axios from "axios";
import { userData } from "../auth/User";
import { useNavigate } from "react-router";


const UserProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        profile: null,
        phone: "98728101",
        address: "patan"
    });

    useEffect(() => {
        getUserById()
            .then((response) => {
                setUser({
                    name: response.data.fullName,
                    email: response.data.email,
                    profile: `data:image/png;base64,${response.data.profile}`
                });
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    const [profilePic, setProfilePic] = useState(null); // file
    const [preview, setPreview] = useState(null); // URL for preview
    const [editMode, setEditMode] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Handle file selection
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(file);
            setPreview(URL.createObjectURL(file)); // show preview
        }
    };

    // Save profile including picture
    const handleSave = async () => {
        try {
            const formData = new FormData();
            formData.append("id", localStorage.getItem("USER_ID"));
            formData.append("name", user.name);
            formData.append("email", user.email);
            if (profilePic) {
                formData.append("profile", profilePic);
            }

            // Send to Spring Boot backend
            const response = await axios.post("http://localhost:8080/api/user/profile", formData);
            console.log("response: ", response);
            if (response.status === 200) {
                location.reload();
            }
            const data = await response.json();
            console.log("Profile updated:", data);
            setEditMode(false);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-12">
            <div className="w-[97%] bg-white shadow-lg rounded-2xl p-8">
                <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500 overflow-hidden">
                        {preview ? (
                            <img src={preview} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <img src={user.profile} alt="Profile" className="w-full h-full object-cover" />
                        )}
                    </div>
                    <h1 className="text-2xl font-semibold mt-4">{user.name}</h1>
                    <p className="text-gray-500">{user.email}</p>
                </div>

                {editMode && (
                    <div className="mb-4 flex justify-center">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border p-2 rounded"
                        />
                    </div>
                )}

                <div className="space-y-4">
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ) : (
                            <p className="text-gray-800">{user.name}</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Email</label>
                        {editMode ? (
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ) : (
                            <p className="text-gray-800">{user.email}</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Phone</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="phone"
                                value={user.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ) : (
                            <p className="text-gray-800">{user.phone}</p>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Address</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="address"
                                value={user.address}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        ) : (
                            <p className="text-gray-800">{user.address}</p>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex justify-center gap-4">
                    {editMode ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditMode(false)}
                                className="px-6 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setEditMode(true)}
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
