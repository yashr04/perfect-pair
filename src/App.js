import "./App.css";
// import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Navbar from "./component/navbar/Navbar";
import Review from "./component/testimonial/Review";
import Contact from "./component/contact/Contact";
import Udaipur from "./component/service/udaipur/Udaipur";
import Jaipur from "./component/service/Jaipur/Jaipur";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment, createContext, useState } from "react";
import Service from "./component/service/Service";
import BudgetCalc from "./component/feature/budgetcalci/BudgetCalc";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Serverit from "./component/serverit/Serverit";
import Booked from "./component/booked/Booked";
import Error from "./component/error/Error"
import ThemePackage from "./component/ThemePack/ThemePack"
import Booking from "./component/bookingcomp/Booking"
export const SigninContext = createContext();
function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <SigninContext.Provider value={{ signedIn, setSignedIn }}>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mybooking" element={<Serverit />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/udaipur/Udaipur" element={<Udaipur />} />
            <Route path="/service/jaipur/jaipur" element={<Jaipur />} />
          
            <Route path="/budgetCalc" element={<BudgetCalc />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/server" element={<Serverit />} />
          <Route path="/booked" element={<Booked />} />
          <Route path="/themePackage" element={<ThemePackage/>} />
          <Route path="/booking/:id" element ={<Booking/>}/>
          

          </Routes>
         {/* <Footer/> */}
        </Router>
      </SigninContext.Provider>
    </>
  );
}

export default App;
