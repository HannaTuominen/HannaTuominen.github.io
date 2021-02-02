import React from 'react';
import './SideDrawer.css';
import Navigation from "../Navigation/Navigation";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if(props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
        <nav>
          <Navigation/>
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;
