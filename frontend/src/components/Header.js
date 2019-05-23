import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <div className="container">
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
      <br />
      <NavLink to="/login" activeClassName="is-active">
        Login
      </NavLink>
      <br />
      <NavLink to="/signup" activeClassName="is-active">
        Signup
      </NavLink>
    </div>
  </header>
);

export default Header;
