import React from 'react';
import './Toolbar.css';
import {useHistory} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from '../../../assets/logo.png';


const Toolbar = (props) => {

  const history = useHistory();

  const getToHome = () => {
    history.push("/");
  };

  return (
  <header className="Toolbar">
    <img src={Logo} onClick={getToHome} className="HomeLogo" style={{height:"50px"}}/>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <nav className="DesktopOnly">
      <Navigation/>
    </nav>
  </header>
  )};

export default Toolbar;
