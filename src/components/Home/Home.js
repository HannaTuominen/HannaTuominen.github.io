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
          My goal in life is to write clean, elegant and efficient code - (and to own a dog).</p>
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
          <h1>{"<Skills>"}</h1>
          <h2>Frontend</h2>
          <p>React</p>
          <p>Angular</p>
          <p>JavaScript</p>
          <p>Java</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Python</p>
          <p>C#</p>
          <h2>Backend</h2>
          <p>SpringBoot</p>
          <p>SQL</p>
          <h2>Other</h2>
          <p>AWS</p>
          <p>Photoshop</p>
          <p>Unity</p>
          <p>Scrum</p>
          <p>Data Analytics</p>
        </div>
      </div>
    </div>
  )
};

export default Home;
