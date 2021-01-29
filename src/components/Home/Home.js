import React from 'react';
import './Home.css';


const Home = props => (
  <div className="HomeContainer">
    <div className="Welcome">
      <div className="WelcomeText">
        <h1>{"<Coder>"}</h1>
        <h2>Hi!<br/>I'm Hanna</h2>
    </div>
    </div>
    <div className="MoreInfo">
      <div className="MoreInfoText">
        <h1>FullStack Developer</h1>
        <p>
          I am a <span className="Bolding">third year</span> programming student at Tampere University of Applied
          Sciences (TAMK) where I am currently specializing in the software development department.
          I began coding back in the early 2010s when Drupal was cool and haven't stopped since.
          I have tried so many things, oh god you would not believe me!
        </p>
        <p>
          I have tested everything from web to mobile to games. And oh boy what a journey has it been!
        </p>
      </div>
    </div>
  </div>
);

export default Home;
