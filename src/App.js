import React, {useEffect, useState} from 'react';

import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import './App.css';
import Projects from "./containers/Projects/Projects";
import Home from "./components/Home/Home";
import About from "./components/About/About";

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
        <Switch>
          <Route path="/projects/" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home} exact/>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
