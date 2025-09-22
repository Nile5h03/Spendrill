/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for the saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default theme based on user's OS preference
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    // Add or remove the 'dark' class based on isDarkMode state
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Toggle theme on button click
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full">
      {isDarkMode ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;
