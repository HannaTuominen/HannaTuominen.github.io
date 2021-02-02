import React, {useState} from 'react';

import './Layout.css';
import Footer from "../Footer/Footer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = ( props ) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return(
      <div className="LayoutContainer">
        <Toolbar
          drawerToggleClicked={sideDrawerToggleHandler}
        />
        <SideDrawer
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}/>
        <main className="Content">
          {props.children}
        </main>
        <Footer/>
      </div>
  )
};

export default Layout;
