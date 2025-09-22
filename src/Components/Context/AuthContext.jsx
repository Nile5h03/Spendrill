import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    //verify api call on page refresh so that logout nhi ho
    const verifyUser = async () => {
      console.log("verifying user...");
      try {
        const res = await fetch("http://localhost:3000/api/auth/verify", {
          method: "GET",
          credentials: "include",
        });
        const result = await res.json();
        if (result.authenticated) {
          console.log("User is authenticated:", result.authenticated);
          console.log("Befor", isLoggedIn);
          setIsLoggedIn(true);
          console.log("After", isLoggedIn);
          console.log("User data form back:", result.user);
          setData(result.user || {});
          console.log("User data form fro:", data);
        } else {
          setIsLoggedIn(false);
          setData(null);
        }
      } catch (error) {
        console.log("error verifying", error);
        setIsLoggedIn(false);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []); //will work on page reload

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, data, setData, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
