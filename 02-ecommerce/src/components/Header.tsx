import { useState } from "react";
import logo from "../assets/logo/logo.png";
import menu from "../assets/svgs/reorder-four-outline.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <img src={logo} id="img-logo-icon" alt="" />

        <input type="text" placeholder="search" />

        <img
          src={menu}
          onClick={() => setOpen(!open)}
          id="img-menu-icon"
          alt="this is menu"
        />

        <nav>
          <ul className="nav-items">
            <li className="nav-item">Account</li>
            <li className="nav-item">Orders</li>
            <li className="nav-item">Cart</li>
            <li className="nav-item">Help</li>
          </ul>
        </nav>
      </header>
      {open && (
        <div className="menu-item">
          <a href="/">Account</a>
          <a href="/">Orders</a>
          <a href="/">Cart</a>
          <a href="/">Help</a>
        </div>
      )}
    </>
  );
}
