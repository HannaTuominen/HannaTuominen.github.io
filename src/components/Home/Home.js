import React from 'react';
import './Home.css';
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";

const Home = props => {
  const redirectToAnotherPage = (page) => {
    window.location.assign(page);
  };

  return (
    <div className="HomeContainer">
      <div className="ItemsContainer">
        <div className="CenterItemsContainer">
          <h1>{"<Coder>"}</h1>
          <h3>Hanna Tuominen</h3>
          <p>Full Stack Developer who is interested in working with chill people, difficult and versatile projects.
          My goal in life is to write clean, elegant and efficient code - (and own a dog).</p>
          <br/>
          <h4>Social media:</h4>
          <br/>
          <img src={Github} style={{width: "50px"}} onClick={() => redirectToAnotherPage("https://github.com/HannaTuominen")} alt={"Github link"}/>
          <img src={LinkedIn} style={{width: "50px"}} onClick={() => redirectToAnotherPage("https://www.linkedin.com/in/hanna-kaisa-tuominen/")} alt={"LinkedIn link"}/>
        </div>
      </div>
      <div className="MiddleContainer"></div>
      <div className="ItemsContainer">
        <div className="CenterItemsContainer">
          <h1>{"<Knowledge>"}</h1>
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
        </div>
      </div>
    </div>
  )
};

export default Home;
