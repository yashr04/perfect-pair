import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { SigninContext } from "../../App";
import { auth } from "firebase/auth";
import "./Navbar.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  Link,
} from "react-router-dom";

const Navbar = () => {
  const { signedIn } = useContext(SigninContext);
  const [click, setClick] = useState(false);
  const [signedState, setSignedState] = useState("Sign In");

  useEffect(() => {
    setSignedState(signedIn ? "Sign Out" : "Sign In");
  }, [signedIn]);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <span>PerfectPair</span>
          <span className="icon">
            <CodeIcon />
          </span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <NavItem to="/" text="Home" onClick={handleClick} />
  
          <NavItem to="/service" text="Services" onClick={handleClick} />
          <NavItem to="/mybooking" text="My Bookings" onClick={handleClick} />
          <NavItem to="/budgetcalc" text="Budget Calculator" onClick={handleClick} />
          <NavItem to="/themePackage" text="Theme Package" onClick={handleClick} />
          <NavItem to="/contact" text="Contact Us" onClick={handleClick} />
          <NavItem to="/signin" text={signedState} onClick={handleClick} />
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          <span className="icon">
            {click ? <HamburgetMenuOpen /> : <HamburgetMenuClose />}
          </span>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text, onClick }) => (
  <li className="nav-item">
    <NavLink
      exact
      to={to}
      activeClassName="active"
      className="nav-links"
      onClick={onClick}
    >
      {text}
    </NavLink>
  </li>
);

export default Navbar;
