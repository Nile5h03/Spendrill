/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loading state
  const [errorMessage, setErrorMessage] = useState(null);

  const { setData, setIsLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok && data.success) {
        setData(data.data);
        setIsLoggedIn(true);

        console.log("user data", data.data);
        localStorage.setItem("userId", data.data.userId); // ✅ Save token for later

        alert("Login successful!");
        navigate("/");
      } else {
        setErrorMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#E8F1FF] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Sign In
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Username/Email</label>
            <input
              type="text"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter username or email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 py-2 font-bold rounded text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#4B7ABD] hover:bg-[#3b66a0]"
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don&#39;t have an account?{" "}
            <a href="/SingupPage" className="text-[#4B7ABD] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
