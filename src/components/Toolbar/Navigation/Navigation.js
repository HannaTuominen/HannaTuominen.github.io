import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";

const navigation = (props) => (
  <ul className="NavigationItems">
    <li className="NavigationItem">
      <NavLink
        to="/mobile"
        exact={props.exact}
        activeClassName="active">
        Mobile
      </NavLink>
    </li>
    <li className="NavigationItem">
      <NavLink
        to="/web"
        exact={props.exact}
        activeClassName="active">
        Web
      </NavLink>
    </li>
    <li className="NavigationItem">
      <NavLink
        to="/other"
        exact={props.exact}
        activeClassName="active">
        Other
      </NavLink>
    </li>
  </ul>
);

export default navigation;
