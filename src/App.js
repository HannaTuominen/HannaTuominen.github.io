import React, { Component } from 'react';
import ProjectsContainer from "./containers/ProjectsContainer/ProjectsContainer";
import {Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/projects" component={ProjectsContainer}/>
            <Route path="/" component={Home} exact/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
