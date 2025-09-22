import React, { useEffect, useState } from "react";
import axios from "axios";

const Profit = () => {
  const [user, setUser] = useState({});

  const token = localStorage.getItem("authToken");

  const fetchProfile = async () => {
    const res = await axios.get("http://localhost:3000/api/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(res.data);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      name: user.name,
      email: user.email,
    };

    const res = await axios.post(
      "http://localhost:3000/api/profile/update",
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    setUser(res.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Your Profile</h2>
      <input
        type="text"
        name="name"
        value={user.name || ""}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={user.email || ""}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profit;
