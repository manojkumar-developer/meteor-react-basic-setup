/*
   MainMenu

 */
/** ****************************** Import packages *************************** */
import React from "react";
import { NavLink } from "react-router-dom";

/** ****************************** Import utils and API *************************** */
import { MainMenuConstants } from "/imports/constants/menu.js";

const MainMenu = () => (
  <ul className="navbar-nav main-menu margin-top-sm">
    {MainMenuConstants.map(function(menu) {
      return (
        <li className="nav-item" key={menu.id}>
          <NavLink
            to={`/${menu.id}`}
            className="nav-link"
            activeclassname="active"
          >
            {menu.title}
          </NavLink>
        </li>
      );
    })}
  </ul>
);

export default MainMenu;
