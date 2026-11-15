import { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/garage", label: "Garage" },
  { to: "/contact", label: "Contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { loginName } = useContext(UserContext);

  function closeMenu() {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={closeMenu}>BMW 7 Series</Link>
        <button type="button" className="menu-btn" aria-label="Toggle menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </button>
        <ul className={isOpen ? "menu menu-open" : "menu"}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/signin" onClick={closeMenu} className="nav-login-link" title="Demonstration name sign-in">
              {loginName ? "Hi, " + loginName : "Sign in"}
            </NavLink>
          </li>
          <li><NavLink to="/booking" onClick={closeMenu} className="nav-book-btn">Book a test drive</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
