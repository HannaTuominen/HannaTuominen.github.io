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
        <p>{props.desc}</p>
        <div className="Redirect">
          {props.github.length > 0 || props.live.length > 0 ?
            <div>
              <h5>Check out more about this project:</h5>
              {props.github.length >0 ? <img src={Github} style={{width: "60px", paddingRight: "10px"}} onClick={() => redirectToAnotherPage(props.github)}/>: null}
              {props.live.length >0 ? <img src={Live} style={{width: "60px"}} onClick={() => redirectToAnotherPage(props.live)}/>: null}
            </div>
          : null}
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
