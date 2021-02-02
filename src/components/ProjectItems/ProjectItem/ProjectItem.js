import React from 'react';

import './ProjectItem.css';

const ProjectItem = ( props ) => {

  return (
    <div className="ProjectItemContainer">
      <div className="ProjectItemContainerImage">
        <img src={props.image} alt={props.title}/>
      </div>
      <div className="ProjectItemContainerInfo">
        <h3>{props.title}</h3>
        <h4>{props.desc}</h4>
        <h5>View source code here: <a href={props.github}>Github</a> <br/>The the project can be viewed live <a href={props.live}>here</a></h5>
      </div>
    </div>
  );
};
export default ProjectItem;
