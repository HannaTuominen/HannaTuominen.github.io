import React from 'react';
import './LeftComponent.css';
import Github from '../../assets/github.png';
import LinkedIn from '../../assets/linkedin.png';

const LeftComponent = props => {
  const redirectToAnotherPage = (page) => {
    window.location.assign(page);
  };

  return (
  <div className="WelcomeText">
    <h1>{"<Coder>"}</h1>
    <h2>Hi!<br/>I'm Hanna</h2>
    <img src={Github} style={{width: "50px"}} onClick={() => redirectToAnotherPage("https://github.com/HannaTuominen")} alt={"Github link"}/>
    <img src={LinkedIn} style={{width: "50px"}} onClick={() => redirectToAnotherPage("https://www.linkedin.com/in/hanna-kaisa-tuominen/")} alt={"LinkedIn link"}/>
  </div>
  )
};

export default LeftComponent;
