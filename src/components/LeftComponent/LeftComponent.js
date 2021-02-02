import React from 'react';
import './LeftComponent.css';
import Github from '../../assets/github.png';
import LinkedIn from '../../assets/linkedin.png';

const LeftComponent = props => {
  const redirectToAnotherPage = (page) => {
    window.location.assign(page);
  };

  return (
  <React.Fragment>
    <div className="LeftTextBox">
      <h1>{"<Coder>"}</h1>
      <h3>Hanna Tuominen</h3>
      <br/>
      <h4>Social media:</h4>
      <br/>
      <img src={Github} style={{width: "50px"}} onClick={() => redirectToAnotherPage("https://github.com/HannaTuominen")} alt={"Github link"}/>
      <img src={LinkedIn} style={{width: "50px"}} onClick={() => redirectToAnotherPage("https://www.linkedin.com/in/hanna-kaisa-tuominen/")} alt={"LinkedIn link"}/>
    </div>
    <div  className="LeftTextBox">
      <h1>{"<Interests>"}</h1>
      <h2>Frontend</h2>
        <h4>React</h4>
        <h4>Angular</h4>
        <h4>JavaScript</h4>
        <h4>Java</h4>
        <h4>HTML5</h4>
        <h4>CSS3</h4>
        <h4>Python</h4>
        <h4>C#</h4>
      <h2>Backend</h2>
        <h4>SpringBoot</h4>
        <h4>SQL</h4>
      <h2>Other</h2>
        <h4>AWS</h4>
        <h4>Photoshop</h4>
        <h4>Unity</h4>
        <h4>Scrum</h4>
        <h4>Data Analytics</h4>
      <br/>
    </div>
  </React.Fragment>
  )
};

export default LeftComponent;
