import Login from "./components/LoginPage/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Poll from "./components/HomePage/Poll/Poll";
import Result from "./components/HomePage/ResultPage/Result";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home/poll" element={<Poll />} />
        <Route path="/home/result" element={<Result />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
