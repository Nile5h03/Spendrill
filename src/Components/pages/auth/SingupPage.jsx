/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState(""); // ✅ added
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { setData, setIsLoggedIn } = useAuthContext();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const signupData = { name, username, email, password, confirmpassword }; // ✅ fixed
    console.log("Sending signup data:", signupData);

    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setData(result.data || result.user); // ✅ best compatibility
        setIsLoggedIn(true);
        alert("Signup successful!");
        navigate("/");
      } else {
        setErrorMessage(result.message || "Signup failed. Try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-[#E8F1FF] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Sign Up
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Choose a username"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              autoComplete="new-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              autoComplete="new-password"
              type="password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Confirm your password"
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
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              className="text-[#4B7ABD] hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
