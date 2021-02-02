import React, {useEffect, useState} from 'react';
import './ProjectsContainer.css';

import ProjectItems from "../../components/ProjectItems/ProjectItems";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import LoadingIndicator from "../../components/UI/LoadingIndicator/LoadingIndicator";
import axios from '../../axios-fetching';

const ProjectsContainer = props => {
  const [projects, setProjects] = useState([]);
  const [hasError, setHasError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const closeModalHandler = () => {
    props.history.push("/");
  };

  const clearError = () => {
    setHasError(false);
    setIsLoading(false);
    props.history.push("/");
  };

  useEffect(  () => {
    setIsLoading(true);
    axios.get('projects.json')
      .then( response => {
        // console.log(response.data)
        setProjects(response.data);
        setIsLoading(false);
      })
     .catch((error) => setHasError(error.message));

    //  fetch('/temp.json',{
    //   headers : {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    // })
    //   .then(r => r.json())
    //   .then(json => {
    //     console.log(json);
    //    setProjects(json)
    //     setIsLoading(false);
    // })
  }, []);

  return (
    <div className="ProjectsContainer">
      <div>
        <h1>Other projects</h1>
      </div>
      {hasError ?
        <ErrorModal
          show={hasError}
          closeModal={clearError}>
          {hasError}
        </ErrorModal> :
      <div>
        {isLoading ?
          <div  className="AlbumsLoader"><LoadingIndicator height={"50px"}/></div> :
        <ProjectItems projectItems={projects}/>
        }
      </div>}
    </div>
  );
};

export default ProjectsContainer;
