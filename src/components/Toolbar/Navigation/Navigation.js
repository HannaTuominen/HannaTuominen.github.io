import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";

const navigation = (props) => (
  <ul className="NavigationItems">
    <li className="NavigationItem">
      <NavLink
        to="/projects"
        exact={props.exact}
        activeClassName="active">
        Projects
      </NavLink>
    </li>
  </ul>
);

export default navigation;
