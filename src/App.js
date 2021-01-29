import React, { Component } from 'react';
import ProjectsContainer from "./containers/ProjectsContainer/ProjectsContainer";
import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import MobileContainer from "./containers/MobileContainer/MobileContainer";
import WebContainer from "./containers/WebContainer/WebContainer";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Layout>
          <Switch>
            <Route path="/mobile" component={MobileContainer}/>
            <Route path="/web" component={WebContainer}/>
            <Route path="/other" component={ProjectsContainer}/>
            <Route path="/" component={Home} exact/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
