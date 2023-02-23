import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
// import Logout from "./pages/Logout";
// import { useSelector } from "react-redux";
// import { selectUser } from "./redux/auth/userSlice";


function App() {
//  const user = useSelector(selectUser)
  return (
    <div className="flex w-full h-screen items-center justify-center">
      {/* {user ? <Logout/> : <Logout/>} */}

      <Routes>
        <Route path="/*" element={<Navigate to = "/"/> } />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
   

      </Routes>
     
     
 
    </div>
  );
}

export default App;
