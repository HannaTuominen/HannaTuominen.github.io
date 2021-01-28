import React from 'react';

import './Layout.css';
import Toolbar from "../Toolbar/Toolbar";
import Footer from "../Footer/Footer";

const layout = ( props ) => (
    <div className="Container">
      <Toolbar/>
      <main className="Content">
        {props.children}
      </main>
      <Footer/>
    </div>
);

export default layout;
