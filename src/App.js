import React, {useEffect, useState} from 'react';

import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import './App.css';
import Projects from "./containers/Projects/Projects";
import Home from "./components/Home/Home";
import LeftComponent from "./components/LeftComponent/LeftComponent";

const App  = props => {
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(0);


  useEffect(  () => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    if(width < 801) {
      setMobile(true);
      console.log(width);
      console.log(mobile);
    } else {
      setMobile(false);
      console.log(width);
      console.log(mobile);
    }
  });

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };


  return (
    <div className="AppContainer">
      <Layout>
        {!mobile ?
          <React.Fragment>
            <div className="Leftcolumn">
              <Route path="/" component={LeftComponent}/>
            </div>
            <div className="Rightcolumn">
              <Switch>
                <Route path="/projects/" component={Projects}/>
                <Route path="/" component={Home} exact/>
              </Switch>
            </div>
          </React.Fragment> :
          <React.Fragment>
            <div className="Rightcolumn">
              <Switch>
                <Route path="/projects/" component={Projects}/>
                <Route path="/" component={Home} exact/>
              </Switch>
            </div>
            <div className="Leftcolumn">
              <Route path="/" component={LeftComponent}/>
            </div>
          </React.Fragment>
        }
      </Layout>
    </div>
  );
};

export default App;
