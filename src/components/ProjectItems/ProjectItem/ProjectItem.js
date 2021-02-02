import React from 'react';

import './ProjectItem.css';

const ProjectItem = ( props ) => {
  let image;

  switch (props.type) {
    case (1):
      image = <div className="ProjectItemContainerImageWeb">
        <img src={props.image} alt={props.title}/>
      </div>
      break;
    case (2):
      image = <div className="ProjectItemContainerImageMobile">
        <img src={props.image} alt={props.title}/>
      </div>
      break;
    case (3):
      image = <div className="ProjectItemContainerImageOther">
        <img src={props.image} alt={props.title}/>
      </div>
      break;
    default:
      image = null;
  }


  return (
    <div className="ProjectItemContainer">
      {image}
      <div className="ProjectItemContainerInfo">
        <h3>{props.title}</h3>
        <h4>{props.desc}</h4>
        <h5>View source code here: <a href={props.github}>Github</a> <br/>The the project can be viewed live <a href={props.live}>here</a></h5>
      </div>
    </div>
  );
};
export default ProjectItem;
