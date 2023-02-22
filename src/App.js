import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
   
      <Routes>
        <Route path="/*" element={<Navigate to = "/"/> } />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user-profile" element={<Profile/>} />
      </Routes>
     
     
 
    </div>
  );
}

export default App;
