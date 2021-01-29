import React from 'react';

const ProjectItem = ( props ) => {

  return (
    <div>
      <div>
        <img src={props.image} alt={"hi"}/>
      </div>
      <div>
        {props.github}
        {props.live}
      </div>
    </div>
  );
};
export default ProjectItem;
