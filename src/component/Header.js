import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <div className="w3-top w3-padding-bottom">
    <div className="w3-row w3-padding w3-black">
      <div className="w3-col s3">
        <NavLink to="/" exact>
          Home
        </NavLink>
      </div>
      <div className="w3-col s3">
        <NavLink to="/about" exact>
          About
        </NavLink>
      </div>
      <div className="w3-col s3">
        <NavLink to="/contact" exact>
          Contact
        </NavLink>
      </div>
      <div className="w3-col s3">
        <NavLink to="/address" exact>
          WHERE
        </NavLink>
      </div>
    </div>
  </div>
);

export default Header;
