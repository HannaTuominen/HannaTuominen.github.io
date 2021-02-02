import React from 'react';

import './ProjectItem.css';

import Github from '../../../assets/github.png';
import Live from '../../../assets/live.png';

const ProjectItem = ( props ) => {
  let image;

  switch (props.type) {
    case (1):
      image = <div className="ProjectItemContainerImageWeb">
        <img src={props.image} alt={props.title}/>
      </div>;
      break;
    case (2):
      image = <div className="ProjectItemContainerImageMobile">
        <img src={props.image} alt={props.title}/>
      </div>;
      break;
    case (3):
      image = <div className="ProjectItemContainerImageOther">
        <img src={props.image} alt={props.title}/>
      </div>;
      break;
    default:
      image = null;
  }

  const redirectToAnotherPage = (page) => {
    window.location.assign(page);
  };

  return (
    <div className="ProjectItemContainer">
      {image}
      <div className="ProjectItemContainerInfo">
        <h3>{props.title}</h3>
        <h4>{props.desc}</h4>
        <div className="Redirect">
          <h5>Check out the source code and live version:</h5>
          <img src={Github} style={{width: "50px", paddingRight: "10px"}} onClick={() => redirectToAnotherPage(props.github)}/>
          <img src={Live} style={{width: "50px"}} onClick={() => redirectToAnotherPage(props.live)}/>
      </div>
      </div>
    </div>
  );
};
export default ProjectItem;
