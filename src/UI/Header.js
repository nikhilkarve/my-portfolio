import classes from '../App.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.headerButtons}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <Link to="/blog">
        <button>Blog</button>
      </Link>
      <Link to="/resume">
        <button>Résumé</button>
      </Link>
    </div>
  );
};

export default Header;
