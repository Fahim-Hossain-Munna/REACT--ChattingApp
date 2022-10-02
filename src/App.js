import { Routes, Route, Link } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login"


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
