import "./App.css";
import "./css/home.css";
import "./css/login.css";
import "./css/schedule.css";
import "./css/navbar.css";
import "./css/navmain.css";


import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Shedule } from "./components/Shedule";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="schedule" element={<Shedule />}></Route>
      </Routes>
    </div>
  );
}

export default App;
