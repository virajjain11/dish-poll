import Login from "./components/LoginPage/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Poll from "./components/HomePage/Poll/Poll";
import Result from "./components/HomePage/ResultPage/Result";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(null);

  return (
    <BrowserRouter>
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home/poll" element={<Poll setIsActive={setIsActive} />} />
        <Route
          path="/home/result"
          element={<Result setIsActive={setIsActive} />}
        />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
