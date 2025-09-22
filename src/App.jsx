// App.jsx
import  { useState } from "react";
import AppRoutes from "./routes/AppRoute"; // Clean and single entry point for routes

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false); // State for Sidebar visibility

  return (
 
      <AppRoutes showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
 
  );
};

export default App;
