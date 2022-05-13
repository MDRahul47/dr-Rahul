import { Routes, Route} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import Reviews from "./Pages/Reviews/Reviews";
import Navbar from './Pages/Share/Navbar';

function App() {
  return (
    <div className="max-w-7xl overflow-x-hidden mx-auto px-12 " >
      <Navbar></Navbar>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      
    </div>
  );
}

export default App;
