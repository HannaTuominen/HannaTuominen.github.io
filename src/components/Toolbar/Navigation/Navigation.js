import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";

const navigation = (props) => (
  <ul className="NavigationItems">
    <li className="NavigationItem">
      <NavLink
        to="/projects/mobile"
        exact={props.exact}
        activeClassName="active">
        Mobile
      </NavLink>
    </li>
    <li className="NavigationItem">
      <NavLink
        to="/projects/web"
        exact={props.exact}
        activeClassName="active">
        Web
      </NavLink>
    </li>
    <li className="NavigationItem">
      <NavLink
        to="/projects/other"
        exact={props.exact}
        activeClassName="active">
        Other
      </NavLink>
    </li>
  </ul>
);

export default navigation;
