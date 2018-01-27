import React from 'react';
import logo from '../../assets/logo.svg';
import './app.css';

const Bar = () => (
  <header className="header flex flex-row vertical-center">
    <img className="logo" src={logo} alt="logo" />
    <h1 className="title flex flex-1 end">VESELIN DIMITROV</h1>
    <hr className="dash" />
  </header>
);

const Resume = () => (
  <section className="resume">
    <div className="sub-header">
      <h2>Hi there, I am</h2>
      <h1>Veselin Dimitrov</h1>
    </div>
    <h3 className="bio">
      Software engineer with substantial experience with full stack JavaScript and C#.
      Proficient in server, mobile and web development.
      Comfortable in Unix like operating systems and passionate
      about hacking and tinkering with IoT devices.
    </h3>
    <h3 className="sub-footer">
      You can find my open-source projects on <a href="https://github.com/vidimitrov">Github</a> or check my <a href="https://www.linkedin.com/in/vidimitrov/">LinkedIn</a> profile.
    </h3>
  </section>
);

const App = () => (
  <div className="app">
    <Bar />
    <Resume />
  </div>
);

export default App;