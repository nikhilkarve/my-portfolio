import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import classes from '../App.module.css';
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <div className={classes.socialLinks}>
      <a href="https://www.github.com/nikhilkarve">
        <BsGithub className={classes.icons} />
      </a>
      <a href="https://www.linkedin.com/in/nikhil-karve-66067a183/">
        <BsLinkedin className={classes.icons} />
      </a>
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = 'mailto:karvenikhil007@gmail.com';
          e.preventDefault();
        }}
      >
        <SiGmail className={classes.icons} />
      </Link>
      <a href="https://medium.com/@nikhilkarve007">
        <BsMedium className={classes.icons} />
      </a>
    </div>
  );
};

export default Socials;
