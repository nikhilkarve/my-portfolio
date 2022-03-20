// import profilePicture from './assets/img/profile.jpeg';
import profileNikhil from './assets/img/nikhil_image.jpg';
import classes from './App.module.css';
import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { useState } from 'react';

function App() {
  return (
    <div>
      <div className={classes.profile}>
        <img src={profileNikhil} alt="nikhil karve"></img>
        <h1 className={classes.name}>Nikhil Karve</h1>
        <p className={classes.tag}>Software Developer</p>
      </div>
      <div className={classes.profileButtons}>
        <button>About</button>
        <button className={classes.middle}>Projects</button>
        <button>Blog</button>
      </div>
      <div className={classes.socialLinks}>
        <a href="https://www.github.com/nikhilkarve">
          <BsGithub className={classes.icons} />
        </a>
        <a href="https://www.linkedin.com/in/nikhil-karve-66067a183/">
          <BsLinkedin className={classes.icons} />
        </a>
        <a href="">
          <SiGmail className={classes.icons} />
        </a>
        <a href="https://medium.com/@nikhilkarve007">
          <BsMedium className={classes.icons} />
        </a>
      </div>
    </div>
  );
}

export default App;
