import classes from '../App.module.css';
import { Link } from 'react-router-dom';
import ResumeDoc from '../Resume.pdf';

const Buttons = () => {
  return (
    <div className={classes.profileButtons}>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <a href="https://medium.com/@nikhilkarve007">
        <button>Blog</button>
      </a>
      <a href={ResumeDoc} target="_blank" rel="noreferrer">
        <button>Résumé</button>
      </a>
    </div>
  );
};

export default Buttons;
