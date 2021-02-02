import React, { Component } from 'react';

import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import './App.css';
import Projects from "./containers/Projects/Projects";
import Home from "./components/Home/Home";
import LeftComponent from "./components/LeftComponent/LeftComponent";

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Layout>
          {/*<div className="HomeContainer">*/}
          <div className="Leftcolumn">
            <Route path="/" component={LeftComponent}/>
          </div>
          <div className="Rightcolumn">
            <Switch>
              <Route path="/projects/" component={Projects}/>
              <Route path="/" component={Home} exact/>
            </Switch>
          </div>
          {/*</div>*/}
        </Layout>
      </div>
    );
  }
}

export default App;
