import React from 'react';
import './About.css';

const About = props => {

  return (
  <React.Fragment>
    <div className="LeftTextBox">
      <h1>About me</h1>
      <div className="HomeText">
        <div>
          <p>
            I am a <span className="Bolding">third year</span> programming student at Tampere University of Applied
            Sciences (TAMK) where I am currently specializing in the software development department.
          </p>
        </div>
        <div>
          <h1>Interests</h1>
          <p>I am currently interested in becoming a Full Stack developer.</p>
        </div>
        <div>
          <h1>History</h1>
          <p>
            I began coding back in the early 2010s when Drupal was cool and haven't stopped since.
            I have tried so many things, oh god you would not believe me!
            I have tested everything from web to mobile to games. And oh boy what a journey has it been!
          </p>
        </div>
        <div>
          <h1>Education</h1>
          <h4>2018 -2021 • TAMPERE UNIVERSITY OF APPLIED SCIENCES</h4>
          <p>Bachelor of Business Administration – BBA, Business Information Systems</p>
          <h4>2013-2016 • SATAEDU</h4>
          <p>Vocational Qualification in Audiovisual Communication, Media assistant, Animation and games</p>
          <h4>2010-2013 • TURUN AMMATTI-INSTITUUTTI</h4>
          <p>Vocational Qualification in Business Information Technology</p>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
};

export default About;
