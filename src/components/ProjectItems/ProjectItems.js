import React from 'react';
import ProjectItem from "./ProjectItem/ProjectItem";

const ProjectItems = ( props ) => {
  const items = props.projectItems.map(item => {
    return <ProjectItem github={item.githubUrl}
                        live={item.liveUrl}
                        key={item.id}
                        image={item.imageUrl}
                        desc={item.projectDescription}
                        type={item.projectType}
                        title={item.projectName}/>
    });

  return (
    <div>
      {items}
    </div>
  );
};

export default ProjectItems;
