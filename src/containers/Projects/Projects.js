import React, {Suspense} from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "../../components/Home/Home";
import LoadingIndicator from "../../components/UI/LoadingIndicator/LoadingIndicator";
import MobileContainer from "../MobileContainer/MobileContainer";
import WebContainer from "../WebContainer/WebContainer";
import ProjectsContainer from "../ProjectsContainer/ProjectsContainer";
import LeftComponent from "../../components/LeftComponent/LeftComponent";

// const MobileContainer = React.lazy(() => {
//   return import('../MobileContainer/MobileContainer');
// });
//
// const WebContainer = React.lazy(() => {
//   return import('../WebContainer/WebContainer');
// });
//
// const OtherContainer = React.lazy(() => {
//   return import('../ProjectsContainer/ProjectsContainer');
// });

const Projects = props => {
  return (
    <div>
      {/*<Suspense fallback={<div style={{marginTop: '100px'}}> <LoadingIndicator height={"100px"}/></div>}>*/}
        <Switch>
          <Route path="/projects/mobile" render={(props) => <MobileContainer/>}/>
          <Route path="/projects/web" render={(props) => <WebContainer/>}/>
          <Route path="/projects/other" render={(props) => <ProjectsContainer/>}/>
        </Switch>
        <Route exact path="/" render={() => <Home/>}/>
      {/*</Suspense>*/}
    </div>
  );
};

export default Projects;