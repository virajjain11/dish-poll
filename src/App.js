import Login from "./components/LoginPage/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Poll from "./components/HomePage/Poll";
import Result from "./components/HomePage/ResultPage/Result";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Poll />} />
        <Route path="/home/result" element={<Result />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
