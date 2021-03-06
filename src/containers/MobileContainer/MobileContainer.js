import React, {useEffect, useState} from 'react';
import '../Containers.css';

import ProjectItems from "../../components/ProjectItems/ProjectItems";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import LoadingIndicator from "../../components/UI/LoadingIndicator/LoadingIndicator";
import axios from '../../axios-fetching';

const MobileContainer = props => {
  const [projects, setProjects] = useState([]);
  const [hasError, setHasError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const clearError = () => {
    setHasError(false);
    setIsLoading(false);
    props.history.push("/");
  };

  useEffect(  () => {
    setIsLoading(true);
    axios.get('projects.json')
      .then( response => {
        let array;
        array = (response.data.filter(item => item.projectType === 2));
        setProjects(array);
        setIsLoading(false);
      })
      .catch((error) => setHasError(error.message));
  }, []);

  return (
    <div className="Containers">
      <div className="ContainersTitle">
        <h1>Mobile projects</h1>
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

export default MobileContainer;
