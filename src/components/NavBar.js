import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/map">Google Map</NavLink>
        </li>
        <li>
          <NavLink to="/payment">Stripe Payment</NavLink>
        </li>
        <li>
          <NavLink to="/payment2">Stripe Payment 2</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
