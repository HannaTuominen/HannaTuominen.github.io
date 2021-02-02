import React from 'react';
import './Toolbar.css';
import {useHistory} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {

  const history = useHistory();

  const getToHome = () => {
    history.push("/");
  };

  return (
  <header className="Toolbar">
   <div onClick={getToHome} className="HomeLogo">Hanna's portfolio</div>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <nav className="DesktopOnly">
      <Navigation/>
    </nav>
  </header>
  )};

export default Toolbar;
