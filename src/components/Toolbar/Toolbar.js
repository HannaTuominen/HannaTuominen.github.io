import React from 'react';
import './Toolbar.css';
// import {useHistory} from 'react-router-dom';
import Navigation from "./Navigation/Navigation";

const toolbar = (props) => {

  // const history = useHistory();

  const getToHome = () => {
    // history.push("/");
  };

  return (
  <header className="Toolbar">
   <div onClick={getToHome} className="HomeLogo">Hanna's portfolio</div>

    <nav>
      <Navigation/>
    </nav>

  </header>
  )};

export default toolbar;
