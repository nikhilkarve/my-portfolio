import { Fragment } from 'react';
import classes from '../App.module.css';
import Header from '../UI/Header';

const About = () => {
  return (
    <Fragment>
      <Header />
      <div className={classes.myInfo}>
        <h1>Hi,</h1>
        <p className={classes.tagline}>
          I am a{' '}
          <span className={classes.makeBold}>Software Developer</span>{' '}
          from Atlanta, USA.
        </p>

        <p className={classes.about}>
          A{' '}
          <span className={classes.makeUnderline}>
            passionate engineer, a fast-learning developer
          </span>{' '}
          comfortable with a variety of languages and paradigms.
          <br />
          <br />I am pursuing{' '}
          <span className={classes.makeUnderline}>
            Masters in Computer Science
          </span>{' '}
          at{' '}
          <a href="https://www.gsu.edu" className={classes.gsuLink}>
            Georgia State University
          </a>
          , Atlanta. I am also working as a{' '}
          <span className={classes.makeUnderline}>
            Research Assistant
          </span>{' '}
          in Morse Lab, GSU.
          <br />
          <br />
          <p>
            Apart from coding, I am passionate about music and
            reading.
          </p>
          <br />
          <p>Oh and yes, I am good at making Chai. ☕</p>
        </p>
      </div>
      .
    </Fragment>
  );
};

export default About;
