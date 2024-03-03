import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover bodyB">
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
