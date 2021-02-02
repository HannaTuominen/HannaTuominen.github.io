import React from 'react';
import './Navigation.css';

import NavigationItem from "./NavigationItem/NavigationItem";

const navigation = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/about">About</NavigationItem>
    <NavigationItem link="/projects/mobile">Mobile</NavigationItem>
    <NavigationItem link="/projects/web">Web</NavigationItem>
    <NavigationItem link="/projects/other">Other</NavigationItem>
  </ul>
);

export default navigation;
