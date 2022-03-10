import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = function () {
    return(
        <ul>
            <li>
                <NavLink to="/">
                    <button className="nav-element">Xylophone</button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/quiz">
                    <button className="nav-element">Slash beef?</button>
                </NavLink>
                {/* <NavLink to="/cuts">
                    <button className="nav-element">Post-trout</button>
                </NavLink> */}
            </li>
        </ul>
    )
};

export default NavBar;
