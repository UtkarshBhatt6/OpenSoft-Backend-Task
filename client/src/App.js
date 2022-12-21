import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import BookRoomscreen from "./Screens/BookRoomscreen";
import StudentModal from "./Screens/StudentModal";
import Studentform from "./Components/Studentform";
import LoginPage from "./Components/LoginPage";
import Adminform from "./Components/Adminform";
import Allotroom from "./Components/Allotroom";
import Login from "./Components/Login";
import Register from "./Components/Register";
const NewInfo = require("./models/registerInfo");
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/studentLogin" element={<Studentform />} />
          <Route path="/adminLogin" element={<Adminform />} />
          <Route path="/bookRoom" element={<BookRoomscreen />} />
          <Route path="/home" element={<StudentModal />} />
          <Route path="/Allotroom" element={<Allotroom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
