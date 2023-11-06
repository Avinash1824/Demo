import "./App.css";
import Achievements from "./components/Achievements";
import Articles from "./components/Articles";
import Calendar from "./components/Calendar";
import Courses from "./components/Courses";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Quizes from "./components/Quizes";
import Resources from "./components/Resources";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Courses" element={<Courses/>}></Route>
            <Route path="/Resources" element={<Resources/>}></Route>
            <Route path="/Resources" element={<Resources/>}></Route>
            <Route path="/Quizes" element={<Quizes/>}></Route>
            <Route path="/Calendar" element={<Calendar />}></Route>
            <Route path="/Articles" element={<Articles />}></Route>
            <Route path="/Acheivements" element={<Achievements />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default App;
