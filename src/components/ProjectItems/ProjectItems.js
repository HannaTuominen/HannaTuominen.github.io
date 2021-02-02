import React from 'react';
import ProjectItem from "./ProjectItem/ProjectItem";

import './ProjectItems.css'

const ProjectItems = ( props ) => {
  const items = props.projectItems.map(item => {
    return  <ProjectItem github={item.githubUrl}
                   live={item.liveUrl}
                   key={item.id}
                   image={item.imageUrl}
                   desc={item.projectDescription}
                   type={item.projectType}
                   title={item.projectName}/>
    });

  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  );
};

export default ProjectItems;
