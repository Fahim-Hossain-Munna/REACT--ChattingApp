import { Routes, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login"
import Home from "./pages/Home";
import Message from "./pages/Message";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/message" element={<Message />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
