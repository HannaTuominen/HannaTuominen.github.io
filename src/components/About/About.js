import React from 'react';
import './About.css';
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";

const About = props => {

  const redirectToAnotherPage = (page) => {
    window.location.assign(page);
  };

  return (
  <React.Fragment>
    <div className="AboutContainer">
      <div className="AboutTitle">
        <h1>About me</h1>
      </div>
      <div className="AboutRow">
        <div  className="AboutColumn">
          <h2>Currently</h2>
          <h4>Education</h4>
          <p>third year programming student at Tampere University of Applied
            Sciences (TAMK). </p>
          <h4>Speciality</h4>
          <p>Software Development Department.</p>
        </div>
        <div  className="AboutColumn">
          <h2>History</h2>
          <p>
            I began coding back in the early 2010s when Drupal was cool and haven't stopped since.
            I have tried so many things, oh god you would not believe me!
            I have tested everything from web to mobile to games. And oh boy what a journey has it been!
          </p>
        </div>
      </div>
      <div className="AboutRow">
        <div className="AboutColumn">
          <h2>Interests</h2>
          <p>I am currently interested in becoming a Full Stack developer.</p>
          <h4>Front End</h4>
          <p>React</p>
          <p>Angular</p>
          <p>JavaScript</p>
          <p>Java</p>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Python</p>
          <p>C#</p>
          <h4>Back End</h4>
          <p>SpringBoot</p>
          <p>SQL</p>
          <h4>Other</h4>
          <p>AWS</p>
          <p>Photoshop</p>
          <p>Unity</p>
          <p>Scrum</p>
          <p>Data Analytics</p>
        </div>
        <div className="AboutColumn">
          <h2>Education</h2>
          <h4>2018 -2021 • TAMPERE UNIVERSITY OF APPLIED SCIENCES</h4>
          <p>Bachelor of Business Administration – BBA, Business Information Systems</p>
          <h4>2013-2016 • SATAEDU</h4>
          <p>Vocational Qualification in Audiovisual Communication, Media assistant, Animation and games</p>
          <h4>2010-2013 • TURUN AMMATTI-INSTITUUTTI</h4>
          <p>Vocational Qualification in Business Information Technology</p>
        </div>
      </div>
      <div className="AboutRow">
        <div className="AboutColumn">
          <h2>Contact</h2>
          <div className="AboutRow">
            <div className="AboutRow">
              <p>
                I can be contacted best via LinkedIn. I also have a Github that contains all of my current projects.
              </p>
            </div>
            <div className="ContactLinks">
              <img src={Github} style={{width: "50px"}} onClick={() => redirectToAnotherPage("https://github.com/HannaTuominen")} alt={"Github link"}/>
            </div>
            <div className="ContactLinks">
              <img src={LinkedIn} style={{width: "50px"}} onClick={() => redirectToAnotherPage("https://www.linkedin.com/in/hanna-kaisa-tuominen/")} alt={"LinkedIn link"}/>
            </div>
            </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
};

export default About;
